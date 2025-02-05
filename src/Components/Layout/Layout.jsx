import React from 'react';
import style from "./Layout.module.scss";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Saidebar from './../Saidebar/Saidebar';



export default function Layout() {
  return ( <>   
  
  < Navbar/>
  <div className={`${style.container} container w-[90%] mx-auto py-24`}>
    <Outlet/>
  </div>
  <Saidebar/>
  < Footer />

  
  
   </>
   
  )
}
