import axios from 'axios';
import React, { useReducer } from 'react';
// import { calcSubPrice, calcTotalPrice,getCountProductsInCart } from '../helpers/calcPrice';

export const productsContext = React.createContext();
const INIT_STATE = {
    productsData:[],
    paginationPages: 1,
    cart:{},
    prodData:[]
    // cartLength:getCountProductsInCart()
}
const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case "GET_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.data,
                paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4) //из headers вытаскиваем значения с x-total-count
            }
        case "GET_CART":
            return{
                ...state,
                cart:action.payload
            }
            case "GET_PROD":
                return{
                    ...state,
                prodData:action.payload
                }
        case "CHANGE_CART_COUNT":
            return{
                ...state,
                cartLength: action.payload
            }
        default: return state
    }
}
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getProducts(history){
        const search = new URLSearchParams(history.location.search)
        search.set("_limit", 4)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res= await axios.get(`${"http://localhost:8000/products"}?_limit=4&${window.location.search}`)
        dispatch ({
            type: "GET_PRODUCTS",
            payload: res
        })
    }
    async function getProductMain(){
    let {data} = await axios("http://localhost:8000/products")
    dispatch({
        type: "GET_PROD",
        payload: data
    })
    }
    function postNewProduct(product) {
        axios.post("http://localhost:8000/products", product);
      }
    function addProductToCart(product){
        let cart=JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart={
                products: [],
                totalPrice:0
            }
        }
        let newProduct ={
            item: product,
            count:1,
            subPrice: 0
        }

        let filteredCard = cart.products.filter(elem=>elem.item.id===product.id)
        if( filteredCard.length>0){
           cart.products=cart.products.filter(elem=>elem.item.id!==product.id)
        } else{
            cart.products.push(newProduct)
        }
        
        // newProduct.subPrice=calcSubPrice(newProduct)
        // cart.totalPrice=calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))

        dispatch({
            type:"CHANGE_CART_COUNT",
            payload:cart.products.length
        })
    }
    function getCard(){
        let cart=JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart={
                products: [],
                totalPrice:0
            }
        }
        dispatch({
            type:"GET_CART",
            payload:cart
        })
    }
    // function changeProductCount(count, id){
    //     let cart=JSON.parse(localStorage.getItem('cart'))
    //     cart.products=cart.products.map(elem=>{
    //         if (elem.item.id===id){
    //             elem.count=count
    //             elem.subPrice=calcSubPrice(elem)
    //         }
    //         return elem
    //     })
    //     cart.totalPrice=calcTotalPrice(cart.products)
    //     localStorage.setItem("cart", JSON.stringify(cart))
    //     getCard()
    // }
    function checkProductCart(id){
        let cart=JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart={
                products:[],
                totalPrice:0
            }
        }
        let newCart =cart.products.filter(elem=>elem.item.id===id)
        return newCart.length> 0 ? true : false
    }
    async function getProductDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({
          type: "GET_PRODUCT_DETAILS",
          payload: data,
        });
        console.log(data);
      }
    
      async function saveProduct(id, newProduct, history) {
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
        getProductDetails(id);
        getProducts(history);
      }
    
      async function deleteProduct(id) {
        return await axios.delete(`http://localhost:8000/products/${id}`);
      }

    return (
        <productsContext.Provider value={{
            productsData: state.productsData,
            paginationPages:state.paginationPages,
            cart:state.cart,
            prodData:state.prodData,
            // cartLength: state.cartLength,
            getProducts,
            postNewProduct,
            addProductToCart,
            getCard,
            // changeProductCount,
            checkProductCart,
            getProductDetails,
            saveProduct,
            deleteProduct,
            getProductMain,
        
            
        }}>
            {children}
        </productsContext.Provider>
    )
}
export default ProductsContextProvider;