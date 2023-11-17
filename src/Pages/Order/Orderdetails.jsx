import React from 'react'
import Style from "./orderdetails.module.css"
import {IoIosArrowRoundBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import blackdot from "../../images/blackdot.png"
import orangedot from "../../images/orangedot.png"
import bluephone from "../../images/bluephone.png"
import adeleke from "../../images/adeleke.png"

const Orderdetails = () => {
    const navigate = useNavigate();

        const tableData = [
          ['White Rice', '400.00'],
          ['Plantain', '200.00'],
          ['Turkey', '1000.00'],
          ['Beef', '100.00'],
          ['Fanta', '200.00'],
          ['Total', '2,100.00'],
        ];

        // const tablePortion = [
        //     ['White Rice'],
        //     ['Plantain'],
        //     ['Turkey'],
        //     ['Beef'],
        //     ['Fanta'],
        //   ];
      


  return (
    <main className={Style.main}>
        <div>
            <span className={Style.orderxt}>Order / </span>
            <span className={Style.staffxt}>Staff Order Details</span>
        </div>

        <div className={Style.staffidxt}>STAFF ID  #TM025 </div>

        <section className={Style.bodyout}>

            <div className={Style.orderback}>
                <div className={Style.ordernum}>
                    <div className={Style.orderidxt}>Order ID</div>
                    <div className={Style.numxt}>#00456</div>
                </div>

                <div className={Style.arrowback}
                     onClick={() => navigate('/order')}>
                    <div className={Style.arrow}><IoIosArrowRoundBack/></div>
                    <div className={Style.back2}>Back</div>
                </div>
            </div>

            <section className={Style.flexgaan}>

                <article className={Style.flexleft}>
                <table className={Style.table}>
                         <thead>
                           <tr>
                             <th className={Style.item}>ITEM</th>
                             <th className={Style.price}>PRICE</th>
                           </tr>
                         </thead>
                         <tbody>
                           {tableData.map((row, index) => (
                             <tr key={index}>
                               <td className={Style.row0}>{row[0]}</td>
                               <td className={Style.row1}> &#8358; {row[1]}</td>
                             </tr>
                           ))}
                         </tbody>
                </table>
                </article>

                <article className={Style.flexright}>
                        <section className={Style.orderout}>
                            <div className={Style.ordersumm}>Order Summary
                                <img src={blackdot}  className={Style.blackdot} alt="" />
                            </div>
                            <div className={Style.oos}>
                                <div className={Style.orc}>
                                    <div className={Style.orcxt}>Order created</div>
                                    <div className={Style.ortxt}>7th July 2023</div>
                                </div>
                                <div className={Style.ort}>
                                    <div className={Style.orcxt}>Order time</div>
                                    <div className={Style.ortxt}> 10:20 am</div>
                                </div>
                                <div className={Style.subt}>
                                    <div className={Style.subtxt}>Sub total</div>
                                    <div className={Style.submtxt}> &#8358;2,100.00</div>
                                </div>
                            </div>

                        </section>

                            <section className={Style.totaldiv}>
                                <div className={Style.totalxt}>Total</div>
                                <div className={Style.totnum}>&#8358; 2,100.00</div>
                            </section>


                            <article className={Style.delidiv}>
                            <div className={Style.delivxt}>
                                Delivery status
                                <img src={blackdot}  className={Style.blackdot} alt="" />
                            </div>

                            <div className={Style.pendingxt}>
                                <img src={orangedot} alt="" />
                                PENDING
                            </div>

                            <div className={Style.staffdeets}>
                            Staff details
                            <img src={blackdot} className={Style.blackdot} alt="" />
                            </div>

                            <div className={Style.adelediv}>
                                <img src={adeleke} className={Style.adeleke} alt="" />
                                Adeleke Peters (TM30 staff)
                            </div>

                            <div className={Style.bluephone}>
                                <img src={bluephone} alt="" />
                                08034812890
                            </div>
                            </article>


                </article>

            </section>

        </section>


    </main>
  )
}

export default Orderdetails