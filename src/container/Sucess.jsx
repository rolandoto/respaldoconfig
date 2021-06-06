import React, { useContext,useState,useEffect} from 'react'
import { Map } from '../component/Map'
import '../Componentes/styles/Success.css'
import Appcontex from '../context/Appcontex'

const Sucess = () => {
    const {state} = useContext(Appcontex)
    const {buyer} = state
    console.log(buyer)
    const [loading,setloading] = useState()

    useEffect(() =>{
        setloading(true)
        setTimeout(() => {
         setloading(false)
        }, 5000);
    },[])
    //aqui le estoy pasando datos del comprador que es buyer
    //y le estoy pasando los datos por props
   
    return (
       
           
        <div className="Success">
            
       
            <div className="Success-content">
             
                    <h2> ${buyer.name} por tu compra</h2>
                    <span>tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
         
                
                </div>
            </div>
            
        </div>
    )
}

export default Sucess
