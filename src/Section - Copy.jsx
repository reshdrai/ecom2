import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from './Details'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Electronics from './Electronics'
import Jewelery from './jewelery'



function Section() {
  return (
    
    <Routes>
        <Route path="/details/:pict" element={<Details/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/jewelery" element={<Jewelery/>}/>
    </Routes>
    
  )
}

export default Section