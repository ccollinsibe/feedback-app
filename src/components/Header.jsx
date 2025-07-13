function Header({text = "Feedback UI"}){
    const headerStyles = {
        backgroundColor: "blue", 
        color: "yellow"
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

export default Header