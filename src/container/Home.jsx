import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'

import Products from '../component/Products'
import  Search  from '../component/Search'
import Appcontex from '../context/Appcontex'
import InitialStacte from '../InitialStacte'
import Pratice from './Pratice'


const Home = () => {
const  {state} = useContext(Appcontex)
const {product} = state
console.log(product)

    const [count,setcounter] = useState(0)



    const handclick = () =>{
      setcounter(count + 1)
    }

    const handclicke = () =>{
      setcounter(count - 1)
    }

    return (
        <div>
       
                 <Pratice  hand={handclick}  dane={handclicke}/>
               
                    {count}
          {/**aqui entro al initial state saclos la informacion del estado */}
          <Products/>
    
        </div>
    )
}

export default Home
