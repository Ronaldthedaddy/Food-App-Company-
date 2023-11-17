import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Forgotpass from './Pages/Forgotpass/Forgotpass';
import Otp from './Pages/Otp/Otp';
import ResetPass from './Pages/ResetPass/ResetPass';
import Layout from './Pages/Components/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Order/Order';
import Vendors from './Pages/Vendors/Vendors';
import Staff from './Staff/Staff';
import Settings from './Settings/Settings';
import Orderdetails from './Pages/Order/Orderdetails';
import Vendordetails from './Pages/Vendors/Vendordetails';
import Newvendor from './Pages/Vendors/Newvendor';
import Newstaff from './Staff/Newstaff';
import Staffdetails from './Staff/Staffdetails';



function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/resetpass" element={<ResetPass/>} />
          <Route element={<Layout/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path=  "/order" element={<Order />} />
            <Route path="/vendors" element={<Vendors/>} />
            <Route path="/staff" element={<Staff/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/orderdetails" element={<Orderdetails/>} />
            <Route path="/newvendor" element={<Newvendor/>} />
            <Route path="/vendordetails" element={<Vendordetails/>} />
            <Route path="/newstaff" element={<Newstaff/>} />
            <Route path="/staffdetails" element={<Staffdetails/>} />
            </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
