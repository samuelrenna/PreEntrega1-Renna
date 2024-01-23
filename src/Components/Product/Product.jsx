import React from 'react'

const Product = ({img,titulo,descripcion,precio}) => {
return (
    <div>
        <img src={img} width="300px" height="300px" alt="" />
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <p>${precio}</p>
        </div>
)
}

export default Product
