import React from "react";


function About() {

    return (
        <section id="about" className=" slideanim sec-topic about">
            <div>
                <span><h3 className="sec-topic"><u>About</u></h3></span>
                <img src={require('../circle_photo.png')} alt="not Avialable"></img>
                <h5>    MINTESINOT ARGAW</h5>
                <h1>FULLSTACK WEB DEVELOPER</h1>
                <p>Passionate and fast learner fullstack developer skilled with core
                    technologies of uptodate web technologies.<br /> Besides I skilled in training and deploying Machine Learning Models.</p>

            </div>

        </section>
    )

}
export default About