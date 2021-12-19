import React, { useState } from "react";
import Axios from 'axios';
import ReactDOM from "react-dom";
import { Link, useNavigate } from 'react-router-dom';


function MyProductForm() {
    const url = "https://propolis-store.herokuapp.com/api/add-product/"
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        name: "",
        quantity: "",
        buyingPrice: '',
        sellingPrice: "",
        description: ""
    });

    function handle(e) {
        const newInputs = { ...inputs }
        newInputs[e.target.id] = e.target.value
        setInputs(newInputs)
        console.log(newInputs)

    }

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }))
    // }

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: inputs.name,
            quantity: inputs.quantity,
            buying_price: inputs.buyingPrice,
            selling_price: inputs.sellingPrice,
            description: inputs.description
        })
            .then(res => {
                console.log(res.inputs)
                navigate("/")

            })

    }

    return (
        <div id="new-product">
            <br></br>
            <form onSubmit={(e) => submit(e)} className="update-form">
                <label htmlFor="product-name" className="form-group">Product Name:
                    <input type="text" name="product-name" onChange={(e) => handle(e)} id="name" value={inputs.name} className="form-control" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="quantity" className="form-group">Quantity:
                    <input type="number" name="quantity" onChange={(e) => handle(e)} id="quantity" value={inputs.quantity} className="form-control" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="buying-price" className="form-group">Buying Price:
                    <input type="number" name="buying-price" onChange={(e) => handle(e)} id="buyingPrice" value={inputs.buyingPrice} className="form-control" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="selling-price" className="form-group">Selling Price:
                    <input type="number" name="selling-price" onChange={(e) => handle(e)} id="sellingPrice" value={inputs.sellingPrice} className="form-control" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="description" className="form-group">Description:
                    <input type="text" name="description" onChange={(e) => handle(e)} id="description" value={inputs.description} className="form-control" />
                </label>
                <br></br>
                <br></br>
                {/* <Link to="/"> */}
                <button>Update Product Inventory</button>
                {/* </Link> */}

            </form>
        </div>
    )
}

export default MyProductForm
