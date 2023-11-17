import React, { useEffect } from "react";
import Styles from "./vendors.module.css";
import sortimg from "../../images/sortimg.png";
import orangedot from "../../images/orangedot.png";
import greendot from "../../images/greendot.png";
import sgidi from "../../images/sgidi.png";
import skobe from "../../images/skobe.png";
import schoice from "../../images/schoice.png";
import stko from "../../images/stko.png";
import smamaj from "../../images/smamaj.png";
import { FcSearch } from "react-icons/fc";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { BsArrowUpShort } from "react-icons/bs";

const Vendors = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setIndex(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Navigate to a new page (for example, '/details')
    navigate("/vendordetails");
  };

  const Vendors = [
    { name: "Vendor" },
    { name: "Rating by Order" },
    { name: "Last assessed" },
    { name: "Status" },
  ];

  // const Content = [
  //   {
  //     image: smamaj,
  //     vendor: "Mama J Bukka",
  //     value: 80,
  //     customers: 298,
  //     ratingByOrder: "7%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },

  //   {
  //     image: schoice,
  //     vendor: "Choice Meal",
  //     value: 20,
  //     customers: 183,
  //     ratingByOrder: "4%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: skobe,
  //     vendor: "Kobe Delicious",
  //     value: 50,
  //     customers: 241,
  //     ratingByOrder: "15%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: sgidi,
  //     vendor: "Gidi Grillz",
  //     value: 82,
  //     customers: 302,
  //     ratingByOrder: "8%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: schoice,
  //     vendor: "Choice Meal",
  //     value: 40,
  //     customers: 328,
  //     ratingByOrder: "7%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: stko,
  //     vendor: "TKO",
  //     value: 10,
  //     customers: 218,
  //     ratingByOrder: "9%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: skobe,
  //     vendor: "Kobe Delicious",
  //     value: 27,
  //     customers: 328,
  //     ratingByOrder: "7%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: schoice,
  //     vendor: "Choice Meal",
  //     value: 69,
  //     customers: 198,
  //     ratingByOrder: "2%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: stko,
  //     vendor: "TKO",
  //     value: 30,
  //     customers: 152,
  //     ratingByOrder: "7%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  //   {
  //     image: stko,
  //     vendor: "TKO",
  //     value: 50,
  //     customers: 192,
  //     ratingByOrder: "7%",
  //     lastAssessed: "13th July, 2023",
  //     status: "Active",
  //   },
  // ];

  const [isActive, setIsActive] = useState(true); // Default status is active

  const handleActiveClick = () => {
    setIsActive(true);
  };

  const handleInactiveClick = () => {
    setIsActive(false);
  };

useEffect(() => {
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

  fetch("http://89.38.135.41:7654/api/company/all-vendors", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      setData(result.data);
      // console.log(result);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        console.error("Network error. Check your internet connection.");
      }
    });
}, [])

  return (
    <main className={Styles.vendormain}>
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
            <div>
              <FcSearch />
            </div>
            <div className={Styles.inpdiv}>
              <input
                className={Styles.inp}
                type="input"
                placeholder="Search by Vendor name, Status, e.t.c."
              />
            </div>
          </section>

          <section
            onClick={() => navigate("/newvendor")}
            className={Styles.nvdiv}
          >
            <BsPlus className={Styles.add} />
            <div>New Vendor</div>
          </section>
        </article>
      </section>

      <section className={Styles.tabledivin}>
        <table className={Styles.tablemain}>
          {Vendors.map((o) => {
            return (
              <th>
                <td className={Styles.head}>
                  {o.name}
                  <img src={sortimg} className={Styles.sortimg} alt="" />
                </td>
              </th>
            );
          })}

          {data.map((c, i) => {
            // console.log(c);
            return (
              <tbody>
                <tr
                  style={{
                    background: i % 2 === 0 ? "#fff" : "#fafafa",
                    fontSize: "0.9375rem",
                    fontWeight: "500",
                  }}
                  className={Styles.tablerow}
                >
                  <td className={Styles.vendor}>
                    <span className={Styles.vendorin}>
                      <img src={c.image} alt="" />
                      {/* {c.vendor} */}
                      {c.businessName}
                    </span>
                  </td>

                  <td className={Styles.vcr}>
                    <span className={Styles.value}>
                      <progress
                        // className="progs"
                        value={c.averageRating || '70'}
                        max={100}
                      ></progress>
                      <span>{c.averageRating || '70%' }</span>
                    </span>
                    <span className={Styles.customers}>
                      {c.totalRatings}
                      {/* {c.customers}  */}
                    </span>
                    <span className={Styles.rating}>
                      <BsArrowUpShort />
                      {c.averageRating}
                      {/* {c.ratingByOrder} */}
                    </span>
                  </td>

                  <td className={Styles.last}>
                    {c.lastAccessed ? c.lastAccessed.slice(0,10) : "__"}
                    {/* {c.lastAssessed} */}
                  </td>

                  <td className={Styles.statusdiv}>
                    <div
                      className={`${Styles.status}
                       ${
                         isActive ? Styles.activeStatus : Styles.inactiveStatus
                       }`}
                    >
                      {isActive ? (
                        <div className={Styles.status}>
                          <span className={Styles.spanstatus}>
                            <img src={greendot} alt="" />
                            <div className={Styles.activext2}>
                              {/* {data.active} */}
                              Active
                            </div>
                          </span>
                        </div>
                      ) : (
                        <div className={Styles.status}>
                          <span className={Styles.spanstatus}>
                            <img src={orangedot} alt="" />
                            <div className={Styles.inactivext2}>Inactive</div>
                          </span>
                        </div>
                      )}

                      {/* {c.status} */}
                    </div>
                  </td>

                  <div
                    className={`hover-click-div ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {isHovered && index === i ? (
                      <div className={Styles.viewdiv}>
                        <div className={Styles.viewxt}>View</div>
                      </div>
                    ) : (
                      <SlOptionsVertical className={Styles.options} />
                    )}
                  </div>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>
    </main>
  );
};

export default Vendors;
