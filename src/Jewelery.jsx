import React from 'react'
import Data from './Data';
import { Link } from 'react-router-dom';
function Jewelery() {
    let cat="jewelery";
  let getid=Data.filter((x)=>x.category==cat)
  return (
    <>
    <div className='card-container'>
         {getid.map((x) =>
        
        <div className="card">
         
         <div className='card-baby'>
             <div className='image'>
             <Link to={`/details/${x.id}`}><img src={x.image}/></Link>
             </div>
         <h6 className='card-title'>{x.title.substring(0,10)}</h6>
         {/* <p className='card-text'>Some quick example text to build on the card title and  content.</p> */}
         
         </div>
         
         </div>
         )}
        </div>
    </>
  )
}

export default Jewelery