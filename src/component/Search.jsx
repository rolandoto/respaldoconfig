import React from 'react'

const Search = ({serch,searchinput,handeSerach}) => {
    return (
        <div>
               <h4>busca tu ropa favorite</h4>
               <input type="text" value={serch} ref={searchinput} onChange={handeSerach}/>
        </div>
    )
}


export default Search