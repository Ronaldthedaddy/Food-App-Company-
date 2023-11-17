import React from 'react'
import Style from './allcategories.module.css'
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";
import amala from "../../images/amala.png";
import poundedyam from "../../images/poundedyam.png";
import semo from "../../images/semo.png";
import wheat from "../../images/wheat.png";
import eba from "../../images/eba.png";

const Swallows = () => {
    const Categories=[
        {
            image: amala,
            name:"Amala",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: poundedyam,
            name:"Pounded Yam",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: semo,
            name:"Semo",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: wheat,
            name:"Wheat",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: eba,
            name:"Eba",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
    ]
  return (
    <main className={Style.catmain}>
    <section className={Style.allcatout}>
      {Categories.map((c) => (
        <div className={Style.allcat}>
           <section className={Style.allcatin}>
              <div><img src={c.image} className={Style.imacon} alt="" /></div>
                 <article className={Style.cateright}>
                 <div className={Style.namecat}>{c.name}</div>

                 <div className={Style.iodout}>
                     <div className={Style.icoder}>
                         <img src={c.icon} alt="" />
                         <div>{c.orders}</div>
                     </div>
                     <div className={Style.total}>{c.total}</div>
                 </div>

                 <div className={Style.crout}>
                     <div className={Style.starate}>
                           <img src={c.star} alt="" />
                           <div className={Style.rating}>{c.rating}</div>
                     </div>
                      <div>{c.rate}</div>
                 </div>

                 </article>
           </section>
        </div>
      ))}
    </section>
 </main>
  )
}

export default Swallows