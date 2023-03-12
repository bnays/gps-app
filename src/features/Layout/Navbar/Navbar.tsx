import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setAuthUser } from "../../Auth/AuthSlice";
import { NavbarWrapper } from "./Navbar.styled";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("accessToken");

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        dispatch(setAuthUser({}));
        navigate("/login");
    };

    return (
        <NavbarWrapper>
            {isLoggedIn && (
                <Button className="logout" onClick={() => handleLogout()}>
                    Logout
                </Button>
            )}
        </NavbarWrapper>
    );
};

export default Navbar;
