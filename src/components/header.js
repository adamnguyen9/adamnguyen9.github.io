export function Header(props) {
    return (
        <div id="navbar">
            <a href="#about" onClick={() => props.setIsChatOpen(false)}>About Me</a>
            <a href="#hobbies" onClick={() => props.setIsChatOpen(false)}>Hobbies</a>
            <a href="#education" onClick={() => props.setIsChatOpen(false)}>Education and Skills</a>
            <a href="#contactMe" onClick={() => props.setIsChatOpen(false)}>Contact Me!</a>
            <a onClick={() => props.setIsChatOpen(true)}>Chat with me!</a>
        </div>
    )
}
