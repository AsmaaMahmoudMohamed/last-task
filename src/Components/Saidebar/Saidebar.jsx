import React from 'react';
import style from "./Saidebar.module.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-BfNap0Pe.png"



export default function Saidebar() {
  return ( <>   
  
    <div className={`${style.maindiv}`}>
      <img src={logo} alt="logo" />
    <ul>

      <li> <Link  className={`${style.caption} ${style.btn} `}   to=""> Meal</Link></li>
      <li> <Link   className={`${style.caption} ${style.btn}`}  to=""> ingedient</Link></li>
      <li> <Link   className={`${style.caption} ${style.btn}`}  to=""> Area</Link></li>

     
    </ul>
  </div>
  
   
   </>
   
  )
}
