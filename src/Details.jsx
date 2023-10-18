import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';
import { Link } from 'react-router-dom';
function Details() {
    let {pict}=useParams()
    let getid=Data.filter((x)=>x.id==pict)

    const [ count , updateCount ] = useState(0)
  return (
    <div>
      <>
      {getid.map((x)=>
    
        <div className='detail-cont row'>
            <div className='detail-img  col-md-3 col-3'>
                 <img src={x.image}></img>
                </div>
         <div className="nextcol col-md-6 col-6">       
                <div className='detail-title'>
                    <h2>{x.title}</h2>
                </div>
                <div className='detail-det'>
                    <b>{x.description}</b>
                    <h3>CATEGORY : {x.category}</h3>
                </div><br/>

                <div className="counter">
                  <h3>ITEMS COUNT : </h3>
                <a onClick={()=>updateCount(count-1)}><button> - </button></a> 
                  <h3> {count} </h3>
                <a onClick={()=>updateCount(count+1)}><button> + </button></a>
                </div>
                <div className='detail-footer'>
                    <h3>PRICE : {x.price}$</h3>
                </div>
               
                <Link to={`/order/${x.id}`}><button className='btn btn-warning'>CONFIRM ORDER</button></Link>
                    

         </div>
    </div>    
    )}
    </>
        </div>

  
  );
}

export default Details;