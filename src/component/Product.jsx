import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'

//props
const Product = ({product1,handeadd}) => {
    const {state} = useContext(Appcontex)
    const {cart} = state
    return (
       
        <div className="Products-item">
          
            <img src={product1.image} alt={product1}/>
            <div className='product-item-info'>
                <h2>{product1.title}
                <span>$
                    {' '}
                    {product1.price}</span>
                </h2>
                <p>{product1.descripction}</p>
              
            </div>
            <button type="button" onClick={handeadd(product1)} >comprar</button>
           
        </div>
    )
}

export default Product