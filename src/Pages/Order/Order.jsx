import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "./order.module.css"
import sortimg from "../../images/sortimg.png"
import greendot from "../../images/greendot.png"
import orangedot from "../../images/orangedot.png"
import {FcSearch} from "react-icons/fc"
import ItemComponent from './Colourcomp'
import {SlOptionsVertical} from "react-icons/sl"
import './itemcomponent.css'; // Add your CSS styles here


const Order = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0)
  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setIndex(item)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    // Navigate to a new page (for example, '/details')
    navigate('/orderdetails');
  };


 
  const options = [{value:'this-year', label:'This year'},
   {value:'this-month', label:'This month'}, 
   {value:'this-week',label:'This week'}]
 

  const Order=[
    {name: "Order ID"},
    {name: "Date"},
    {name: "Amount"},
    {name: "Payment Status"},
    {name: "Delivery Status"}
 ]

  const Content=[
    {
        orderID:"#00456",
        date: "13th July 2023, 09:20 am",
        amount: "2,100.00",
        paymentStatus:"SUCCESS",
        deliveryStatus: "PENDING",
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
  },
  {
    orderID:"#00456",
    date: "13th July 2023, 09:20 am",
    amount: "2,100.00",
    paymentStatus:"SUCCESS",
    deliveryStatus: "PENDING" 
  },
  {
    orderID:"#00456",
    date: "13th July 2023, 09:20 am",
    amount: "2,100.00",
    paymentStatus:"SUCCESS",
        deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },
    {
      orderID:"#00456",
      date: "13th July 2023, 09:20 am",
      amount: "2,100.00",
      paymentStatus:"SUCCESS",
      deliveryStatus: "PENDING" 
    },

      ]
    
      return (

          <main className={Styles.ordermain}> 

    <article className={Styles.tablediv}>

       <section className={Styles.rhlhdiv}>

        <article className={Styles.rhdiv}>
           <div className={Styles.rxt}>Recent Order</div>
           <div className={Styles.hxt}>
            Here is your recent order list
            </div>
        </article>

        <article className={Styles.lhdiv}>
          <section className={Styles.iconputdiv}>
            <div><FcSearch/></div>
            <div className={Styles.inpdiv}>
                  <input className={Styles.inp} type='input' 
                  placeholder='Search by Vendor name, Status, e.t.c.'/> 
            </div>
          </section>

          <section className={Styles.ymwxt}>

        <ItemComponent options={options} filterField='order-filter' />

          </section>
        </article>

       </section>



    <section className={Styles.tabledivin}>
        <table className={Styles.tablemain}>
    {Order.map((o)=>{
        return(
         <th>
            <td className={Styles.head}>
                {o.name}
                <img src={sortimg} className={Styles.sortimg} alt="" />
            </td>
         </th>
        )
    })}

    {Content.map((c, i)=>{
        return(
          <tbody>
                <tr
                   style={{
                       background: i % 2 === 0 ? "#fff" : "#fafafa",
                       fontSize: "0.9375rem",
                       fontWeight: "500",
                   }}
                   className={Styles.tablerow}
                   
                   >
                   <td className={Styles.orderid}>{c.orderID}</td>
                   <td className={Styles.date}>{c.date}</td>
                   <td className={Styles.amount}> <span> &#8358; {c.amount}</span></td>

                   <td className={Styles.paymentstatus}>
                      <span className={Styles.payment}>
                          <img src={greendot} alt="" />
                          {c.paymentStatus}
                      </span>
                  </td>


                  <td className={Styles.deliverystatus}>
                      <span className={Styles.delivery}>
                          <img src={orangedot} alt="" />
                          {c.deliveryStatus}
                      </span>
                  </td>
                <div className={`hover-click-div ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  
                  {isHovered && index===i ? <div className={Styles.viewdiv}> 
                   <div className={Styles.viewxt}>View</div> </div> 
                  : <SlOptionsVertical className={Styles.options}/>}
               </div>

                </tr>

            </tbody>
            
        )
    })}


    </table>

</section>


</article>



      </main>

  )
}

export default Order