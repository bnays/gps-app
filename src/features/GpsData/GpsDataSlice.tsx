import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchGpsDataApi } from "../../api/api";

const initialStateValue = {
    allGpsData: [],
    gpsDataDetail: [],
    apiStatus: ""
};

export const getGpsData = createAsyncThunk("gpsData/getGpsData", async () => {
    const headers = {
        Authorization: "Bearer " + `${localStorage.getItem("accessToken")}`
    };
    try {
        const response = await axios.get(`${fetchGpsDataApi}`, {
            headers: headers
        });
        return response.data;
    } catch (err: any) {
        return err.response;
    }
});

export const getGpsDataDetail = createAsyncThunk("gpsData/getGpsDataDetail", async (deviceId: string) => {
    const headers = {
        Authorization: "Bearer " + `${localStorage.getItem("accessToken")}`
    };
    try {
        const response = await axios.get(`${fetchGpsDataApi}/${deviceId}`, {
            headers: headers
        });
        return response.data;
    } catch (err: any) {
        return err.response;
    }
});

export const GpsDataSlice = createSlice({
    name: "gpsData",
    initialState: initialStateValue,
    reducers: {
        resetGpsDataDetail: (state) => {
            state.gpsDataDetail = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGpsData.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(getGpsData.fulfilled, (state, action: PayloadAction<any>) => {
                state.allGpsData = action.payload;
                state.apiStatus = "done";
            })
            .addCase(getGpsDataDetail.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(getGpsDataDetail.fulfilled, (state, action: PayloadAction<any>) => {
                state.gpsDataDetail = action.payload;
                state.apiStatus = "done";
            });
    }
});

export const { resetGpsDataDetail } = GpsDataSlice.actions;

export default GpsDataSlice.reducer;
