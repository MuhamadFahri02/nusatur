import React from "react";

function About(props) {
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=''/>
            </div>
        </div>
    )
}

export default About;