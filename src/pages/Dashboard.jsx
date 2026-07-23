import { Outlet } from "react-router-dom"
import { Sidebar } from "../Components/Sidebar"


export const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="min-w-0 flex-1">
                <Outlet />
            </main>
        </div>
    )
}
