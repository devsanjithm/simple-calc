import React from "react";
import "./Loadingstyle.css"
function Loading() {

    return (
        <div className="container">
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
        </div>
    )
}
export default Loading;