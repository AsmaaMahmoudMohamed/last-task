import React, { useEffect, useState } from 'react';
import style from "./ProductDetails.module.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function ProductDetalis() {
  const [product, setproduct] = useState();


  let {id} = useParams();
  // console.log(id);

 async function getProduct(id){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  
    setproduct(data)
    console.log(data);
    
  }
  useEffect(()=>{
    getProduct(id)

  },[])


 



  
  return ( <>   
  
 <div className="row ">
 <h1 className={`${style.h1}`}>{ product?.meals[0].strMeal} </h1>
      <div className={`${style.maindvone} gap-4`}>   
 

  <div className={` ${style.maindiv}    w-1/3 `}>
  <img src={product?.meals[0].strMealThumb} className='w-full' alt="" /> 
  <div className="flex ">  
  <button className={`${style.button}`}> {product?.meals[0].strYoutube} </button>
  <button className={`${style.button1}`}> {product?.meals[0].strSource}  </button>
  </div>
  
  </div>

  <div className={`   ${style.maindiv}   w-1/3 p-2`}>
  
  <p>  {product?.meals[0].strInstructions} mealll</p>
  </div>

  <div className={`   ${style.maindiv } ${style.one}   w-1/3 `}>
  <h2 className={`${style.h2}  font-bold`}>  Ingredients :</h2>
  <h4 className={`${style.h4}  `}> Filo Pastry: {product?.meals[0].strIngredient1} mealll</h4>
  <h4 className={`${style.h4}  `}> Minced Beef: {product?.meals[0].strIngredient2} mealll</h4>
  <h4 className={`${style.h4}  `}> Onion: {product?.meals[0].strIngredient4} mealll</h4>
  <h4 className={`${style.h4}  `}> Salt: {product?.meals[0].strIngredient5} mealll</h4>
  <h4 className={`${style.h4}  `}> Pepper:  {product?.meals[0].strIngredient6} mealll</h4>
  
  </div>
  
  </div>

</div> 
   
   </>
   
  )
}
