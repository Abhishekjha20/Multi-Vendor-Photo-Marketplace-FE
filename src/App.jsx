import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path = "/seller/profile" element = {<SellerDashboard/>}/>
        <Route path = "buyer/profile" element = {<BuyerDashboard/>}/>
      </Routes>
      </BrowserRouter> 
    </>
  ) 
}

export default App
