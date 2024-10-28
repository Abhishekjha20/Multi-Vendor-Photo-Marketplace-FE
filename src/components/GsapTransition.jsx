import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SellerDashboard from '../pages/SellerDashboard';
import BuyerDashboard from '../pages/BuyerDashboard';
import gsap from 'gsap';

function GsapTransition() {

const nodeRef = useRef(null);
const location = useLocation();

// Jab bhi location change to ye useEffect run ho jayega.bcz ye useEffect hook ko hum dependent banane wle hai location ake uppar.

// When page renders,useEffect run first
useEffect(()=>{
    if(nodeRef.current){
gsap.fromTo();
    }

},[location])
// When keep dependency array empty, it means that : ye page call hoga jab bhi hum reference karunga

  return (
    <div ref={nodeRef}>
         <Routes location = {location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="buyer/profile" element={<BuyerDashboard />} />
        </Routes>
    </div>
  )
}

export default GsapTransition