
import style from "./Starter.module.scss";
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function Starter() {
  const [products, setproducts] = useState([]);
  let navigite =  useNavigate()


  //  function DetailsButton(){
  //   navigite();
  //   navigite(-1);
  //  }


 
  

function getProducts(){
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`)
  .then((res)=>{
    console.log(res.data.meals);
    setproducts(res.data.meals);
  })
  .catch((res)=>{
    
  })

}
useEffect(()=>{
  getProducts()
},[])

  return  <> 

   
 <div className="row">
  {products.map((product)=>(
    <div key={product?.idMeal} className=  {`${style.maindiv} w-1/4 gap-5  ` }>
    <div className="product ">
      <img src={product?.strMealThumb}className={`${style.mainimg}`} alt="" />
      <h3 className=' mb-3'>{product?.strCategory}</h3>
    
      r
   
    
      


      <Link   to= {  `/ProductDetalis/${product?.idMeal}/${product?.strMeal}`}>  
      <button className={`${style.btn}`}>View Recipe</button> 
      </Link>


      {/* <Navigate  to= {`ProductDetalis/${product?.idMeal}/${product?.strMeal}`}/> 
      <button className={`${style.btn}`}>  View Recipe</button>  */}
    
     
      {/* <button type="button" onClick= {DetailsButton}
      className={`${style.btn}`}>View Recipe</button>   */}


      {/* <Link   to= { navigite `ProductDetalis/${product?.idMeal}/${product?.strMeal}`}>  
      <button className={`${style.btn}`}>View Recipe</button> 
      </Link> */}
 
       {/* <Link   to= { navigite( `ProductDetalis/${product?.idMeal}/${product?.strMeal}`)}>  
      <button className={`${style.btn}`}>View Recipe</button> 
      </Link>  */}

{/* 
      <button className={`${style.btn}`}
      onClick={() => {
        navigite(`/ProductDetalis/${product?.idMeal}/${product?.strMeal}`)
      }}>View Recipe </button> */}

    </div>
  </div>

  ))}
 </div> 
  
  
   </>
   
  
}

