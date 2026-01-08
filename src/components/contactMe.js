export function ContactMeSection () {
    return (
    <section class="section" style={{background: "none"}} id="contactMe">
        <div class="container">
            <h1 class="title" style={{textAlign: "center"}}>Useful Links</h1>
                <div class="columns box" style={{background: "none", justifyContent: "center"}}>  
                    <a href="https://www.linkedin.com/in/adam-nguyen-a0aa99217/" target="_blank">
                        <img width="200" height="200" src={`${process.env.PUBLIC_URL}/images/linkedin_icon.webp`} alt="linkedin image" />
                    </a>
                    <a href="https://github.com/adamnguyen9" target="_blank">
                        <img width="200" height="200" src={`${process.env.PUBLIC_URL}/images/github_icon.png`} alt="github image" />
                    </a>
                </div>
            </div>
    </section>)
}