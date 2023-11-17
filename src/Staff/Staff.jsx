import React, { useState } from 'react'
import Styles from './staff.module.css'
import {FcSearch} from "react-icons/fc"
import {BsPlus} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import adeleke from "../images/adeleke.png"
import sortimg from '../images/sortimg.png' 
import {SlOptionsVertical} from "react-icons/sl"
import { useEffect } from 'react'


 
const Staffhead=[
  {name: "Staff ID"},
  {name: "Staff Name"},
  {name: "Date Joined"},
  {name: "Total Spending"},
  {name: "Last Order"},
]

const Content=[
  {
      staffID:"#TM046",
      image: adeleke,
      staffName:"Adenike James",
      dateJoined: "13th July 2023, 09:20 am",
      totalSpending: "25,100.00",
      lastOrder: "3,100.00",
  },
  {
    staffID:"#TM046",
    image: adeleke,
    staffName:"Adenike James",
    dateJoined: "13th July 2023, 09:20 am",
    totalSpending: "25,100.00",
    lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},
{
  staffID:"#TM046",
  image: adeleke,
  staffName:"Adenike James",
  dateJoined: "13th July 2023, 09:20 am",
  totalSpending: "25,100.00",
  lastOrder: "3,100.00",
},


    ]

const Staff = () => {
  const [data, setData] = useState([]);

  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0)


  const navigate = useNavigate();

const [isActive, setIsActive] = useState(true); // Default status is active

const handleActiveClick = () => {
  setIsActive(true);
};

const handleInactiveClick = () => {
  setIsActive(false);
};

const handleMouseEnter = (item) => {
  setIsHovered(true);
  setIndex(item)
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

const handleClick = () => {
  // Navigate to a new page (for example, '/details')
  navigate('/staffdetails');
};

// useEffect(() => {
//   let myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb29kYXBwQGdtYWlsLmNvbSIsImlhdCI6MTcwMDA1MDM1OSwiZXhwIjoxNzAwMTM2NzU5fQ.5NAFGvInBFAA1NBK-SEUBdgqIWBXVOHGedtwEmmZmGU"
//   );

//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch("http://89.38.135.41:7654/api/company/all-staff", requestOptions)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((result) => {
//       setData(result.data);
//       console.log(result);
//     })

//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       if (
//         error instanceof TypeError &&
//         error.message.includes("Failed to fetch")
//       ) {
//         console.error("Network error. Check your internet connection.");
//       }
//     });
// }, [])

  return (
        <main className={Styles.mainstaff}>
          
          <section className={Styles.rhlhdiv}>

        <div className={Styles.inactdiv}>
        <section className={Styles.aidiv}>

        <div
        onClick={handleActiveClick}
        className={`${Styles.activext} 
        ${isActive ? Styles.activeButton : Styles.inactiveButton}`}
        >
        Active
        </div>
        <div
        onClick={handleInactiveClick}
        className={`${Styles.inactivext} 
        ${isActive ? Styles.inactiveButton : Styles.activeButton}`}
        >
        Inactive
        </div>
        </section>
        </div>


        <article className={Styles.lhdiv}>
          <section className={Styles.iconputdiv}>
            <div><FcSearch/></div>
            <div className={Styles.inpdiv}>
                  <input className={Styles.inp} type='input' 
                  placeholder='Search by Staff ID, Staff name, Status, e.t.c.'/> 
            </div>
          </section>

         <section 
          onClick={() => navigate('/newstaff')}
         className={Styles.nvdiv}>
            <BsPlus className={Styles.add}/>
            <div>New Staff</div>
         </section>
        </article>

        </section>  


        <article className={Styles.tablediv}>
{/* 
    <div className={Styles.rhdiv}>
        <div className={Styles.rxt}>Recent Order</div>
        <div className={Styles.hxt}>Here is your recent order list</div>
    </div> */}

    <section className={Styles.tabledivin}>
        <table className={Styles.tablemain}>
        {Staffhead.map((o)=>{
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
                           background: i % 2 === 0 ? "#FFF" : "#FAFAFA;",
                       fontSize: "0.9375rem",
                       fontWeight: "500",
                   }}
                   className={Styles.tablerow}>
                   <td className={Styles.staffid}>
                    {/* {c.userId} */}
                    {c.staffID}
                    </td>
                   <td className={Styles.staffname}>
                       <span className={Styles.staff}>
                           <img src=
                          // {c.profilePictureUrl}
                           {c.image}
                            alt="" />
                           {/* {c.firstName} */}
                           {/* {c.lastName} */}
                           {c.staffName}
                       </span>
                   </td>
                   <td className={Styles.date}>
                    {/* {c.createdAt} */}
                    {c.dateJoined}
                    </td>
                   <td className={Styles.total}>
                    {c.totalSpending}
                    {/* {c.totalSpending} */}
                    </td>
                   <td className={Styles.last}> <span> &#8358;
                    {c.lastOrder}
                     {/* {c.lastOrder} */}
                     </span></td>


                  <div className={`hover-click-div ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  
                  {isHovered && index===i 
                  ? <div className={Styles.viewdiv}> 
                        <div className={Styles.viewxt}>View</div> 
                   </div> 
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

export default Staff