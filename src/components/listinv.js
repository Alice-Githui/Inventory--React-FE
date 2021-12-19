import React from "react";
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router";


const ListInventory = ({ inv, headerItem }) => {

    const navigate = useNavigate()
    return (

        < tr >
            <td>
                <p>{inv?.name}</p>

            </td>
            <td>
                <p>{inv.quantity}</p>
            </td>
            <td>
                {inv.buying_price}
            </td>
            <td>
                {inv.selling_price}
            </td>
            <td>
                <Link to={`product/${inv.id}`}>
                    <FaExternalLinkAlt />
                </Link>

            </td>
            <td>
                <Link to={`product/sell/${inv.id}`}>
                    <button>Sell</button>
                </Link>

            </td>
        </tr >

        /* // <div className = "shop-products"> 
    //     Product Name: {inv.name}
    //     Quantity: {inv.quantity}
    //     <Link to ={`/product/${inv.id}`}>
    //         <button>View Product</button>
    //         <button>Sell Product</button>
    //     </Link>
    // </div> */
    )
}

export default ListInventory;