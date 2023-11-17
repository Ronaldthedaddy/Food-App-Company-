import React, { useState } from 'react'
import Styles from  "./home.module.css"
import tmlogo from "../../images/tmlogo.png"
import envelope from "../../images/envelope.png"
import padlock from "../../images/padlock.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const [inputPass, setInputPass] = useState("password");
  const [show, setShow] = useState(false);

  const navigate = useNavigate()
  const [loading, setLoading] = useState("");

  const handleShow = () => {
    setShow(!show);
    setInputPass(inputPass === "password" ? "text" : "password");
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/authenticate", 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password:password 
          }),
        }
      );
      //foodapp6@gmail.com
      //pass1

      const data = await response.json();
      localStorage.setItem('userDetails', JSON.stringify(data));
      
      let D = JSON.parse(localStorage.getItem('userDetails'))

      console.log(D.data);
      // let e = D.data
      // console.log(e);
      if (email===data.data.email && password===data.data.password && data.status===true){
        navigate("/dashboard")
      }
      else if
      (email !== data.data.email && password !==data.data.password)
      {
        alert ("Incorrect Details Provided")
      }
      

      if (data.status) {
        setLoading(false);
        
        // If data.status is true, redirect to '/dashboard'
        navigate("/dashboard");
      } else {
        setLoading(false);
        // Handle the case where data.status is false or not present
      }
    } catch (error) {
      setLoading(false);
    }
  };
  
  return (
    <main className={Styles.comain}>
        <article className={Styles.porlotaff}> 
            <section className={Styles.portolin}>
            <div className='ctmlogo'><img src={tmlogo} className='ctmlogmg' alt=''/></div>
            <div className={Styles.comptext}>Company Portal</div>
            <div className={Styles.mystaxt}>Manage your staff order and simplify team meals with group orders</div>

        
        <body className={Styles.comepwrd}>
        
        <div className={Styles.cmail}>
        <label className={Styles.cmailxt}> Email address</label>

          <div className={Styles.cputdiv}>
            <img src={envelope} className={Styles.cmvelogo} alt="" />{" "}
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            className={Styles.cmput}
            type="text"
            value={email}
            placeholder=""/>
          </div>

        </div>
      
        <div className={Styles.cmail}>
        <label className={Styles.cmailxt}>Password</label>

          <div className={Styles.cputdiv2}>
            <div className={Styles.cloput}>
            <img src={padlock} className={Styles.cmvelogo} alt="" />{" "}
            <input
             onChange={(e)=>setPassword(e.target.value)}
             className={Styles.cmput}
             type={inputPass}
             value={password}
             placeholder=""/>
            </div>
            
              <button className={Styles.cmeye} onClick={handleShow}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
            </button>
          </div>

        </div>
        
            <button
            onClick={handleLogin}  
            className={Styles.clogxt}>Log in
            </button>
        
            <Link to='/forgotpass' className={Styles.cfgtxt}>Forgot password?</Link>
        </body>
       
            </section>
       
            <article className={Styles.cnotregxt}>
            <div className={Styles.cntregxt}>Not Registered yet?</div>
            <Link to="/register" className={Styles.cregxt} >Register</Link>
          </article>

        </article>
    </main>
  )
}

export default Home