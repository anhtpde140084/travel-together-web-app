import { Route, Routes } from "react-router-dom";
import { PATH } from "./Config/RouterName";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MapPage from "./Pages/MapPage/MapPage";
import TravelRequestPage from "./Pages/TravelRequestPage/TravelRequestPage";
import ProtectedRoutes from "./ProtectedRoutes";

const Views = () => {
    return (
        <Routes>
            <Route path={PATH.LOGIN} element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path={PATH.HOME} element={<HomePage />} />
                <Route path={PATH.TRAVEL_REQUEST} element={<TravelRequestPage />} />
                <Route path={PATH.MAPEXPLORE} element={<MapPage />} />
            </Route>
        </Routes>
    );
};

export default Views;