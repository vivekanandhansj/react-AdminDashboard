

import './App.css';
import DashBoard from './DashBoard';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Users from './Users';
import UserForm from './UserForm';
import UserView from "./UserView";
import UserEdit from "./UserEdit";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Product';
import AddProduct from "./AddProduct";

import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';


function App() {

 
  return (
    <BrowserRouter>
   <div id="wrapper">
     <SideBar/>
     <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
       <TopBar/>
       <div className="container-fluid">
   
         <Routes>
         <Route path="/Dashboard" element={<DashBoard />}/>
       
       <Route path="/Users" element={<Users />}/>
       <Route path="/Create-user-form" element={<UserForm />}/>
       <Route path="/user-view/:id" element={<UserView />}/>
       <Route path="/user-edit/:id" element={<UserEdit />}/>

       <Route path="/Products" element={<Product />}/>
       <Route path="/add-product" element={<AddProduct />}/>
       <Route path="/product-view/:id" element={<ViewProduct />}/>
       <Route path="/product-edit/:id" element={<EditProduct />}/>
         </Routes>
         </div>
       </div>
     </div>
   </div>
   </BrowserRouter>
  );
}

export default App;