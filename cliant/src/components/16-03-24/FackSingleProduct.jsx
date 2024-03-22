// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const FackSingleProduct = () => {

  const [fakeProductData,setFakeProductData]=useState({})
  const {id} =useParams()

   async  function getsingleProduct(){
      try{
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setFakeProductData(response.data);
      }catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      if(id){
        // alert("hiii")
        getsingleProduct()
      }
    },[id])
  return (
    <div>
     <h1>singleProduct</h1>
     <img src={fakeProductData.image} alt='iamge' />

     <h2>{fakeProductData?.title}</h2>

    </div>
  )
}

export default FackSingleProduct
