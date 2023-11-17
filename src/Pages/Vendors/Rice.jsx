import React from 'react'
import Style from './allcategories.module.css'
import whiterice from "../../images/whiterice.png";
// import friedrice from "../../images/friedrice.png";
import nativerice from "../../images/nativerice.png";
import jollofrice from "../../images/jollofrice.png";
import ofadarice from "../../images/ofadarice.png";
// import jollofried from "../../images/jollofried.png";
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";

const Rice = () => {

    const Categories=[
        {
            image: whiterice,
            name:"White Rice",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: jollofrice,
            name:"Fried Rice",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: nativerice,
            name:"Native Rice",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: jollofrice,
            name:"Jollof Rice",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: ofadarice,
            name:"Ofada Rice",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: jollofrice,
            name:"Jollof & Fried Rice",
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

export default Rice