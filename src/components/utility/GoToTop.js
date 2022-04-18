import React, { Fragment, useEffect, useState } from "react";
import FlightIcon from '@mui/icons-material/Flight';


const GoToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
                setTimeout(() => {
                    setShowTopBtn(false);
                }, 10000);
            }
            else {
                setShowTopBtn(false);
            }
        })
    }, []);

    return (
        <Fragment>
            <div id="go-to-top" >
                {
                    showTopBtn
                    &&
                    <button onClick={goToTop}>
                        <FlightIcon />
                    </button>
                }
            </div>
        </Fragment>
    )
}

export default GoToTop;
