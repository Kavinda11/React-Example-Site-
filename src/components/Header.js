import React from "react";
import Typed from  "react-typed";


const Header = () => {
    return (
        <div>
            <div className = "header-wrapper">
                <div className="main-info">
                    <h1>Web DEV</h1>
                    <Typed
                            className = "typed-text"
                            strings = {["Web Design","Web Development","Facebook Ads SMM","google ads"]}
                            typeSpeed = {20}
                            backSpeed = {30}
                            loop
                    />
                    <a href="" className="btn-main-offer">Contact Me</a>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
