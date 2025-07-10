function App(){
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id:1, text: 'Comment One'},
        {id:2, text: 'Comment Two'},
        {id:3, text: 'Comment Three'}
    ]
    const loading = false
    const showComments = false //Change to true or false

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            {showComments && ( <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((x,index)=>{
                       return <li key={index}>{x.text}</li>
                    })}
                </ul>
            </div>)} 
            <br/>
            {5 + 5}
            <br/>
            {Math.random() * 5 + 5}
            <h3>{title.toUpperCase()}</h3>
        </div>
        //Used double ampersand and eliminated the null
    )
}

export default App;