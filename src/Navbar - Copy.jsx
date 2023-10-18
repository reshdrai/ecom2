import React from "react";
import { Link } from "react-router-dom";



function Navbar(){
    return(
      
        <><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="shop.PNG" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/men"><a class="nav-link active" aria-current="page" href="#">mens</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/women"><a class="nav-link active" aria-current="page" href="#">female</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/electronics"><a class="nav-link active" aria-current="page" href="#">Electronics</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/jewelery"><a class="nav-link active" aria-current="page" href="#">Jwellery</a></Link>
              </li>


            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

      </nav>
</>



    )}

export default Navbar;