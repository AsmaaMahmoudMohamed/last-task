import React from 'react';
import style from "./Footer.module.scss";
import logo from "../../assets/logo-BfNap0Pe.png"

export default function Footer() {
  return ( <>   
  
  <div className={`${style.mandiv}`}>

    <div className={`${style.caption}`}> 
    <div>
  <img src={logo} alt="logo" />
  <span>Recipe</span>
</div>

<div className={`${style.div}`}>
  <h4>Route</h4>
</div>


  </div> 
  <div className={`${style.lastdiv}`}>
  © 2025 Nagy Osama™. All Rights Reserved.
  </div>
      
    </div>

  
  
   </>
   
  )
}
