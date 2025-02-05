import React, { useEffect, useState } from 'react';
import style from "./ProductDetails.module.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';

// const axios = require('axios');

export default function ProductDetalis() {
  const [product, setproduct] = useState(null);
 ////////////////////////////////////// 
//   const API = {
//     categories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
//     byCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
//     searchById: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
//     ingredientImage: 'https://www.themealdb.com/images/ingredients/',
//     randomMeal: 'https://www.themealdb.com/api/json/v1/1/random.php'
// };
////////////////////////////////////////////////////


  let {id} = useParams() ;

  async function getProduct(id){
   let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res)=>{
      console.log(res);
      setproduct(res);
    })
    .catch((res)=>{
      console.log(res);
    });
  }
  useEffect(()=>{
    getProduct(id)
  },[])
  
  return ( <>   
  
<div className="row">
      <div className={`${style.maindiv}`}>   
  <h1>{ product?.strMeal} Meaaal</h1>
  <div className="w-1/4">
  <img src={product?.data} className='w-full' alt="" /> Meallllll
  </div>
  <div className="w-3/4">
  <h1>  {product?.strInstructions} mealll</h1>
  </div>
  
  </div>

</div>
  
   </>
   
  )
}
