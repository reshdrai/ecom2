import React from 'react'
import Data from './Data';
import { Link } from 'react-router-dom';
function Card() {
  return (
    <div className='card-container'>
        {Data.map((x) =>
        
  //  <div key={x.id} className="card">
    <div className="row ">
    <div className='card-baby key={x.id} col-md-12 col-sm-12'>
        <div className='image'>
        <Link to={`/details/${x.id}`}><img src={x.image}/></Link>
        </div>
    <h6 className='card-title my-3'>{x.title.substring(0,10)}</h6>
    {/* <p className='card-text'>Some quick example text to build on the card title and  content.</p> */}
    
    </div>
    </div>
    // </div>
    )}
    </div>
   
  )
}

export default Card