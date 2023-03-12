import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GpsDataDetail, GpsDataList, Login, Signup } from "../features/index";
import Navbar from "../features/Layout/Navbar/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";

function Routing() {
    return (
        <>
            <Router>
                <CssBaseline />
                <Navbar />
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route index element={<GpsDataList />} />
                        <Route path="/gpsdatalist" element={<GpsDataList />} />
                        <Route path="/gpsdatalist/:id" element={<GpsDataDetail />} />
                    </Route>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default Routing;
