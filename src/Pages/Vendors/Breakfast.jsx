import React from 'react'
import Style from './allcategories.module.css'
import boiledyam from "../../images/boiledyam.png";
import scrambledeggs from "../../images/scrambledeggs.png";
import omelette from "../../images/omelette.png";
import hotbread from "../../images/hotbread.png";
import englishbreakfast from "../../images/englishbreakfast.png";
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";

const Breakfast = () => {
    const Categories=[
        {
            image: boiledyam,
            name:"Boiled Yam & Egg",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: omelette,
            name:"Omelette",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: scrambledeggs,
            name:"Scrambled Egg",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: hotbread,
            name:"Hot Bread",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
            rating: "4.3",
            rate: "Rating by order"
        },
        {
            image: englishbreakfast,
            name:"English Breakfast",
            icon: vector,
            orders: "496x",
            total: "Total Sales",
            star: starr ,
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

export default Breakfast