import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Sidebarcom from "../components/Sidebar";

function Layout() {
    const [togale, setTogale] = useState(false);
    useEffect(() => {
        if (Cookies.get("token") === undefined) {

            window.location.href = "/login";
        }
    }, [])
    return (
        <>
            {togale ?
                <div className=" h-[100vh] flex absolute w-[100vw]  " onClick={() => { setTogale(!togale) }}>
                    <div>        <Sidebarcom /></div>

                </div> : null
            }
            <Header togale={togale} setTogale={setTogale} />

            <div className=" h-[86vh] overflow-y-auto">
                <Outlet />
            </div>

            <Footer />

        </>
    )
}
export default Layout;