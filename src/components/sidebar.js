import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar">
            <navbar>
                <Link to="/">
                    <button className="dashboard">Dashboard</button>
                </Link>
                <br></br>
                <Link to = "product/new">
                    <button>Add New Store Product</button>
                </Link>
            </navbar>
        </div>
    )
}

export default SideBar