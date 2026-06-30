

export const CustomButton = ({ text = "click me", color, bg = "bg-amber-600", fs, customEvents }) => {
    // console.log(props);

    return (
        <div>
            <button onClick={customEvents} style={{ fontSize: `${fs}` }} className={`border-2  border-${color}-400 p-2 rounded-2xl ${bg}`}>{text}</button>
        </div>
    )
}
