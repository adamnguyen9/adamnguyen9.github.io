export function HobbySection () {

        return (
            <section class="section"style={{background: "none"}} id="hobbies">
                <div class="container" style={{borderColor:"black"}}>
                    <h1 class="title" style={{textAlign: "center"}}>Photos that describe me</h1>
                        <div class="box has-text-centered"  style={{background: "none"}}>
                        <video width="320" height="240" controls>
                             <source src={`${process.env.PUBLIC_URL}/images/running.mp4`} type="video/mp4"></source>
                        </video>
                        <img src={`${process.env.PUBLIC_URL}/images/sunsets.jpg`} width="320" height="240"></img>
                       <div> <img src={`${process.env.PUBLIC_URL}/images/travelings.jpg`} width="320" height="240"></img></div>

                      </div>          
                </div>
            </section>
        )
    }
