import React from 'react'
import Style from './allcategories.module.css'
import boiledyam from "../../images/boiledyam.png";
import scrambledeggs from "../../images/scrambledeggs.png";
import omelette from "../../images/omelette.png";
import hotbread from "../../images/hotbread.png";
import englishbreakfast from "../../images/englishbreakfast.png";
import whiterice from "../../images/whiterice.png";
// import friedrice from "../../images/friedrice.png";
// import jollofried from "../../images/jollofried.png";
import nativerice from "../../images/nativerice.png";
import jollofrice from "../../images/jollofrice.png";
import ofadarice from "../../images/ofadarice.png";
import plainpasta from "../../images/plainpasta.png";
import jollofpasta from "../../images/jollofpasta.png";
import macaroni from "../../images/macaroni.png";
import amala from "../../images/amala.png";
import poundedyam from "../../images/poundedyam.png";
import semo from "../../images/semo.png";
import wheat from "../../images/wheat.png";
import eba from "../../images/eba.png";
import plainbeans from "../../images/plainbeans.png";
import porridgebeans from "../../images/porridgebeans.png";
import porridgeyam from "../../images/porridgeyam.png";
import moinmoin from "../../images/moinmoin.png";
import frenchfries from "../../images/frenchfries.png";
import vector from "../../images/vector.png";
import starr from "../../images/starr.png";
import { useState } from 'react';
import {AiOutlineLeft} from "react-icons/ai"
import {AiOutlineRight} from "react-icons/ai"



const Allcategories = () => {
    const itemsPerPage = 6; // Number of items to display per page

      const [currentPage, setCurrentPage] = useState(1);

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
 const totalPages = Math.ceil(Categories.length / itemsPerPage);
 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;
 const currentItems = Categories.slice(startIndex, endIndex);

 const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className={Style.catmain}>
       
       <section className={Style.allcatout}>
         {currentItems.map((c) => (
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


       <article className={Style.pagination}>

        <button disabled={currentPage === 1}  
         style={{background:currentPage===1?'#A3A3A3': ""}}
        className={Style.aicon}onClick={handlePreviousPage}>
          <AiOutlineLeft/>
        </button>

            <div className={Style.pageout}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button key={pageNumber} 
              style={{
                    background:currentPage===pageNumber?'#36AAD9': "",
                    borderRadius:currentPage===pageNumber?'1.75588rem':"",
                    color:currentPage===pageNumber?'#FFF': ""
            }}
            className={Style.pages} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
            </div>


        <butwton disabled={currentPage === totalPages} 
             style={{background:currentPage===totalPages?'#A3A3A3': ""}}
         className={Style.aicon} onClick={handleNextPage}>
          <AiOutlineRight/>
        </butwton>

      </article>

    </main>
  )
}

export default Allcategories