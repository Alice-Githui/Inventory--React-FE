import React, { useState, useEffect } from "react";
import ListInventory from "./listinv";
import AddProduct from "./addproduct";



const AllInventory = () => {

    const [inventory, setInventory] = useState([])

    const colNames = ['id', 'Name', 'Quantity', 'Buying Price', 'Selling Price', 'View Product', 'Sell Product']

    useEffect(() => {
        const getInventory = async () => {
            const response = await fetch('https://propolis-store.herokuapp.com/api/get-products/')
            const data = await response.json()
            // console.log('DATA:', data)
            setInventory(data)
        }

        getInventory()
    }, [])

    return (
        < div className="all-products">
            <div className="getAll">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Buying Price
                            </th>
                            <th>
                                Selling Price
                            </th>
                            <th>
                                View Product
                            </th>
                            <th>
                                Sell Product
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((inv, index) => (
                            <ListInventory key={index} inv={inv} />
                        ))}

                    </tbody>

                </table>


            </div>
        </div>

    );
}

export default AllInventory