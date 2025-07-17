import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedBack] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4()
            setFeedBack([newFeedback, ...feedback])
        }
    

    const deleteFeedback = (id) => {
            if(window.confirm('Are you sure yoou want to delete?'))
            {
                setFeedBack(feedback.filter((item)=> item.id !== id))
            }        
        }    
    
    const updateFeedback = (id, updItem) => {
        setFeedBack(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
    }     

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider 
    value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext