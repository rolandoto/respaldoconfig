import React from 'react'

const Pratice = (props) => {
    //hay dos formas para pasar los props tanto como (props)  and la variable ejemplo ({nombre})
    console.log(props)
    return (
        <div>
          <button  onClick={props.hand}/>
          <button onClick={props.dane}></button>
        </div>
    )
}

export default Pratice
