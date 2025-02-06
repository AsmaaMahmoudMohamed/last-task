import React from 'react';
import style from "./Navbar.module.scss";
import { Link, NavLink } from 'react-router-dom';




export default function Navbar() {
  return ( <>   
  
  <div className={style.maindiv}>
   
    <div className={`${style.divtitle}`} >  
    <h1>Learn, Cook, Eat Your Food</h1>
    <ul className={style.maincaption}>
    <li> <NavLink className={`${style.caption} ${style.btn}`} to="">All</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Beef">Beef</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Breakfast">Breakfast</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Chicken">Chicken</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Dessert">Dessert</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Goat">Goat</NavLink></li> 

      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Lamb">Lamb</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Miscellaneous">Miscellaneous</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Pasta">Pasta</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Pork">Pork</NavLink></li> 
      
   </ul >
      <ul className={style.maincaption1}>
       <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Seafood">Seafood</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Side">Side</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Starter">Starter</NavLink></li>
      <li> <NavLink className={`${style.caption} ${style.btn}`}  to="Vegetarian">Vegetarian</NavLink></li> 
      
     
    </ul>
    </div>
  </div>
  
  
   </>
   
  )
}
