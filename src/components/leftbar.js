import React from "react";
import { BsFillCalendarCheckFill, BsFillCloudPlusFill, BsFillCollectionFill, BsFillCheckSquareFill } from "react-icons/bs";

function LeftBar() {
    return (
        <div className="leftbar">
            <div className="leftbar-buttons">
                <BsFillCalendarCheckFill />
            </div>
            <div className="leftbar-buttons">
                <BsFillCloudPlusFill />
            </div>
            <div className="leftbar-buttons">
                <BsFillCollectionFill />
            </div>
            <div className="leftbar-buttons">
                <BsFillCheckSquareFill />
            </div>


        </div>
    )
}

export default LeftBar