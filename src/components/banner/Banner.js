import React, { Fragment } from "react";
import TypingText from "./TypingText";
import "./Banner.scss";

const Banner = () => {

    return (
        <Fragment>
            <div id="bannerSection" className="banner">
                <div className="banner_description">
                    <h1>I'm <span>GAUTAM KAMBLE</span></h1>
                    <div className="typedjs"> <TypingText /></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner;
