import React from 'react'
import Sidebar  from './Sidebar'
import Header from './Header'
import Styles from "./layout.module.css"
import { Outlet } from 'react-router-dom'

 const Layout = () => {
  return (
    <div className={Styles.layout}>
        <Sidebar />
        <div className={Styles.main}>
            <Header />
            <div className={Styles.children}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout
