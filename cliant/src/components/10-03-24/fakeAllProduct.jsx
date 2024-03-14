import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FeckAllProduct = () => {

  const[productData,setProductData]=useState([])

    async function getProduct(){
        // alert("hello")
        const response=await axios.get('https://fakestoreapi.com/products')
        console.log(response);
        if(response?.data.length){
          setProductData(response.data)
        }

    }

    useEffect(()=>{
        getProduct()
    },[])


  return (
    <div>
      <h1>FakeAllProduct</h1>
      {productData?.length? <div>{productData.map((productObj)=>{
        return(
          <div>
            <h2>{productObj.title}</h2>
            <img src={productObj.image} />
            <h3>{productObj.category}</h3>
            <h3>${productObj.price}/-</h3>
            <h3>{productObj.description}</h3>
          </div>
        )
      })}</div>:<div>Loading..</div>}
    </div>
  )
}

export default FeckAllProduct
