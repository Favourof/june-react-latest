import { useState } from "react";
import { CustomButton } from "./Components/CustomButton";

function About() {
    const [name, setName] = useState("favour");
    const [count, setCount] = useState(0);
    // let name = 'favour'
    const handleChangeName = () => {
        // name = "Bayo"

        // console.log(name);
        setName("Bayo")
    }


    const Increment = () => {
        setCount(count + 1)
    }
    console.log(name);
    return (
        <div>
            <div className="w-[60%] m-auto border-2">
                <p>Count: {count}</p>
                <button onClick={Increment} className="border-2 border-red-400 p-2">+</button>
                <button className="border-2 border-green-400 p-2">_</button>
            </div>
            <h1>Working on reactcuse State</h1>
            <p>Name: {name}</p>
            {/* <button className="border-2 border-amber-400 p-2" onClick={() => setName("Bayo")}>Change Name</button> */}
            <button className="border-2 border-amber-400 p-2" onClick={handleChangeName}>Change Name</button>

            <CustomButton fs="20px" text={"log in"} color={"red"} bg="bg-green-400" customEvents={Increment} />
        </div>
    )
}

export default About