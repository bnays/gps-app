import { ArrowForward } from "@mui/icons-material";
import { Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import MuiDatatables from "../../../components/MuiDatatable/MuiDatatables";
import { StyledPaper } from "../../../styles/globalStyles.styled";
import { formatTimeStamp } from "../../../utils";
import { setAuthUser } from "../../Auth/AuthSlice";
import { TitleWrapper } from "../../Auth/Login/Login.styled";
import { getGpsData } from "../GpsDataSlice";
import { GpsDataWrapper, TableWrapper } from "./GpsDataList.styled";

const GpsDataList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [data, setData] = useState([]);
    const theme = useTheme();

    const { allGpsData } = useAppSelector((state: RootState) => state.gpsData);

    const options = {
        filter: false,
        viewColumns: false,
        selectableRows: false,
        rowsPerPage: 7,
        downloadOptions: {
            filename: "GpsData.csv"
        }
    };

    const columns = ["Device Id", "Device Type", "Location", "Timestamp", "Action"];

    useEffect(() => {
        allGpsData.length === 0 &&
            dispatch(getGpsData()).then((res: any) => {
                if (res.payload.status === 401) {
                    handleLogout();
                }
            });
        formatGPSData();
    }, [allGpsData]);

    const formatGPSData = () => {
        let initialData: any = [];
        allGpsData &&
            allGpsData.map((res: any) => {
                let actionIcon = () => {
                    return (
                        <Button onClick={() => openDetailedView(res.device_id)}>
                            <ArrowForward />
                        </Button>
                    );
                };
                let content = [res.device_id, res.device_type, res.location, formatTimeStamp(res.timestamp), actionIcon];
                initialData.push(content);
                return true;
            });
        setData(initialData);
    };

    const openDetailedView = (deviceId: string) => {
        navigate(`/gpsdatalist/${deviceId}`);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        dispatch(setAuthUser({}));
        navigate("/login");
    };

    return (
        <GpsDataWrapper>
            <StyledPaper variant="outlined">
                <TitleWrapper theme={theme}>
                    <Typography variant="h4" className="title" component="h4">
                        Gps Data
                    </Typography>
                </TitleWrapper>
                <TableWrapper>
                    <MuiDatatables options={options} columns={columns} data={data} />
                </TableWrapper>
            </StyledPaper>
        </GpsDataWrapper>
    );
};

export default GpsDataList;
