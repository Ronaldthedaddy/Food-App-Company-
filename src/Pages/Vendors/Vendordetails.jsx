import React, { useState } from "react";
import Style from "./vendordetails.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import star from "../../images/star.png";
import menu from "../../images/menu.png";
import vector from "../../images/vector.png";
import bukkalng from "../../images/bukkalng.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import vendshop from "../../images/vendshop.png";
import reddot from "../../images/reddot.png";
import greendot from "../../images/greendot.png";
import roundbukka from "../../images/roundbukka.png";
import toggleon from "../../images/toggleon.png"
import toggleoff from "../../images/toggleoff.png"
import mapimg from "../../images/mapimg.png"
import Allcategories from "./Allcategories";
import Breakfast from "./Breakfast";
import Rice from "./Rice";
import Pasta from "./Pasta";
import Swallows from "./Swallows";
import Others from "./Others";

const Vendordetails = () => {

  const [ allcategories, setAllcategories] = useState(true);
  const [ Breakfast1, setBreakfast1] = useState(false);
  const [ Rice1, setRice1] = useState(false);
  const [ Pasta1, setPasta1] = useState(false);
  const [ Swallows1, setSwallows1] = useState(false);
  const [ Others1, setOthers1] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
      
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const names = [
    "Plain Beans", "Porridge Beans", "French Fries", "Porridge Yam", "Fried Rice", "Native Rice", "Jollof Rice", "Plain Pasta", "Jollof & Fried Rice", "Jollof Pasta", "Macaroni", "Amala", "Ofada Rice", "White Rice", "Boiled Yam & Egg", "Scrambled Egg", "Omelette", 
    "Hot Bread", "English Breakfast", "Moin - Moin"
  ];

  const navigate = useNavigate();

  return (
    <main className={Style.vendormain}>
      <section className={Style.vendorback}>
        <article className={Style.vendaddxt}>
          <div className={Style.vendxt}>
            Vendors /<span className={Style.upaddxt}>Add New Vendor</span>
          </div>
          <div className={Style.mamaxt}>Mama J Bukka</div>
        </article>

        <div className={Style.arrowback} onClick={() => navigate("/vendors")}>
          <div className={Style.arrow}>
            <IoIosArrowRoundBack />
          </div>
          <div className={Style.back2}>Back</div>
        </div>
      </section>

      <article className={Style.vendeetsflex}>
        <section className={Style.vendflex}>
          <img src={bukkalng} alt="" />

          <article className={Style.mastydiv}>
            <div className={Style.mjbxt}>Mama J Bukka</div>
            <div className={Style.tastyxt}>Tasty</div>
            <div className={Style.fourxt}>
              <img src={star} alt="" />
              4.9
            </div>
            <div className={Style.vectorxt}>
              <img src={vector} alt="" />
              1,296x
            </div>
          </article>

          <div className={Style.foodmenu}>
            <img src={menu} alt="" />
            Food Menu
          </div>


          <section className={Style.menuout}>
          {names.map((item) => {
            return <div className={Style.menulist}>{item}</div>;
          })}
          </section>

            <div className={Style.costxt}>
              Cost - <span className={Style.platext}> &#8358;1,250 (min Per Plate)</span>
            </div>


            <article className={Style.offerdiv}>
                <div className={Style.offerxt}>Offers</div>
                    <ul>
                      <li>10% OFF on Moin - Moin </li>
                      <li>Free discount welcome of 30% OFF first order</li>
                      <li>Free welcome drinks</li>
                    </ul>
            </article>

        </section>


        <section className={Style.deetsflex}>

          <article className={Style.deetsin}>
              <div><img src={roundbukka} alt="" /></div>
              <div className={Style.bukkaxt}>Mama J Bukka</div>

                 <section>
                 {isOpen
                ? 
               <article className={Style.ventive}>
                <div className={Style.vendshop}>
                  <div className={Style.vend2xt}>Vendor</div>
                  <img src={vendshop} alt="" />
                </div>
                <div className={Style.activext}>
                  <img src={greendot} alt="" />
                  Active
                </div>
              </article>
              :
              <article className={Style.ventive}>
              <div className={Style.vendshop}>
                <div className={Style.vend2xt}>Vendor</div>
                <img src={vendshop} alt="" />
              </div>
              <div className={Style.inactivext}>
                <img src={reddot} alt="" />
                Inactive
              </div>
            </article>
          }
            </section>
          </article>


          <div className={Style.phonediv}>
            <img src={phone} alt="" />
            09127925663
          </div>

          <div className={Style.emaildiv}>
            <img src={email} alt="" />
            MamaJthebukka@gmail.com
          </div>

          <section className={Style.routdiv}>
            <div className={Style.rindiv}>
              <div className={Style.raxt}>Rating:</div>
              <div className={Style.fxt}>
                <img src={star} alt="" />
                4.9
              </div>
            </div>

            <div className={Style.vectordiv}>
              <img src={vector} alt="" />
              1,296x
            </div>
          </section>

          <article className={Style.propdiv}>
            <div className={Style.propxt}>Property Information</div>
            <img src={mapimg} alt="" />
          </article>


          <div>
            {isOpen
            ? 
            <section className={Style.vactiveout}>
               <article className={Style.vactivein}>
                   <div className={Style.vstatxt}>Vendor Status</div>
                 <div className={Style.statxt}>
                   <img src={greendot} alt="" />
                   Active
                 </div>
               </article>
              <div onClick={toggle} ><img src={toggleon} className={Style.tog}alt="" /></div>
            </section> 
            :
            <section className={Style.vactiveout}>
            <article className={Style.vactivein}>
                <div className={Style.vstatxt}>Vendor Status</div>
              <div className={Style.statxt2}>
                <img src={reddot} alt="" />
                Inactive
              </div>
            </article>
           <div onClick={toggle} ><img src={toggleoff} className={Style.tog} alt="" /></div>
         </section> 
          }
          </div>

        </section>

      </article>

      <section className={Style.midbody}>

        <article className={Style.vencat}>
        <div className={Style.bukkasumxt}>
          <div className={Style.bukkamenu}> Mama J Bukka Menu</div>
          <div className={Style.isumxt}>Here is your item summary with details update</div>
        </div>

            <section className={Style.alist}>
               
            <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(true)
              setBreakfast1(false);
              setPasta1(false);
              setOthers1(false);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:allcategories?"3px solid #36AAD9" :"",
              color:allcategories?"#36aad9":"",
            }}
            >All Categories</div>


          <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(false)
              setBreakfast1(true);
              setPasta1(false);
              setOthers1(false);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Breakfast1?"3px solid #36AAD9" :"",
              color:Breakfast1?"#36aad9":"",
            }}
            >Breakfast</div>

            
          <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(false)
              setBreakfast1(false);
              setPasta1(false);
              setOthers1(false);
              setSwallows1(false);
              setRice1(true);
            })}
            style={{
              borderBottom:Rice1?"3px solid #36AAD9" :"",
              color:Rice1?"#36aad9":"",
            }}
            >Rice</div>

            
          <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(false)
              setBreakfast1(false);
              setPasta1(true);
              setOthers1(false);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Pasta1?"3px solid #36AAD9" :"",
              color:Pasta1?"#36aad9":"",
            }}
            >Pasta</div>

          <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(false)
              setBreakfast1(false);
              setPasta1(false);
              setOthers1(false);
              setSwallows1(true);
              setRice1(false);
            })}
            style={{
              borderBottom:Swallows1?"3px solid #36AAD9" :"",
              color:Swallows1?"#36aad9":"",
            }}
            >Swallows</div>
            

          <div 
            className={Style.catlist}
            onClick={(()=>{
              setAllcategories(false)
              setBreakfast1(false);
              setPasta1(false);
              setOthers1(true);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Others1?"3px solid #36AAD9" :"",
              color:Others1?"#36aad9":"",
            }}
            >Others</div>

            </section>

        </article>

            {allcategories && <Allcategories/>}
            {Breakfast1 && <Breakfast/>}
            {Rice1 && <Rice/>}
            {Pasta1 && <Pasta/>}
            {Swallows1 && <Swallows/>}
            {Others1 && <Others/>}

      </section>

    </main>
  );
};

export default Vendordetails;
