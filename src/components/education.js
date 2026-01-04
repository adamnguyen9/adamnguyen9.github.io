export function EducationSection () {
    return (
        <section class="section"style={{background: "none"}} id="education">
            <div class="container" style={{borderColor:"black"}}>
                <h1 class="title" style={{ textAlign: "center"}}>Education and Skills</h1>
                    <div class="box" style={{background: "none"}}>
                        <div style={{width: "100%"}} >
                          
                            <img width="300" height="300" src={`${process.env.PUBLIC_URL}/images/UNC_Chapel_Hill.jpg`} alt="instagram image" />
                        </div>
                    <div>
                       <p style={{textDecoration: "underline", color: "red" }}>Education:</p>
                  <li style={{}}>Graduated Spring 2022 with a B.S. in Computer Science</li><li style={{}}>Minored in mathematics</li>
                  <li style={{}}>Dean's list: Fall 2018, Spring 2019, Fall 2021, Spring 2022</li>
                 <br/>
                  <p style={{textDecoration: "underline", color: "red"}}>Skills:</p>
                  
                  <li style={{}}>Full Stack Application Development which includes the following tech stack: React, Typescript, Express.js, C#/.NET APIs, SQL Server</li>
                  <li style={{}}>Developing and deploying applications in the cloud with AWS</li>
                  <li style={{}}>Machine Learning Workflows</li>
            

                  
                    </div>
                    
                  </div>
                    
                
                       
            </div>
        </section>
    )
}