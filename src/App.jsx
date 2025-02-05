
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.scss';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import Beef from './Components/Beef/Beef';
import Breakfast from './Components/Breakfast/Breakfast';
import Chicken from './Components/Chicken/Chicken';
import All from './Components/All/All';
import ProductDetalis from './Components/ProductDetails/ProductDetails';



 
  



let x = createBrowserRouter ([
  { path : "",element : < Layout />, children:[
    {index : true , element : <All/>},
    {path:"Beef" , element : <Beef/>},
    {path:"ProductDetalis/:id/:strCategory" , element : <ProductDetalis/>},
    {path:"Breakfast" , element : <Breakfast/>},
    {path:"Chicken" , element : <Chicken/>},
  ]},
]);

function App() {


  return (
    <>

<RouterProvider router={x}>

</RouterProvider>
    

      
    </>
  )
}

export default App
