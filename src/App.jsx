
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.scss';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import Beef from './Components/Beef/Beef';
import Breakfast from './Components/Breakfast/Breakfast';
import Chicken from './Components/Chicken/Chicken';
import All from './Components/All/All';
import ProductDetalis from './Components/ProductDetails/ProductDetails';
import Dessert from './Components/Dessert/Dessert';
import Goat from './Components/Goat/Goat';
import Lamb from './Components/Lamb/Lamb';
import Miscellaneous from './Components/Miscellaneous/Miscellaneous';
import Pasta from './Components/Pasta/Pasta';
import Pork from './Components/Pork/Pork';
import Seafood from './Components/Seafood/Seafood';
import Side from './Components/Side/Side';
import Starter from './Components/Starter/Starter';
import Vegan from './Components/Vegan/Vegan';
import Vegetarian from './Components/Vegetarian/Vegetarian';



 
  



let x = createBrowserRouter ([
  { path : "",element : < Layout />, children:[
    {index : true , element : <All/>},
    {path:"Beef" , element : <Beef/>},
    {path:"ProductDetalis/:id/:Category" , element : <ProductDetalis/>},
    {path:"Breakfast" , element : <Breakfast/>},
    {path:"Chicken" , element : <Chicken/>},
    {path:"Dessert" , element : <Dessert/>},
    {path:"Goat" , element : <Goat/>},
    {path:"Lamb" , element : <Lamb/>},
    {path:"Miscellaneous" , element : <Miscellaneous/>},
    {path:"Pasta" , element : <Pasta/>},
    {path:"Pork" , element : <Pork/>},
    {path:"Seafood" , element : <Seafood/>},
    {path:"Side" , element : <Side/>},
    {path:"Starter" , element : <Starter/>},
    {path:"Vegan" , element : <Vegan/>},
    {path:"Vegetarian" , element : <Vegetarian/>},
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
