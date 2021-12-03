import React, { useState, useEffect } from "react";
import ListInventory from "./listinv";



const AllInventory = () => {

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        const getInventory = async () => {
            const response = await fetch('/api/get-products/')
            const data = await response.json()
            // console.log('DATA:', data)
            setInventory(data)
        }

        getInventory()
    }, [])

    

    return (
        < div className="all-products">
            <h4>Total Products In Store: {inventory.length}</h4>
            <div className="getAll">
                {inventory.map((inv, index) => (
                    <ListInventory key={index} inv={inv}/>
                ))}
            </div>
        </div>

    );
}

export default AllInventory