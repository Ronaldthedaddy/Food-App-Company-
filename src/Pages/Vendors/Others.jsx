import React from 'react'
import Style from './allcategories.module.css'
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";
import plainbeans from "../../images/plainbeans.png";
import porridgebeans from "../../images/porridgebeans.png";
import porridgeyam from "../../images/porridgeyam.png";
import moinmoin from "../../images/moinmoin.png";
import frenchfries from "../../images/frenchfries.png";


const Others = () => {
    const Categories=[
        {
            image: plainbeans,
            name:"Plain Beans",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: porridgebeans,
            name:"Porridge Beans",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: porridgeyam,
            name:"Porridge Yam",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: moinmoin,
            name:"Moin-Moin",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: frenchfries,
            name:"French Fries",
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

export default Others