import { Outlet } from "react-router-dom"
import { Sidebar } from "../Components/Sidebar"


export const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar className="w-[30%]" />
            <main className="w-[70%]">
                <Outlet />
            </main>
        </div>
    )
}
