import React, {useState} from 'react'
import Styles from './resetpass.module.css'
import tmlogo from "../../images/tmlogo.png"
import padlock from "../../images/padlock.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const ResetPass = () => {
  const navigate = useNavigate()

    const [inputPassNew, setInputPassNew] = useState("password");
    const [showNew, setShowNew] = useState(false);
  
    const handleShowNew = () => {
      setShowNew(!showNew);
      setInputPassNew(inputPassNew === "password" ? "text" : "password");
    };

    const [inputPassConfirm, setInputPassConfirm] = useState("password");
    const [showConfirm, setShowConfirm] = useState(false);
  
    const handleShowConfirm = () => {
      setShowConfirm(!showConfirm);
      setInputPassConfirm(inputPassConfirm === "password" ? "text" : "password");
    };

  return (
    <main className={Styles.mainout}>
        <article className={Styles.mainin}>
            <section className={Styles.mainside}>
                <img src={tmlogo} className={Styles.tmlogo} alt="" />

                <div className={Styles.resetxt}>Reset Password</div>
            <div className={Styles.enterxt}>Please enter your new password </div>


         <div className={Styles.cmail1}>
                 <label className={Styles.cmailxt}>New Password</label>

                      <div className={Styles.cputdiv2}>
                        <div className={Styles.cloput}>
                        <img src={padlock} className={Styles.cmvelogo} alt="" />{" "}
                        <input className={Styles.cmput}
                          type={inputPassNew}
                          placeholder=""/>
                        </div>

                          <button className={Styles.cmeye} onClick={handleShowNew}>
                          {showNew ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                        </button>
                      </div>

        </div>


        <div className={Styles.cmail}>
                 <label className={Styles.cmailxt}>Confirm New Password</label>

                      <div className={Styles.cputdiv2}>
                        <div className={Styles.cloput}>
                        <img src={padlock} className={Styles.cmvelogo} alt="" />{" "}
                        <input className={Styles.cmput}
                          type={inputPassConfirm}
                          placeholder=""/>
                        </div>
                        
                          <button className={Styles.cmeye} onClick={handleShowConfirm}>
                          {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                        </button>
                      </div>

                      <button onClick={()=>navigate("/")} className={Styles.proceedxt}>Proceed</button>
                    <Link to='/' className={Styles.backxt}>Back to login</Link>
        </div>
        
            </section>
            <div className={Styles.notxt}>Not yet registered? <span className={Styles.regxt}>Register</span></div>

        </article>
    </main>
  )
}

export default ResetPass