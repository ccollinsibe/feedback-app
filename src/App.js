import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPages';

function App(){
    const [feedback, setFeedBack] = useState(FeedbackData)
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
    return (
        <>
            <Router>
                <Header/>
                <div className="container">
                    <Route exact path='/'>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </Route>
                    <Route path='/about' component={AboutPage} />
                </div>
            </Router>
        </>
            )
}

export default App;