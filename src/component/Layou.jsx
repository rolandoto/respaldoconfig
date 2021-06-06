import React from 'react'

import '../Componentes/styles/Layout.css'
import Footer  from './Footer'
import Header  from './Header'


const Layou = ({children}) => {
    return (
        <div className="Main"> 
          <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layou