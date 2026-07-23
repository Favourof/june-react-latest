import { Link } from "react-router-dom"


export const Sidebar = () => {
    return (
        <aside className="w-64 shrink-0 border-r border-slate-200 bg-white">
            <ul className="flex min-h-[calc(100vh-80px)] flex-col gap-2 p-5 text-sm font-medium text-slate-600">
                <li><Link className="block rounded-xl px-4 py-3 transition hover:bg-slate-100" to="/dashboard">Home</Link></li>
                <li><Link className="block rounded-xl px-4 py-3 transition hover:bg-slate-100" to="/dashboard/add-product">Add product</Link></li>
                <li><Link className="block rounded-xl px-4 py-3 transition hover:bg-slate-100" to="/dashboard/profile/Bola/20/Nigeria">Profile</Link></li>
                <li><Link className="block rounded-xl px-4 py-3 transition hover:bg-slate-100" to="/dashboard/setting">Settings</Link></li>
            </ul>
        </aside>
    )
}
