import { Outlet } from "react-router-dom"
import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = () => {

    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout;