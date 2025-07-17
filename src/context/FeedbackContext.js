import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedBack] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const deleteFeedback = (id) => {
            if(window.confirm('Are you sure yoou want to delete?'))
            {
                setFeedBack(feedback.filter((item)=> item.id !== id))
            }        
        }
    
    return <FeedbackContext.Provider 
    value={{
        feedback: feedback,
        deleteFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext