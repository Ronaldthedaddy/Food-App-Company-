import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "./dashboard.module.css";
import blackdot from "../../images/blackdot.png";
import staffst from "../../images/staffst.png";
import chartup from "../../images/chartup.png";
import chartdown from "../../images/chartdown.png";
import vendorst from "../../images/vendorst.png";
import paymentst from "../../images/paymentst.png";
import jude from "../../images/jude.png";
import mary from "../../images/mary.png";
import jonah from "../../images/jude.png";
import adenike from "../../images/adenike.png";
import sanusi from "../../images/sanusi.png";
import adeleke from "../../images/adeleke.png";
import sortimg from "../../images/sortimg.png";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Chart from "./Chart";
// import { useEffect } from 'react'

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [data, setData] = useState([]);


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const Order = [
    { name: "Staff ID" },
    { name: "Date" },
    { name: "Staff Name" },
    { name: "Food Ordered" },
    { name: "Amount" },
  ];

  const Content = [
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      image: adeleke,
      staffName: "Adeleke Peters",
      foodOrdered: "White Rice, plantain...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Sanusi Anthony",
      image: sanusi,
      foodOrdered: "Amala, turkey, fish...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adenike James",
      image: adenike,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adenike James",
      image: adenike,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adeleke Peters",
      image: sanusi,
      foodOrdered: "White Rice, plantain...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adeleke Peters",
      image: adeleke,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adenike James",
      image: adenike,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00",
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adeleke Peters",
      image: adeleke,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00", // &#8358;
    },
    {
      staffID: "#TM007",
      date: "29th July, 2023",
      staffName: "Adeleke Peters",
      image: adeleke,
      foodOrdered: "Jollof pasta, chicken...",
      amount: "2,100.00", // &#8358;
    },
  ];

  //   useEffect(()=>{handleDashboard},[])
  //    const [staff, setStaff]= useState();
//   useEffect(() => {
//     try {
//       const userDetailsString = localStorage.getItem('userDetails');
//       const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;
//       console.log(userDetails?.data);
//     } catch (error) {
//       console.error('Error in useEffect:', error);
//     }
//   }, []);
  

  useEffect(() => {
    try {
      let myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb29kYXBwQGdtYWlsLmNvbSIsImlhdCI6MTcwMDA1MDM1OSwiZXhwIjoxNzAwMTM2NzU5fQ.5NAFGvInBFAA1NBK-SEUBdgqIWBXVOHGedtwEmmZmGU"
      );
  
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch("http://89.38.135.41:7654/api/company/dashboard", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
            setData(result.data) 
            // console.log(result)
        })
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);


//   const authToken =
//     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb29kYXBwQGdtYWlsLmNvbSIsImlhdCI6MTY5OTk1ODI0MSwiZXhwIjoxNzAwMDQ0NjQxfQ.Qlc3zfHh9RE4O8KWKcyOIG5w-39y-3mB8gik4tjVD0s";
//   const handleDashboard = async (e) => {
//     try {
//       const response = await fetch(
//         "http://89.38.135.41:7654/api/company/dashboard",
//         {
//           headers: {
//             // 'Authorization': Bearer `${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       localStorage.setItem("Token", data.data.accessToken);

//       console.log(data);
//       if (data.status) {
//       } else {
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   handleDashboard();
//   console.log(handleDashboard);

//   fetch("", {});

  return (
    <main className={Styles.dashout}>
      <div className={Styles.overdiv}>
        <div className={Styles.overxt}>Overview</div>
      </div>
      <div className={Styles.bdr}></div>

      <section className={Styles.staticsdiv}>
        <div className={Styles.stadot}>
          <div className={Styles.statsxt}>Statistics</div>
          <div>
            {" "}
            <img src={blackdot} alt="" />
          </div>
        </div>
        <div>
          <input
            type="date"
            placeholder="Today"
            className={Styles.calendar}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </section>

      <main className={Styles.flexbod}>
        <article className={Styles.flex1}>
          <section className={Styles.flex1in}>
            <div className={Styles.picnum}>
              <div>
                {" "}
                <img src={staffst} alt="" />
              </div>

              <div className={Styles.stumxt}>
                <div className={Styles.svpxt}>Staff</div>
                <div className={Styles.numxt}>{data.numberOfStaff}</div>
              </div>
            </div>

            <div className={Styles.chartout}>
              <div className={Styles.chartage}>
                <div>
                  {" "}
                  <img src={chartup} alt="" />
                </div>
                <div className={Styles.tagext}>17.2%</div>
              </div>
              <div className={Styles.todayxt}>today</div>
            </div>
          </section>

          <section className={Styles.flex2in}>
            <div className={Styles.picnum}>
              <div>
                {" "}
                <img src={vendorst} alt="" />
              </div>

              <div className={Styles.stumxt}>
                <div className={Styles.svpxt}>Vendor</div>
                <div className={Styles.numxt}>{data.numberOfVendors}
</div>
              </div>
            </div>

            <div className={Styles.chartout}>
              <div className={Styles.chartage}>
                <div>
                  {" "}
                  <img src={chartdown} alt="" />
                </div>
                <div className={Styles.tagext}>4.7%</div>
              </div>
              <div className={Styles.todayxt}>today</div>
            </div>
          </section>

          <section className={Styles.flex3in}>
            <div className={Styles.picnum}>
              <div>
                {" "}
                <img src={paymentst} alt="" />
              </div>

              <div className={Styles.stumxt}>
                <div className={Styles.svpxt}>Payment</div>
       
                <div className={Styles.numxt}>&#8358; {data.totalAmountSpent}</div>
              </div>
            </div>

            <div className={Styles.chartout}>
              <div className={Styles.chartage}>
                <div>
                  {" "}
                  <img src={chartup} alt="" />
                </div>
                <div className={Styles.tagext}>24.2%</div>
              </div>
              <div className={Styles.todayxt}>today</div>
            </div>
          </section>
        </article>

        <article className={Styles.flex2}>
          <div></div>
          <Chart />
        </article>

        <article className={Styles.flex3}>
          <div className={Styles.recentxt}>RECENT STAFF</div>

          <section className={Styles.jmdiv}>
            <div className={Styles.jude}>
              <img src={jude} alt="" />
              <div className={Styles.jpdiv}>
                <div className={Styles.judext}>Jude Anthony</div>
                <div className={Styles.prodxt}>Product designer</div>
              </div>
            </div>

            <div className={Styles.jude}>
              <img src={mary} alt="" />
              <div className={Styles.jpdiv}>
                <div className={Styles.judext}>Mary Doe</div>
                <div className={Styles.prodxt}>Product manager</div>
              </div>
            </div>

            <div className={Styles.jude}>
              <img src={jonah} alt="" />
              <div className={Styles.jpdiv}>
                <div className={Styles.judext}>Jonah Keleb</div>
                <div className={Styles.prodxt}>Developer</div>
              </div>
            </div>

            <div></div>
            <div></div>
          </section>

          <Link to="/staff" className={Styles.sasdiv}>
            <div className={Styles.sasxt}>See All Staff</div>
          </Link>
        </article>
      </main>

      <article className={Styles.tablediv}>
        <div className={Styles.rhdiv}>
          <div className={Styles.rxt}>Recent Order</div>
          <div className={Styles.hxt}>Here is your recent order list</div>
        </div>

        <section className={Styles.tabledivin}>
          <table className={Styles.tablemain}>
            {Order.map((o) => {
              return (
                <th>
                  <td className={Styles.head}>
                    {o.name}
                    <img src={sortimg} className={Styles.sortimg} alt="" />
                  </td>
                </th>
              );
            })}

            {Content.map((c, i) => {
              return (
                <tbody>
                  <tr
                    style={{
                      background: i % 2 === 0 ? "#FFF" : "#FAFAFA;",
                      fontSize: "0.9375rem",
                      fontWeight: "500",
                    }}
                    className={Styles.tablerow}
                  >
                    <td className={Styles.staffid}>{c.staffID}</td>
                    <td className={Styles.date}>{c.date}</td>
                    <td className={Styles.staffname}>
                      <span className={Styles.staff}>
                        <img src={c.image} alt="" />
                        {c.staffName}
                      </span>
                    </td>
                    <td className={Styles.foodordered}>{c.foodOrdered}</td>
                    <td className={Styles.amount}>
                      {" "}
                      <span> &#8358; {c.amount}</span>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </section>

        <div className={Styles.viewdiv}>
          <Link to="/order" className={Styles.viewxt}>
            View full order
          </Link>
          <AiOutlineRight className={Styles.right} />
        </div>
      </article>
    </main>
  );
};

export default Dashboard;
