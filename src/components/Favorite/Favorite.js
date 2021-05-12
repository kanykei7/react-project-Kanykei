import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../Context/ProductsContext';
import "./Favorite.css"

const Favorite = (elem) => {
    const {getCard, cart,changeProductCount}=useContext(productsContext)
    useEffect(()=>{
        getCard()
    },[])
    return (
        <div className="favorite">
            {cart.products ? (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Titile</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map(elem =>(
                            <tr key={elem.item.id}>
                                <td><img className="elemImg" src={elem.item.img}/></td>
                                <td>{elem.item.title}</td>
                                <td>{elem.item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            ):(<div> sasllsm</div>)}
        </div>
    );
};

export default Favorite;