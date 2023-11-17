import React, { useState } from 'react'
import Style from './newvendor.module.css'
import {IoIosArrowRoundBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';


const Newvendor = () => {
  const navigate = useNavigate()

  const [divVisible, setDivVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Check if input contains characters
    if (inputValue.trim() !== '') {
      // If input contains characters, hide the div
      setDivVisible(false);
    }
  };


  return (
    <main className={Style.newvenout}>

      <section className={Style.vendorback}>
         <article className={Style.vendaddxt}>
             <div className={Style.vendxt}>Vendors /
                <span className={Style.upaddxt}>Add New Vendor</span>
             </div>
             <div className={Style.downaddxt}>Add New Vendor</div>
         </article>

         <div className={Style.arrowback}
              onClick={() => navigate('/vendors')}>
            <div className={Style.arrow}><IoIosArrowRoundBack/></div>
            <div className={Style.back2}>Back</div>
        </div>
      </section>

      <div className={Style.getxt}>Get started the new vendor sign up process</div>


      <section className={Style.venlink}>
        <article className={Style.vendiv}>
       
        <form className={Style.form}>
            <section className={Style.venputdiv}> 
             <div className={Style.idxt}>Vendor ID</div>
             <input 
              className={Style.venput}
              type="text"
              onChange={handleInputChange} 
             />
            </section>

            <section className={Style.addputdiv}>
             <div className={Style.anxt}>Add a Note</div>
             <input className={Style.addput} type="text"/>
            </section>
      </form>


          <div className={Style.sendcandiv}>
            <button onClick={handleButtonClick} className={Style.sendxt}> Send Invite link</button>
            <button 
              onClick={() => navigate('/vendors')}
             className={Style.cancelxt}>Cancel</button>
          </div>
      
        </article>

        {divVisible ? 
        <article className={Style.invidiv}>
         <div className={Style.invilinkxt}>Invite link not sent yet.</div>
       </article>
            :
           <div className={Style.invidiv2}>
          <div className={Style.invilinkxt2}>Invite link sent.</div>
          </div> }

      </section>

    </main>
  )
}
 
export default Newvendor