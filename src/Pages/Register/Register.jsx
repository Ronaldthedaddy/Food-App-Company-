import React, {useState} from 'react'
import Styles from './register.module.css'
import tmlogo from "../../images/tmlogo.png"
import maneatrice from "../../images/maneatrice.png"
import envelope from "../../images/envelope.png"
import padlock from "../../images/padlock.png"
import coaddress from "../../images/coaddress.png"
import coname from "../../images/coname.png"
import cophone from "../../images/cophone.png"
import domain from "../../images/domain.png"
import nigeria from "../../images/nigeria.png"
import staff from "../../images/staff.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'



const Register = () => {

  const [inputPassReg, setInputPassReg] = useState("password");
  const [showReg, setShowReg] = useState(false);
  const [inputPassReg1, setInputPassReg1] = useState("password");
  const [showReg1, setShowReg1] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");

  const [companyEmail, setCompanyEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [companyName, setCompanyName] = useState();
  const [domainName, setDomainName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [companySize, setCompanySize] = useState();

  const handleShowReg = () => {
    setShowReg(!showReg);
    setInputPassReg(inputPassReg === "password" ? "text" : "password");
  };

  const handleShowReg1 = () => {
    setShowReg1(!showReg1);
    setInputPassReg1(inputPassReg1 === "password" ? "text" : "password");
  };

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/company-signup", 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyEmail: companyEmail,
            phoneNumber: phoneNumber,
            companyName:companyName,
            domainName:domainName,
            password:password, 
            confirmPassword:confirmPassword,
            companyAddress:companyAddress,
            companySize:companySize
          }),
        }
      );

      const data = await response.json();
      localStorage.setItem('Token',data.data.accessToken);
      
      console.log(data)
      if (data.status) {
        setLoading(false);
        
        
        // If data.status is true, redirect to '/home'
        navigate("/");
      } else {
        setLoading(false);
        // Handle the case where data.status is false or not present
      }
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    <main className={Styles.mainregout}>
      <navbar className={Styles.navbar}>
        <div><img src={tmlogo} alt='' className={Styles.tmlogo}/></div>
        <div className={Styles.regtext}> Register Your Company</div>
      </navbar>
    
    <body className={Styles.bodycont}>

      <section className={Styles.leftcont}>
        <div className={Styles.supplyxt}>Supply your company with office food</div>
        <div className={Styles.easilyxt}>Easily manage your employee meal and control to order multiple meals for your staff</div>

        <article className={Styles.scrollout}>
          <div className={Styles.regyctext}>Register your company</div>
          <div className={Styles.orderxt}>Order food for your staff</div>


            <div className={Styles.email}>
              <label className={Styles.emailxt}> Email address</label>
 
               <div className={Styles.cputdiv}>
                 <img src={envelope} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setCompanyEmail(e.target.value)}
                  className={Styles.cmput}
                  type="text"
                  value={companyEmail}
                  placeholder=""/>
              </div>

           </div>


           <div className={Styles.email}>
              <label className={Styles.emailxt}>Company domain name (optional)</label>

               <div className={Styles.cputdiv}>
                 <img src={domain} className={Styles.cmvelogo} alt="" />{" "}
                  <input
                  onChange={(e)=>setDomainName(e.target.value)}
                  className={Styles.cmput}
                  type="text"
                  value={domainName}
                  placeholder=""/>
              </div>
              
           </div>


           <div className={Styles.email}>
              <label className={Styles.emailxt}>Company name</label>

               <div className={Styles.cputdiv}>
                 <img src={coname} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setCompanyName(e.target.value)}
                  className={Styles.cmput}
                  type="text"
                  value={companyName}
                  placeholder=""/>
              </div>
              
           </div>


           <div className={Styles.email}>
              <label className={Styles.emailxt}>Company address</label>

               <div className={Styles.cputdivc}>
                 <img src={coaddress} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setCompanyAddress(e.target.value)}
                  className={Styles.cmputc}
                  type="text"
                  value={companyAddress}
                  placeholder=""/>
              </div>
              
           </div>

           <div className={Styles.email}>
              <label className={Styles.emailxt}>Phone number</label>

               <div  className={Styles.cputdiv}>
                 <img src={cophone} className={Styles.cmvelogo} alt="" />{" "}
                 <img src={nigeria} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  className={Styles.cmput}
                  type="tel"
                  value={phoneNumber}
                  placeholder=""/>
              </div>
              
           </div>

           <div className={Styles.email}>
              <label className={Styles.emailxt}>Staff size</label>

               <div className={Styles.cputdiv}>
                 <img src={staff} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setCompanySize(e.target.value)}
                  className={Styles.cmput}
                  type="text"
                  value={companySize}
                  placeholder=""/>
              </div>
              
           </div>

           <div className={Styles.emailp}>
              <label className={Styles.emailxt}>Password</label>

               <div className={Styles.cputdivp}>
                 <img src={padlock} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setPassword(e.target.value)}
                  className={Styles.cmputp}
                  type="text"
                  value={password}
                  placeholder=""/>

              <button className={Styles.cmeye} onClick={handleShowReg}>
              {showReg ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
            </button>
              </div>
              
           </div>


          
           <div className={Styles.emailp}>
              <label className={Styles.emailxt}> Confirm Password</label>

               <div className={Styles.cputdivp}>
                 <img src={padlock} className={Styles.cmvelogo} alt="" />{" "}
                  <input 
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className={Styles.cmputp}
                  type="text"
                  value={confirmPassword}
                  placeholder=""/>

              <button className={Styles.cmeye} onClick={handleShowReg1}>
              {showReg1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
            </button>
              </div>
              
           </div>


          <div className={Styles.update}>
          <input type='checkbox'/>          
          <div className={Styles.acceptxt}>I accept to receive updates from TM30 food platform</div>
          </div>

          <div className={Styles.policy}>
          <input type='checkbox'/>          
          <div className={Styles.acceptxt}>I accept the <span className={Styles.privxt}>privacy policy</span> </div>
          </div>


            <button onClick={handleLogin} className={Styles.get} >Get Started</button>   
            <div className={Styles.already}>Already Registered? <Link to='/' className={Styles.log}>Log in</Link> </div>         
        </article>

      </section>






{/* Right side containing the image */}
      <section className={Styles.rightcont}><img src={maneatrice} alt=''/></section>
    </body>
    
    
    </main>
  )
}

export default Register;