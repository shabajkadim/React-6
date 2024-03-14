import React from 'react'

const AllProduct = ({product}) => {
  return (
    <div>
      <h1>All-Product</h1>
      {product.map((productdata)=>{
        return(
            <div>
                <h2>{productdata.name}</h2>
                <p><img src={productdata.image} /></p>
                <h3>${productdata.Price}/-</h3>
                <h3>{productdata.quantity}</h3>

            </div>
        )
      })}
    </div>
  )
}

export default AllProduct
