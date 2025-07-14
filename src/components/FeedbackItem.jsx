import { useState } from "react"

function FeedbackItem(){
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of a feedback item")
    const handleClick = () => {
        setRating(10)
    }
    const secondClick = () => {
        setText("Change this")
    }
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
            <button onClick={secondClick}>Second Click</button>
        </div>
    )
}

export default FeedbackItem