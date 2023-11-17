import React from 'react'
import Styles from "./header.module.css"
import tmblue from "../../../images/tmblue.png"
import greendot from "../../../images/greendot.png"
import greydot from "../../../images/greydot.png"
import wave from "../../../images/wave.png"
import headerprof from "../../../images/headerprof.png"
import { useState } from 'react'
import toggleon from "../../../images/toggleon.png"
import toggleoff from "../../../images/toggleoff.png"
// import {LiaToggleOffSolid} from "react-icons/lia"

const Header = () => {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => {
          setIsOpen(!isOpen);
        };
      
  return (
    <main className={Styles.header}>

        <section className={Styles.navleft}>
          <div> <img src={tmblue} alt="" className={Styles.tmblue} /> </div>

          <div className={Styles.xtwave}>
            <div className={Styles.tmxt}>TM30</div>
            <div className={Styles.helave}>
                <div className={Styles.helxt}>Hello</div>
                <div> <img src={wave} alt="" className={Styles.wavepic} /></div>
            </div>
          </div>

        </section>

        <section className={Styles.navright}>
            <article className={Styles.dotog}>
            <div className={Styles.compxt}>Company Status</div>

            <div  onClick={toggle} className={Styles.toggleon}>

                <div className={Styles.dotus}>

                    <div className={Styles.openxt}>
                          {isOpen 
                          ? (<div className={Styles.opendiv}> 
                          
                            <div className={Styles.grope}>
                              <img src={greendot} className={Styles.dot} alt="" /> 
                              <div className={Styles.openxt}>Open</div>
                            </div>

                          <img src={toggleon} className={Styles.onbtn} alt="" />
                          </div>)
                          
                          : 

                          (<div className={Styles.closediv}> 
                          
                            <div className={Styles.grope}>
                              <img src={greydot}  className={Styles.dot} alt="" /> 
                              <div className={Styles.closedxt}>Closed</div>
                            </div>

                            <img src={toggleoff} className={Styles.onbtn} alt="" />

                          </div>)}
                          
                    </div>
                </div>

            </div>

            </article>
           
           <div> <img src={headerprof} alt="" /></div>

        </section>

    </main>
  )
}

export default Header;