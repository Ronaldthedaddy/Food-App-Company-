import React from 'react'
import tmlogo from "../../images/tmlogo.png"
import Styles from "./forgotpass.module.css"
import envelope from "../../images/envelope.png"
import { Link, useNavigate } from 'react-router-dom'


const Forgotpass = () => {
  const navigate = useNavigate()
  return ( 
    <main className={Styles.mainout}>
        <article className={Styles.mainin}>
            <section className={Styles.mainside}>
            <img src={tmlogo} className={Styles.tmlogo} alt="" />
            <div className={Styles.forgotxt}>Forgot Password</div>
            <div className={Styles.enterxt}>Please enter your email address and a reset link will be sent to the email provided</div>


 
              <div className={Styles.email}>

                <label className={Styles.emailxt}> Email address</label>
                <div iv className={Styles.cputdiv}>
                   <img src={envelope} className="cmvelogo" alt="" />{" "}
                   <input className={Styles.cmput}
                    type=""
                    placeholder=""/>
                </div>

             </div>

             <button onClick={()=>navigate("/otp")} className={Styles.proceedxt}>Proceed</button>
             <Link to='/' className={Styles.backxt}>Back to login</Link>
            </section>
             <div className={Styles.yetxt}>Not yet registered? <Link to='/register' className={Styles.regtext}>Register</Link> </div>
        </article>





    </main>
  )
}

export default Forgotpass