import React from 'react'
import Style from "./settings.module.css"

const Settings = () => {
  return (
   
        <main className={Style.mainset}>
          <div className={Style.setxt}>Settings</div>
          <div className={Style.pcxt}>Please change your password as the company food manager</div>

          <article className={Style.midbody}>
            <form className={Style.form}>
            <section className={Style.venputdiv}> 
             <div className={Style.idxt}> Name</div>
             <input 
              className={Style.venput}
              type="text"
              placeholder='TM30 (Company Admin)'
             />
            </section>

            <section className={Style.venputdiv}> 
             <div className={Style.idxt}> Old Password*</div>
             <input 
              className={Style.venput}
              type="text"
             />
            </section>

            <section className={Style.venputdiv}> 
             <div className={Style.idxt}> New Password*</div>
             <input 
              className={Style.venput}
              type="text"
             />
            </section>

            <section className={Style.venputdiv}> 
             <div className={Style.idxt}> Confirm New Password*</div>
             <input 
              className={Style.venput}
              type="text"
             />
            </section>
            </form>

            <section className={Style.scdiv}>
              <div className={Style.saxt}>Save</div>
              <div className={Style.caxt}>Cancel</div>
            </section>

          </article>
        </main>
  )
}

export default Settings