import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "../features/Auth/AuthSlice";
import GpsDataReducer from "../features/GpsData/GpsDataSlice";

const rootReducer = combineReducers({
    auth: AuthReducer,
    gpsData: GpsDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
