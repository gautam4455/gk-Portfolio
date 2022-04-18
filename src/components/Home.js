import React, { Fragment } from "react";
import "./Home.scss";
import Banner from "./banner/Banner";
import About from "./about/About";
import Technology from "./technology/Technology.js";


const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <Banner />
                <About />
                <Technology />
            </div>
        </Fragment>
    )
}

export default Home;
