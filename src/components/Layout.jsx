import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto px-3">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;