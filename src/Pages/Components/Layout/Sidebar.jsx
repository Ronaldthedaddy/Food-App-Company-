import React from 'react'
import Styles from "./sidebar.module.css"
import tmlogo from "../../../images/tmlogo.png"
import dashboard from "../../../images/dashboard.png"
import order from "../../../images/order.png"
import vendors from "../../../images/vendors.png"
import staff2 from "../../../images/staff2.png"
import settings from "../../../images/settings.png"
import logout from "../../../images/logout.png"
import { useNavigate } from 'react-router-dom'
// import DashboardSvg from '../../Iconsvg/DashboardSvg'


const Sidebar = () => {
  
  const navigate = useNavigate()
  const locate = window.location.pathname;
  
  const sidebarObject = [
    {
      name: "Dashboard",
      icon: dashboard,
      pathname: "/dashboard",
      id: 0
    },
    {
      name: "Order",
      icon: order,
      pathname: "/order"
    },
    {
      name: "Vendors",
      icon: vendors,
      pathname: "/vendors"
    },
    {
      name: "Staff",
      icon: staff2,
      pathname: "/staff"
    },
    {
      name: "Settings",
      icon: settings,
      pathname: "/settings"
    },
    {
      name: "Logout",
      icon: logout,
      pathname: "/"
    },
  ]


  // console.log(locate === '/dashboard')

  return (

    <main className={Styles.sidebar}>
        <div className={Styles.tmlogo}><img src={tmlogo} className={Styles.tmlogo2}alt="" /></div>

        <div className={Styles.sidenav}>
      {sidebarObject.map(({ name, icon, pathname }, i) => (
        <div
          key={i}
          className={`${Styles.side} ${locate === pathname && Styles.active}`}
          onClick={() => navigate(pathname)}
        >
          {/* {icon} */}
          <img src={icon} alt="" />
          <span>{name}</span>
        </div>
      ))}
    </div>

    </main>

  )
}

export default Sidebar