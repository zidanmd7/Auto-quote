import { Outlet } from "react-router-dom";
import CornerNav from "./cornernav.jsx";
import Footer from "./footer.jsx";

function Layout() {
    return (
        <>
            <CornerNav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;