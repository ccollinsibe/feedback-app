function App(){
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id:1, text: 'Comment One'},
        {id:2, text: 'Comment Two'},
        {id:3, text: 'Comment Three'}
    ]
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            {5 + 5}
            <br/>
            {Math.random() * 5 + 5}
            <h3>{title.toUpperCase()}</h3>
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((x,index)=>{
                       return <li key={index}>{x.text}</li>
                    })}
                </ul>
            </div>
        </div>
    
    )
}

export default App;