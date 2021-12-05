import React from "react";
import { Link } from 'react-router-dom';
  
function AddProduct() {
    return (
        <div>
            
            <Link to="/product/new">
                <button>Add New Item</button>
            </Link>

        </div>
    )
}

export default AddProduct