import React from 'react';
import productstyle from "../useritems.module.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { additem } from '../../Reduxstore/cartslice';

function Productitem({product,deleteprod}) {
    let dispatcher=useDispatch()

let instockstyle={backgroundColor:"aquamarine"}
let outstockstyle={backgroundColor:"grey"}

let deleteitem=()=>{
    deleteprod(product)
}

let addtocart=()=>{
 dispatcher(additem(product))
}

    return (
        <div 
        style={product.instock?instockstyle:outstockstyle}
        className={productstyle.item}>
            <img 
            style={{
               width:"100%",
               maxWidth:"200px"
            }}
            src={`./assets/pics/${product.category}.jpg`}/>
            <Link to={`/productdetails/${product.name}/${product.id}`}><h2>{product.name}</h2></Link>
            <p>{product.brand}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            {product.category==="electronics"&&<p>Flat 30%off</p>}
            {product.instock?
            <button>Buy now</button>:
            <p style={{color:"red"}}>outoff Stock!!</p>}
            {getDelivery(product.category)}

            <button onClick={addtocart}>add to cart</button>
            <button onClick={deleteitem}>Delete</button>
        </div>
    );
}

function getDelivery(category)
{
    switch(category)
    {
        case "electronics":
            return <p>1 day</p>
        case "furniture":
            return <p>2 days</p>
        case "apparel":
            return <p>3 days</p>
        default:
            return <p>1 week</p>
    }
}

export default Productitem;
/*
cond?true statement:false statement

cond&&true statement

cond||false statement

*/