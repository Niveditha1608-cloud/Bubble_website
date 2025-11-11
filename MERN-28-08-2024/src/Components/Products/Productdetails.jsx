import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { products } from './products';
import { Link } from 'react-router-dom';

function Productdetails(props) {
    let params=useParams()
    console.log(params)
    let item=products.find((item)=>item.id==params.pid)

    return (
        <div>
            <h2>Product Details</h2>
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <p>Rs:{item.price}</p>
            {item.instock?
            <button className='btn btn-warning'>Buy now</button>:
            <p>Outoff stock!!</p>
            }
            <p><Link to={"comments"}>comments</Link>|<Link to={"description"}>description</Link></p>
            <Outlet></Outlet>
        </div>
    );

}




export default Productdetails;