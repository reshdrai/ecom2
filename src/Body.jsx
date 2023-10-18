import React from "react";
import { Link } from "react-router-dom";

function Body(){
    return(
        <div><div className="grid row">
        <div class="accordion col-3 " id="accordionExample ">
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 <ul>
                <Link to="/men">  <li>Men</li></Link>
                  <Link to="/women"><li>Women</li></Link>
                  <Link to="/computer"><li>Computer</li></Link>
                  
                  
                 </ul>
              </div>
            </div>
          </div>
          
         
         
        </div>
        <div className="image col-8">
          <img src="https://themespride.com/demo/woocommerce-shopping-cart/wp-content/themes/woocommerce-shopping-cart-pro/assets/images/slide/slide1.png" height={400}/>
        </div>
      </div>
        
      
        </div>
    )
}
export default Body;