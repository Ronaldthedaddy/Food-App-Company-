import React from 'react'
import Style from './allcategories.module.css'
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";
import plainpasta from "../../images/plainpasta.png";
import jollofpasta from "../../images/jollofpasta.png";
import macaroni from "../../images/macaroni.png";


const Pasta = () => {
    const Categories = [
        {
            image: plainpasta,
            name:"Plain Pasta",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: jollofpasta,
            name:"Jollof Pasta",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: macaroni,
            name:"Macaroni",
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

export default Pasta