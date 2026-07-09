import { Link } from "react-router-dom"


export const Sidebar = () => {
    return (
        <div>
            <ul className="border-2 rounded-2xl p-2" style={{ cursor: "pointer", width: "100%", height: "100vh", display: "flex", flexDirection: "column", }}>
                <li> <Link to={"/dashboard"}>Home</Link></li>
                <li><Link to={"/dashboard/profile/Bola/20/Nigeria"}>Profile</Link></li>
                <li><Link to={"/dashboard/setting"}>Setting</Link></li>

            </ul>
        </div>
    )
}
