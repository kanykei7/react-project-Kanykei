import React, { useContext } from 'react';
import "./ProductCard.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { productsContext } from '../../Context/ProductsContext';

const ProductCard = ({item}) => {
    const {addProductToCart,checkProductCart}=useContext(productsContext)
  
    return (
        <div className="productCard">
            <div class="cardsItem">
            <h1 className="itemTitile">{item.title}</h1>
            <p className="itemDesc">{item.description}</p>
            <img className="itemImg" src={item.img} alt="hero"/>
            <p className="itemType">Type: {item.type}</p>
            <FavoriteIcon className="FavoriteIcon" onClick={()=>addProductToCart(item)} color={checkProductCart(item.id)?"secondary":"default"}/>
            </div>
        </div>
    );
};

export default ProductCard;