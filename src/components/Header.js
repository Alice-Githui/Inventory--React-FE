import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const image = require('../store.webp')
    return (
        <div className="header">
            <div className="logos">
                <img src="/store.webp" id="image"></img>
                <button>PROPOLIS</button>
            </div>
            <div className="s-header">
                <Link to="/">
                    <button className="dashboard">Dashboard</button>
                </Link>
                <Link to="product/new">
                    <button>Add New Store Product</button>
                </Link>

            </div>

        </div>
    )

}

export default Header