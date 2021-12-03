import React from "react"; 
import {Link} from 'react-router-dom';

const ListInventory = ({inv}) =>{
    return(
        <div>    
            
            <Link to ={`/product/${inv.id}`}>
                <h4>{inv.name}</h4>
            </Link>
            Quantity: {inv.quantity}
        </div>
    )

}

export default ListInventory;