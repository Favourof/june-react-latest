import { useNavigate, useParams } from "react-router-dom"


export const Profile = () => {
    const { name, age, country } = useParams()
    const navigate = useNavigate()
    console.log(name)
    const takeHome = () => {
        setTimeout(() => {
            navigate('/home')
        }, 2000);

    }
    return (
        <div>
            <h1>Profile</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Country: {country}</h2>
            <button className="rounded-2xl border-2 p-4" onClick={takeHome}>GO back Home</button>

        </div>
    )
}
