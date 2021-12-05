import React, { useState } from "react";
import Axios from 'axios';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

function MyProductForm() {
    const url = "http://127.0.0.1:8000/api/add-product/"
    const [inputs, setInputs] = useState({
        name:"", 
        quantity: "", 
        buyingPrice: '', 
        sellingPrice: "", 
        description: ""
    });

    function handle(e){
        const newInputs= { ...inputs}
        newInputs[e.target.id] = e.target.value
        setInputs(newInputs)
        console.log(newInputs)

    }

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }))
    // }

    function submit(e){
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
        })
    }

    return (
        <div>
            <Link to = "/">
            <button>Back to HomePage</button>
            </Link>
        <form onSubmit={(e) => submit(e)}>
            <label htmlFor="product-name">Product Name:
                <input type="text" name="product-name" onChange={(e) => handle(e)} id="name" value={inputs.name}/>
            </label>
            <label htmlFor="quantity">Quantity:
                <input type="number" name="quantity" onChange={(e) => handle(e)} id="quantity" value={inputs.quantity} />
            </label>
            <label htmlFor="buying-price">Buying Price:
                <input type="number" name="buying-price" onChange={(e) => handle(e)} id="buyingPrice" value={inputs.buyingPrice}/>
            </label>
            <label htmlFor="selling-price">Selling Price:
                <input type="number" name="selling-price" onChange={(e) => handle(e)} id="sellingPrice" value={inputs.sellingPrice}/>
            </label>
            <label htmlFor="description">Description:
                <input type="text" name="description" onChange={(e) => handle(e)} id="description" value={inputs.description}/>
            </label>
            <br></br>
            <br></br>
            <button>Update Product Inventory</button>
        </form>
        </div>
    )
}

export default MyProductForm
