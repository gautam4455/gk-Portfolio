import React, { Fragment, useRef } from "react";
import "./About.scss";
import banner_image from "../../assets/images/home_banner_bg.png";
// import { Fade } from "react-awesome-reveal";

const About = () => {
    const aboutSection = useRef(null);

    return (
        <Fragment>
            {/* <Fade triggerOnce> */}
            <div id="aboutSection" className="about container-fluid" ref={aboutSection}>
                <div className="heading">
                    <h1>ABOUT</h1>
                </div>
                <div className="description d-flex flex-row align-items-center">
                    {/* <Fade direction="left" triggerOnce> */}
                    <div className="content">
                        <div>A <span className="color1">Passionate Developer</span> having an experience of building <span className="color1">WEB</span> with <span className="color1">HTML / CSS / JavaScript</span> and some other cool libraries. A developer who wants to expolore every <span className="color1">TECH STACK in TECHNOLOGY</span>.</div>
                    </div>
                    {/* </Fade> */}
                    {/* <Fade direction="right" triggerOnce> */}
                    <div className="img-container">
                        <img src={banner_image} alt="About-img" loading="lazy" />
                    </div>
                    {/* </Fade> */}
                </div>
            </div>
            {/* </Fade> */}
        </Fragment >
    )
}

export default About;
