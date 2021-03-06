import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

const OneProduct = () => {

    const params = useParams()

    const productId = params.id

    const navigate = useNavigate()

    console.log(productId)

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getItem = async () => {
            const response = await fetch(`https://propolis-store.herokuapp.com/api/update-product/${productId}/`)
            const data = await response.json()
            setProduct(data)
        }

        getItem()

    }, [productId])

    const updateProduct = async () => {
        fetch(`https://propolis-store.herokuapp.com/api/update-product/${productId}/`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    const sellProduct = async () =>{
        fetch(`https://propolis-store.herokuapp.com/api/sell-product/${productId}/`,{
            method: "PATCH", 
            headers:{
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(product)
        })
    }


    const deleteProduct = async () => {
        fetch(`https://propolis-store.herokuapp.com/api/delete-product/${productId}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    let handleSubmit = () => {
        updateProduct()
    }

    let deleteOnClick = () => {
        deleteProduct()
        navigate("/")
    }

    let sellSubmit = () => {
        sellProduct()
    }


    return (
        <div>
            <div>
                <div className="products-table">
                    <table>
                        <thead>
                        <tr>
                            {/* <th>
                                Value
                            </th> */}
                            <th>
                                Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Updated Amount
                            </th>
                            <th>
                                Update
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <p>{product?.name}</p>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        <p>Quantity In Store: {product?.quantity}</p>

                                    </div>

                                </td>
                                <td>
                                    <div>
                                        <label htmlFor="quantity">Quantity: </label>
                                        <input type="number" placeholder="0" minimum="0" name="quantity" onChange={(e) => { setProduct({ ...product, 'quantity': e.target.value }) }}></input>
                                        {/* <input type="text" placeholder = "0" minimum = "0" name="quantity"></input> */}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {productId !== "new" ? (
                                            <div>
                                                <Link to="/">
                                                    <button onClick={handleSubmit}>Update</button>
                                                </Link>

                                            </div>

                                        ) : (

                                            <div>

                                                <button>Update</button>
                                            </div>

                                        )}

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {productId !== "new" ? (
                                            <div>

                                                <button onClick={deleteOnClick}>Delete</button>

                                            </div>

                                        ) : (

                                            <div>
                                                <button>Update</button>
                                            </div>

                                        )}

                                    </div>
                                </td>
                                {/* <td>
                                    <div>
                                        <button onClick={sellProduct}>Sell Product</button>

                                    </div>
                                </td> */}
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default OneProduct