import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import SellerDashboard from "./pages/SellerDashboard";
// import BuyerDashboard from "./pages/BuyerDashboard";
import Navbar from "./components/Navbar";
import GsapTransition from "./components/GsapTransition";


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>

        {/*It is move on Gsap*/}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="buyer/profile" element={<BuyerDashboard />} />
        </Routes> */}

       <GsapTransition/>

        {/* Add your footer */}

      </BrowserRouter>
    </>
  )
}
export default App
