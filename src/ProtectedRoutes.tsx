import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { ApplicationState } from "./Redux";
// import { UserContext } from "./App";

const useAuth = () => {
    let loggedIn = false;
    let token = localStorage.getItem("token");
    if (token) {
        // let tokenExpiration: any = jwtDecode(token);
        // let dateNow = new Date();
        // if (tokenExpiration.exp < dateNow.getTime() / 500) {
        //     loggedIn = false;
        // } else {
        //     loggedIn = true;
        // }
        loggedIn = true;
    } else {
        loggedIn = false;
    }
    return loggedIn;
};

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace state={{ from: location }} />
    );
};

export default ProtectedRoutes;