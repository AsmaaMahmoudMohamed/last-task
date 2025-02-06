import React, { useEffect, useState } from 'react';
import style from "./All.module.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';







export default function All() {
  const [products, setproducts] = useState([])

function getProducts(){
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
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
    <div key={product.idMeal} className=  {`${style.maindiv} w-1/4 gap-5 ` }>
    <div className="product ">
      <img src={product.strMealThumb}className={`${style.mainimg}`} alt="" />
      <h3 className=' mb-3'>{product.strCategory}</h3>
      <h4 className=' mb-3'>   {product.strArea}</h4>
     
      <Link   to= {`ProductDetalis/${product.idMeal}/${product.strCategory}`}>  
      <button className={`${style.btn}`}>View Recipe</button> 
      </Link>
     

    </div>
  </div>

  ))}
 </div> 
  
  
   </>
   
  
}
