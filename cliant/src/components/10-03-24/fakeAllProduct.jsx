import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../../Style/product-data.css'
import { useNavigate } from 'react-router-dom'

const FeckAllProduct = () => {

  const[productData,setProductData]=useState([])
  const router=useNavigate()

    async function getProduct(){
        // alert("hello")
        const response=await axios.get('https://fakestoreapi.com/products')
        // console.log(response);
        if(response?.data.length){
          setProductData(response.data)
        }

    }

   async function redirect(id){
      // alert(id)
      router(`/fack-single-product/${id}`)
    }

    useEffect(()=>{
        getProduct()

    },[])

    

  return (
    <div className="body">

           <h1 className="title">All-Product</h1>

           <div className="maindiv">
            {productData.map((productObj)=>(
                <div onClick={()=>redirect(productObj.id)} className="products-data">
                    <div><img className="images" src={productObj.image}/></div>
                    <div><h5>{productObj.title}</h5></div>
                    <div><strong>${productObj.price} </strong><span>Buy</span></div>
                    <div><p className="productinfo">{productObj.description}</p></div>
                </div>
            ))}
           </div>
        </div>
    )
}

export default FeckAllProduct
