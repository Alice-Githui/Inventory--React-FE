import React, { useState, useEffect } from "react";
import ListInventory from "./listinv";


const AllInventory = () => {

    let [inventory, setInventory] = useState([])

    useEffect(() => {
        getInventory()
    }, [])

    let getInventory = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/get-products/')
        let data = await response.json()
        console.log('DATA:', data)
        setInventory(data)
    }

    return (
        < div className="all-inventory">
            <div className="getAll">
                {inventory.map((inv, index) => (
                    <ListInventory key={index} inv={inv}/>
                    // <h4 key = {index}>{inv.id}</h4>
                    //  <h4 key = {index}>{inv.name}</h4>

                ))}
            </div>
        </div>

    );
}

export default AllInventory