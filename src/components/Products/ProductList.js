import React, { useContext, useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';
import { productsContext } from '../../Context/ProductsContext';
import ProductCard from './ProductCard';
import Sidebar from "../Side/Sidebar"

import "./ProductList.css"

const ProductList = (props) => {
    console.log(props);
    const {productsData,getProducts,paginationPages}=useContext(productsContext)
    const history=useHistory()
    const [page, setPage]= useState(getPage())
    function getPage(){
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }

    const handlePage=(e, page)=>{
        const search = new URLSearchParams(history.location.search)
        search.set('_page',page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getProducts(history)
    }
    useEffect(()=>{
        getProducts(history)
    }, [])
    return (
        <div className="container1">
            <Sidebar {...props}/>
            <div className="lol">
                {productsData.map((item)=>(
                    <ProductCard item={item} key={item.id}/>
                ))}
            </div>
                <Pagination count={+page} onChange={handlePage} count={paginationPages} />
        </div>
    );
};

export default ProductList;