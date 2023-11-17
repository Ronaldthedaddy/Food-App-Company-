import React, {useState} from 'react'
import Style from "./staffdetails.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import adenikeround from "../images/adenikeround.png"
import vector from "../images/vector.png"
import email from "../images/email.png"
import phone from "../images/phone.png"
import whiterice from "../images/whiterice.png"
import plainpasta from "../images/plainpasta.png"
import poundedyam from "../images/poundedyam.png"
import adenikemid from "../images/adenikemid.png"
import toggleon2 from "../images/toggleon2.png"
import toggleoff2 from "../images/toggleoff2.png"


const Staffdetails = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
      
    const toggle = () => {
      setIsOpen(!isOpen);
    };


    const History=[
        {
            image: whiterice,
            name:"Choice Meal",
            icon: vector,
            orders: "496x",
            food:"White Rice-",
            details: "plantain, turkey, beef, egg, coke",
            quantity: "x2",
            date: "7th July 2023, 10:20 am",
            price: "3,200.00",
        },
        {
            image: plainpasta,
            name:"Choice Meal",
            icon: vector,
            orders: "496x",
            food:"Plain Pasta-",
            details: "plantain, turkey, beef, egg, coke",
            date: "5th July 2023, 9:56 am",
            price: "2,100.00",
        },
        {
            image: poundedyam,
            name:"Choice Meal",
            icon: vector,
            orders: "496x",
            food:"Pounded Yam-",
            details: "egusi, turkey, beef, fanta",
            date: "4th July 2023, 11:14 am",
            price: "1,600.00",
        },
    ]


  return (
    <main className={Style.staffdeetmain}>
        
        <section className={Style.vendorback}>
        <article className={Style.vendaddxt}>
          <div className={Style.vendxt}>
            Staff /<span className={Style.upaddxt}> Staff Details</span>
          </div>
          <div className={Style.mamaxt}>STAFF ID  #TM008 </div>
        </article>

        <div className={Style.arrowback} onClick={() => navigate("/staff")}>
          <div className={Style.arrow}>
            <IoIosArrowRoundBack />
          </div>
          <div className={Style.back2}>Back</div>
        </div>
      </section>

      <article className={Style.flexmain}>

        <section className={Style.leftflex}>
            <img src={adenikeround} alt="" />

            <article className={Style.aprodiv}>
                 <div className={Style.adext}>Adenike James</div>
                 <div className={Style.prodxt}>Product Manager</div>
                 <span className={Style.vecnum}>
                     <img src={vector} alt="" />
                     48
                 </span>
            </article>

            <article className={Style.numaildiv}>
            <span className={Style.numxt}>
                <img src={phone} alt="" />
                09127925663
            </span>

            <span className={Style.emailxt}>
                <img src={email} alt="" />
                nike01@gmail.com
            </span>
            </article>

        </section>

        <section className={Style.rightflex}>

            <article className={Style.rf1}>
            <div className={Style.recxt}>Recent History</div>

            {History.map((h) => (
            <section className={Style.mapout}>
                <article className={Style.mapin}>
                <img src={h.image} alt="" />

                    <div className={Style.mapmid}>
                        <div className={Style.niodiv}>
                            <div className={Style.name}>{h.name}</div>
                            <span className={Style.iospan}>
                            <img src={h.icon} alt=""/>
                            <div className={Style.orders}>{h.orders}</div>
                            </span>
                        </div>
                        
                        <div className={Style.fdqdiv}>
                            <div className={Style.food}>{h.food}</div>
                            <div className={Style.details }>{h.details}</div>
                            <div className={Style.quantity}>{h.quantity}</div>
                        </div>

                        <div className={Style.date}>{h.date}</div>
                    </div>

                </article>
                    <div className={Style.price}> &#8358; {h.price}</div>
            </section>

          ))}
            </article>

        
       

            <article className={Style.rf2}>

                    {isOpen
                ? 
               <section className={Style.cusdiv}>

                <article className={Style.topdiv}>
                   <div className={Style.cusxt}>Customer Status</div>
                   <div className={Style.activext}>Active</div>
                 </article>

                <article className={Style.downdiv}>
                <span className={Style.adespan}>
                    <img src={adenikemid} alt="" />
                    <div className={Style.adext2}>Adenike James</div>
                </span>
                <img onClick={toggle} src={toggleon2} alt="" />
                </article>

              </section>
              :
              <section className={Style.cusdiv}>

                <article className={Style.topdiv}>
                   <div className={Style.cusxt}>Customer Status</div>
                   <div className={Style.inactivext}>Inactive</div>
                 </article>

                <article className={Style.downdiv}>
                <span className={Style.adespan}>
                    <img src={adenikemid} alt="" />
                    <div className={Style.adext2}>Adenike James</div>
                </span>
                <img onClick={toggle} src={toggleoff2} alt="" />
                </article>

              </section>
                }

            </article>


            </section>

      </article>


    </main>
  )
}

export default Staffdetails