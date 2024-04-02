import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../../Style/product-data.css'
import { useNavigate } from 'react-router-dom'

const FeckAllProduct = () => {

  const[productData,setProductData]=useState([])//to use get all products 
 
  const router=useNavigate()

  const[search,setSearch]=useState("")
  const[filterProducts,setFilterProducts]=useState([]) //to use filter product

    async function getProduct(){
        // alert("hello")
        const response=await axios.get('https://fakestoreapi.com/products')
        // console.log(response);
        if(response?.data.length){
          setProductData(response.data)
          setFilterProducts(response.data)
        }

    }

   async function redirect(id){
      // alert(id)
      router(`/fack-single-product/${id}`)
    }

    function handleChange(event){
      console.log(event.target.value);
      setSearch(event.target.value)

      let userWord=event.target.value.toLowerCase()

      const filterProducts=productData.filter((product)=>{
      return product.title.toLowerCase().includes(userWord);
    })
    setFilterProducts(filterProducts)

    console.log(filterProducts,"filterProduct");
    }

    useEffect(()=>{
        getProduct()

    },[])

    

  return (
    <div className="body">

           <h1 className="title">All-Product</h1>
           <div>
            <h2>Search Product ...</h2>
            <input style={{height:"40px" , width:"280px", marginBottom:"20px"}} value={search} placeholder='Search...' onChange={handleChange} />
           </div>
           
           <div className="maindiv">
            {filterProducts.map((productObj)=>(
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
