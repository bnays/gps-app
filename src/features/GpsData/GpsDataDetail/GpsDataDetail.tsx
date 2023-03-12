import { Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import PieChart from "../../../components/Charts/PieChart/PieChart";
import MuiDatatables from "../../../components/MuiDatatable/MuiDatatables";
import { StyledPaper } from "../../../styles/globalStyles.styled";
import { formatTimeStamp } from "../../../utils";
import { TitleWrapper } from "../../Auth/Login/Login.styled";
import { getGpsDataDetail, resetGpsDataDetail } from "../GpsDataSlice";
import { ChartWrapper, GpsDataDetailWrapper } from "./GpsDataDetail.styled";

interface GpsDataDetailProps {
    deviceId?: string;
}

const GpsDataDetail: React.FC<GpsDataDetailProps> = ({ deviceId }: GpsDataDetailProps) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const params: any = useParams();

    const [deviceType, setDeviceType] = useState<string>("");
    const [deviceIdTitle, setDeviceIdTitle] = useState<string>("");
    const [data, setData] = useState([]);
    const [label, setLabel] = useState([]);
    const [dataSetsData, setDataSetsData] = useState([]);

    const { gpsDataDetail }: any = useAppSelector((state: RootState) => state.gpsData);

    // Table
    const columns = ["Timestamp", "Location"];

    const options = {
        filter: false,
        viewColumns: false,
        print: false,
        download: false,
        pagination: false,
        search: false,
        selectableRows: false
    };

    // Pie Chart
    const datasets = [
        {
            label: "% Time Spent on Each Location",
            data: dataSetsData,
            backgroundColor: ["rgb(223 77 76)", "rgb(120 46 45)", "rgb(255, 206, 86)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"]
        }
    ];

    const chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20
                }
            }
        }
    };

    useEffect(() => {
        if (deviceId) {
            dispatch(getGpsDataDetail(deviceId));
        } else {
            dispatch(getGpsDataDetail(params.id));
        }
        return () => {
            dispatch(resetGpsDataDetail());
        };
    }, [deviceId, params.id, dispatch]);

    useEffect(() => {
        if (gpsDataDetail.length > 0) {
            setDeviceType(gpsDataDetail[0].device_type);
            setDeviceIdTitle(gpsDataDetail[0].device_id);
            formatGPSData();
            // Charts
            formatChartData();
        }
    }, [gpsDataDetail]);

    const formatGPSData = () => {
        let initialData: any = [];
        gpsDataDetail.map((res: any) => {
            let content = [formatTimeStamp(res.timestamp), res.location];
            initialData.push(content);
        });
        setData(initialData);
    };

    const formatChartData = () => {
        let totalEntries = gpsDataDetail.length;
        let label: any = [];
        let data: any = [];
        const chartData = gpsDataDetail.reduce((prev: any, { location }: any) => {
            const entries = gpsDataDetail.filter((item: any) => item.location === location).length;
            prev[location] = prev[location] ? prev[location] : calculatePercentage(totalEntries, entries);
            return prev;
        }, {});

        label = () =>
            Object.keys(chartData).map((item) => {
                return `${item} ${chartData[item]} %`;
            });
        data = Object.values(chartData);
        setLabel(label);
        setDataSetsData(data);
    };

    const calculatePercentage = (total: number, value: number) => {
        return (100 * value) / total;
    };

    return (
        <GpsDataDetailWrapper>
            <StyledPaper variant="outlined">
                <TitleWrapper theme={theme}>
                    <Typography variant="h4" className="title" component="h4">
                        {deviceIdTitle}
                    </Typography>
                    <Typography variant="h4" className="sub-title" component="h4">
                        {deviceType}
                    </Typography>
                </TitleWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className="Table">
                            <MuiDatatables data={data} columns={columns} options={options} />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <ChartWrapper>
                            <PieChart title={"% Time Spent on Each Location"} labels={label} datasets={datasets} options={chartOptions} />
                        </ChartWrapper>
                    </Grid>
                </Grid>
            </StyledPaper>
        </GpsDataDetailWrapper>
    );
};

export default GpsDataDetail;
