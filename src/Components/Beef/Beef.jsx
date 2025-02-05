import React, { useEffect, useState } from 'react';
import style from "./Beef.module.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Beef() {

  const [product, setproduct] = useState([]);

  let {strCategory} = useParams() ;

  async function getAllProducts(){
   
     let res =  await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((res)=>{
      // console.log(res);
     let related = res.data.categories.filter((product)=>product.strCategory == strCategory)
     console.log(related)
      
    })

  }
  useEffect(()=>{
    getAllProducts()
  },[])
  return ( <>   
  
  
  
  
   </>
   
  )
}
