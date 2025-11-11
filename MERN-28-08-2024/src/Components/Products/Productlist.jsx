import React from 'react';
import { useState } from 'react';
import Productitem from './Productitem';
import { products } from './products';

function Productlist(props) {
    const [productlist,setlist]=useState(products)



    let deleteprod=(item)=>{

        let filtered_list=productlist.filter((product)=>product!==item)
        setlist(filtered_list)

    }

    let productitems=productlist.map((p)=><Productitem key={p.productid} 
    product={p}
    deleteprod={deleteprod}
    />)
    
    let addProduct=()=>{
      let temp_prod=  {
        id:productlist.length+1,
        name:"Tshirt",
        brand:"USPOLO",
        price:6000,
        category:"apparel",
        rating:4.0,
        instock:true,
        comments:["good","average","Great"],
        
    }
    
    //setcounter(counter+1)//counter=counter+1
    //productlist.push(temp_prod)
    setlist([...productlist,temp_prod])//productlist=[...productlist,temp_prod]

    }

   
    
    return (
    <div>
        <button onClick={addProduct}>Add</button>
        <div style={
            {
                display:"flex",
                flexWrap:"wrap",
                flexDirection:"row",
                justifyContent:"center"
            }
        }>
          
            {productitems}
        </div>
    </div>
    );
}

export default Productlist;