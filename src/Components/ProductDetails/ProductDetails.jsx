import React, { useEffect, useState } from 'react';
import style from "./ProductDetails.module.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function ProductDetalis() {
  const [product, setproduct] = useState(null);


  let {id} = useParams();
  // console.log(id);

  function getProduct(id){
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  
    .then ((res)=>{
       console.log(res.data);
      setproduct(res.data)

    
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
  <div className="w-1/4 gap-5">
  <img src={product?.data?.strMealThumb} className='w-full' alt="" /> 
  <button> {product?.data?.strYoutube} </button>
  <button> {product?.data?.strSource}  </button>
  </div>
  <div className="w-2/4">
  <p>  {product?.strInstructions} mealll</p>
  </div>
  <div className="w-2/4">
  <span>  {product?.strIngredient1} mealll</span>
  <span>  {product?.strIngredient2} mealll</span>
  <span>  {product?.strIngredient4} mealll</span>
  <span>  {product?.strIngredient5} mealll</span>
  <span>  {product?.strIngredient6} mealll</span>
  <span>  {product?.strIngredient7} mealll</span>
  <span>  {product?.strIngredient8} mealll</span>
  <span>  {product?.strIngredient9} mealll</span>
  <span>  {product?.strIngredient10} mealll</span>
  <span>  {product?.strIngredient11} mealll</span>
  <span>  {product?.strIngredient12} mealll</span>
  </div>
  
  </div>

</div> 
   
   </>
   
  )
}
