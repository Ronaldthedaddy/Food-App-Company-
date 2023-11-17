import React, { useState } from 'react'
import Style from "./newstaff.module.css";
import {IoIosArrowRoundBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Newstaff = () => {
const navigate = useNavigate()


        const [inputs, setInputs] = useState(['', '', '', '']);
        const [isAvailable, setIsAvailable] = useState(false);
        const [showAddAnother, setShowAddAnother] = useState(false);

        const handleInputChange = (e, index) => {
          const updatedInputs = [...inputs];
          updatedInputs[index] = e.target.value;
          setInputs(updatedInputs);
        };

        const handleSendClick = () => {
          const areInputsFilled = inputs.every(value => value.trim() !== '');
        
          if (areInputsFilled) {
            setIsAvailable(true);
            setShowAddAnother(true);
          } else {
            setIsAvailable(false);
          }
        };

        const handleAddAnotherClick = () => {
          setInputs(['', '', '', '']);
          setShowAddAnother(false);
        };
  const [loading, setLoading] = useState("");
  const [userEmail, setUserEmail] = useState();
  
        const handleInvite = async (e) =>{
          e.preventDefault();
          setLoading(true);
      
          // let myHeaders = new Headers();
          // myHeaders.append(
          //   "Authorization",
          //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb29kYXBwQGdtYWlsLmNvbSIsImlhdCI6MTcwMDA1MDM1OSwiZXhwIjoxNzAwMTM2NzU5fQ.5NAFGvInBFAA1NBK-SEUBdgqIWBXVOHGedtwEmmZmGU"
          // );
        

          try {
            const response = await fetch(
              "http://89.38.135.41:7654/api/company/invite-staff", 
              {
                method: "POST",
                headers: {    "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb29kYXBwQGdtYWlsLmNvbSIsImlhdCI6MTcwMDA1MDM1OSwiZXhwIjoxNzAwMTM2NzU5fQ.5NAFGvInBFAA1NBK-SEUBdgqIWBXVOHGedtwEmmZmGU"
               },
                body: JSON.stringify({
                  userEmail: userEmail,
                }),
              }
            );
      
            const data = await response.json();
      
            if (data.status) {
              setLoading(false);
              
              // If data.status is true, redirect to '/dashboard'
              // navigate("/dashboard");
            } else {
              setLoading(false);
              // Handle the case where data.status is false or not present
            }
          } catch (error) {
            setLoading(false);
          }
        };

  return (
    <main className={Style.newstaffmain}>
        
        <section className={Style.vendorback}>
         <article className={Style.vendaddxt}>
             <div className={Style.vendxt}>Staff /
                <span className={Style.upaddxt}> Add New Staff</span>
             </div>
             <div className={Style.downaddxt}>Add New Staff</div>
         </article>

         <div className={Style.arrowback}
              onClick={() => navigate('/staff')}>
            <div className={Style.arrow}><IoIosArrowRoundBack/></div>
            <div className={Style.back2}>Back</div>
        </div>
      </section>
        
      <div className={Style.getxt}>Fill in the new customer details</div>

      <section className={Style.venlink}>
        <article className={Style.vendiv}>
       
        <form className={Style.form}>
            <section className={Style.venputdiv}> 
             <div className={Style.idxt}>First Name</div>
             <input 
              className={Style.venput}
              type="text"
              value={inputs[0]}
              onChange={(e) => handleInputChange(e, 0)}
             />
            </section>

            <section className={Style.venputdiv}>
             <div className={Style.anxt}>Last Name</div>
             <input className={Style.venput}
              type="text"
              value={inputs[1]}
              onChange={(e) => handleInputChange(e, 1)}
              />
            </section>

            <section className={Style.venputdiv}>
             <div className={Style.anxt}>Email Address</div>
             <input className={Style.venput}
             type="email"
             value={inputs[2]}
             onChange={(e) => handleInputChange(e, 2)}
             />
            </section>

            <section className={Style.venputdiv}>
             <div className={Style.anxt}>Phone Number</div>
             <input className={Style.venput}
             type="number"
             value={inputs[3]}
             onChange={(e) => handleInputChange(e, 3)}
             />
            </section>
      </form>


          <div className={Style.sendcandiv}>
            <button onClick={handleInvite} className={Style.sendxt}>Save & Generate Invite link</button>
                 {isAvailable && showAddAnother && (
               <div className={Style.addcandiv} onClick={handleAddAnotherClick}>
                <div className={Style.diaddxt}>Add Another</div>
               <div className={Style.disacanxt}>Cancel</div>
             </div> )}

              {isAvailable && showAddAnother?
            ""
            :
            <button 
              onClick={() => navigate('/staff')}
              className={Style.cancelxt}>Cancel
            </button>
            }
          </div>
      
        </article>

        {isAvailable && showAddAnother?  
         <article className={Style.invidiv2}>
         <div className={Style.invilinkxt2}>Invite link generated.</div>
         </article> 
            :
            <article className={Style.invidiv}>
         <div className={Style.invilinkxt}>Invite link not generated yet.</div>
       </article>} 

      </section>




    </main>
  )
}

export default Newstaff