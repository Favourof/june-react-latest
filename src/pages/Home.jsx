import { useEffect, useState } from "react"


export const Home = () => {
    const [count, setCount] = useState(1)
    const [counter, setCounter] = useState(1)
    const [mon, setMon] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter + 1)
    //         console.log("runing");

    //     }, 1000);

    // },)


    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count + 1)
    //         console.log("run");

    //     }, 1000);

    // }, [])

    useEffect(() => {
        console.log("monitor the effect with mon state");

        setTimeout(() => {
            setCount(count + 1)
            console.log("run");

        }, 1000);

    }, [mon])

    return (
        <div>
            <h1>Home</h1>
            <p>{count}</p>
            <p>monitor: {count}</p>
            <button onClick={() => setMon(!mon)}>toggle</button>
        </div>
    )
}
