import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OneProduct = (history) => {

    const params = useParams()

    const productId = params.id

    // console.log(productId)

    const [product, setProduct] = useState(null)

    useEffect (() => {
        const getItem = async () =>{
            const response = await fetch(`http://127.0.0.1:8000/api/update-product/${productId}/`)
            const data = await response.json()
            setProduct(data)
        }

        getItem()

    }, [productId])

    const updateProduct = async() =>{
        fetch(`http://127.0.0.1:8000/api/update-product/${productId}/`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    const deleteProduct = async() =>{
        fetch(`http://127.0.0.1:8000/api/delete-product/${productId}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(product)
        })
    }

    let handleSubmit = () => {
        updateProduct()
        // history.push("/")
    }

    let deleteOnClick = () => {
        deleteProduct()
    }


    return (
        <div>
            <p>This is {product?.name} product</p>
            <p>Quantity In Store : {product?.quantity}</p>
            <div>
                <label htmlFor ="quantity">Update Quantity: </label>
                <input type="number" placeholder = "0" minimum = "0" name="quantity" onChange={(e) => {setProduct({...product, 'quantity': e.target.value})}}></input>
                {/* <input type="text" placeholder = "0" minimum = "0" name="quantity"></input> */}
                <br></br>
                <button onClick = {handleSubmit}>Update Input</button>
                <br></br>
                <button onClick={deleteOnClick}>Delete Input</button>

            </div>
        </div>
    )
}

export default OneProduct