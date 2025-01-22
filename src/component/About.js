



export default function About() {
    return(
        <section className="section-about">
            <div className="container">
                <div className="grid grid--2-cols">
                    <div className="about-textbox">
                        <h1 className="heading-primary h1">Little Lemon</h1>
                        <h3 className="sub-heading h3">Chicago</h3>
                        <p className="lead-text p">Little lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment . the restaurant features a locally sourced menu with daily special.</p>
                    </div>
                    <div className="about-img">
                        <img className="img-a" src={require("../Assets/Mario_ Adrian_a.jpg")} alt="Mario&Adrian" />
                        <img className="img-b" src={require("../Assets/Mario_ Adrian_a.jpg")} alt="Mario&Adrian" />
                    </div>
                </div>
            </div>
        </section>
    )
} 