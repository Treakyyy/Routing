import { Outlet } from "react-router-dom"
import Menu from "../component/Menu"

const MainLayout = () => {
    return (
    <>
        <Menu />
        <Outlet />
    </>
    )
}

export default MainLayout