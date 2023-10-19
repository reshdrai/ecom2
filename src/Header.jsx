import React from "react";
import Header_down from "./Header_down";
import Navbar from "./Navbar";



function Header(){
    return(
        <>
        <div className="top-bar">
            <div style={{width:'80%',display:'flex',justifyContent:'space-between'}}>

            <div className="logo col-lg-4 col-4">
                <img src="https://www.themespride.com/wp-content/themes/themespride/images/logo.png" alt="logo" />
            </div>
            <div className="text col-lg-4 col-4 text-light">
            Spring Special! Festive Sale! Enjoy 20% OFF Use Code: "NY23Festiv20"
            </div>
            <div className="buton col-lg-4 col-4">
            <button type="button" class="btn btn-warning">Donate</button>
            </div>
            
</div>
           
            
           
            
        </div>
         <Header_down/>
         <Navbar/>
        </>

       
    )
}
export default Header;