import React, { Fragment, useEffect, useState } from "react";
import "./Resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    const [width, setWidth] = useState(1200);

    const resumeLink = "https://raw.githubusercontent.com/gautam4455/imghub/2799181d3f3df1fbe29dd026efebc59d6db07913/GK-2022.pdf";


    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <Fragment>
            <div className="resumeSection">
                <div className="heading">
                    <h1>Resume</h1>
                </div>
                <div className="resume-container mb-5">
                    <div className="btn-box">
                        <a className="mybtn" rel="noreferrer nofollow" href="https://raw.githubusercontent.com/gautam4455/imghub/2799181d3f3df1fbe29dd026efebc59d6db07913/GK-2022.pdf" target="_blank" download="Gauam-Kamble.pdf">
                            <FaDownload />&nbsp;Download CV
                        </a>
                    </div>
                    <div className="pdf">
                        <Document file={resumeLink} onLoadSuccess={() => { return 0 }} className="my-3 document" >
                            <Page pageNumber={1} scale={width > 900 ? 1.5 : 0.6} />
                        </Document>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Resume;
