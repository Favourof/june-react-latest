import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div>
            <ul className="border-2 rounded-2xl p-2" style={{ cursor: "pointer", width: "50%", margin: "20px auto", display: "flex", justifyContent: "space-between", }}>
                <li> <Link to={"/home"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/product"}>product</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
        </div>
    )
}
