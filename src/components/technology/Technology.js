import React, { Fragment } from "react";
import "./Technology.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { Zoom } from "react-awesome-reveal";


const Technology = () => {
    return (
        <Fragment>
            <Zoom triggerOnce>
                <div id="technologySection" className="technology container-fluid">
                    <div className="heading">
                        <h1>TECHNOLOGY STACK</h1>
                    </div>
                    <div className="icons">
                        <span>
                            <AiFillHtml5 data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
                        </span>
                        <span>
                            <DiCss3 data-bs-toggle="tooltip" data-bs-placement="top" title="CSS3" />
                        </span>
                        <span>
                            <DiSass data-bs-toggle="tooltip" data-bs-placement="top" title="SASS" />
                        </span>
                        <span>
                            <BsBootstrapFill data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap" />
                        </span>
                        <span>
                            <DiJavascript1 data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript" />
                        </span>
                        <span>
                            <FaReact data-bs-toggle="tooltip" data-bs-placement="top" title="React.JS" />
                        </span>
                        <span>
                            <FaNodeJs data-bs-toggle="tooltip" data-bs-placement="top" title="Node.JS" />
                        </span>
                        <span>
                            <SiExpress data-bs-toggle="tooltip" data-bs-placement="top" title="Express.JS" />
                        </span>
                        <span>
                            <FaNpm data-bs-toggle="tooltip" data-bs-placement="top" title="NPM" />
                        </span>
                        <span>
                            <DiMongodb data-bs-toggle="tooltip" data-bs-placement="top" title="Mongo DB" />
                        </span>
                        <span>
                            <SiPostman data-bs-toggle="tooltip" data-bs-placement="top" title="Postman" />
                        </span>
                        <span>
                            <AiFillGithub data-bs-toggle="tooltip" data-bs-placement="top" title="Git/Github" />
                        </span>
                        <span>
                            <SiVisualstudiocode data-bs-toggle="tooltip" data-bs-placement="top" title="VS Code" />
                        </span>
                    </div>
                </div>
            </Zoom>
        </Fragment>
    )
}

export default Technology;
