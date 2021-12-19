import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

const SellProduct = () => {

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

    const sellProduct = async () => {
        fetch(`https://propolis-store.herokuapp.com/api/sell-product/${productId}/`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }



    let sellSubmit = () => {
        sellProduct()
        navigate("/")
    }


    return (
        <div>
            <div>
                <div className="selling-table">
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
                                    Quantity In Store
                                </th>
                                <th>
                                    Quantity Sold
                                </th>

                                <th>
                                    Sell
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
                                        <label htmlFor="quantity">Amount Sold: </label>
                                        <input type="number" placeholder="0" minimum="0" name="quantity" onChange={(e) => { setProduct({ ...product, 'quantity': e.target.value }) }}></input>
                                        {/* <input type="text" placeholder = "0" minimum = "0" name="quantity"></input> */}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {productId !== "new" ? (
                                            <div>
                                                <div>
                                                    <button onClick={sellSubmit}>Sell </button>

                                                </div>

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
                                                {/* 
                                                <button onClick={deleteOnClick}>Delete</button> */}

                                            </div>

                                        ) : (

                                            <div>
                                                <button onClick={sellProduct}>Sell Product</button>

                                            </div>

                                        )}

                                    </div>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default SellProduct