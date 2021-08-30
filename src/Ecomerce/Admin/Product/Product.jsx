import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { FetchApi } from '../../../UsefullFile/FetchApi';

export default function Product(props) {

   // const value = useContext(context);
   const [categories, setcategories] = useState([]);
   const [subcategories, subCategories] = useState([]);
   const [nevigate, setnevigate] = useState({
      level_1: 'Categories',
      level_2: null,
      level_3: null,
      level_4: ''
   })

console.log(FetchApi);
   useEffect(() => {

      const url = "http://127.0.0.1:8000/api/getcategories";
      FetchApi(url).then((data) => {
         if (data.status === 'success') {
            setcategories(data.data);
         }
         else {
            setcategories([]);
         }
      }).catch(err => console.log("error_01 :", err));
     
   }, [])

   function click(id) {
      const url = `http://127.0.0.1:8000/api/electronics/` + id;
      FetchApi(url).then((data) => {
         if (data.status === 'success') {
            subCategories(data.data);
         }
         else {
            subCategories([]);
         }
      }).catch(err => console.log("error_02 :", err));
      categories.map((elem) => {
         if (id === elem.id) {
            // console.log(elem.categories);
            setnevigate({
               ...nevigate,
               level_2: elem.categories,
            });
         }
      });
      console.log(nevigate, id);
   }
   function level_2(id){
      setnevigate({
         ...nevigate,
         level_3:'mobile',
      });
      console.log('this level_2 func',nevigate.level_3,typeof(nevigate.level_3),id)
   }
   function mouseOver(e) {
      e.target.style.background = '#9FCDFF';
      // e.target.style.transition = "0.3s ease-out"
   }
   function mouseLeave(e) {
      e.target.style.background = '#FDFDFE';
      // e.target.style.transition = "0.3s ease-in"
   }

   // let name='categ';

   return (
      <>
         <div className="container-fluid card p-0 rounded-0">
            <div className=" d-flex" style={{ height: "40px", backgroundImage: "linear-gradient(to right, #007BFF , orange)" }}>
               <div className=" col-6 d-flex align-items-center justify-content-center ">Manualy add</div>
               <div className=" col-6 d-flex align-items-center justify-content-center">add By search</div>
            </div>

            <nav aria-label="breadcrumb" className="">
               <ol className="breadcrumb my-0 rounded-0">

                  <li className="breadcrumb-item"><a href="#">{nevigate.level_1}</a></li>
                  <li className="breadcrumb-item"><a href="#">{nevigate.level_2}</a></li>
                  <li className="breadcrumb-item"><a href="#">{nevigate.level_3}</a></li>
                  {/* {(function () {

                     if (typeof (nevigate.level_2) === 'string') {
                        return (<li className="breadcrumb-item"><a href="#">{nevigate.level_2}</a></li>);
                     }
                     if (typeof (nevigate.level_3) === 'string') {
                        return (<li className="breadcrumb-item"><a href="#">{nevigate.level_3}</a></li>);
                     }
                  }).call(this)
                  } */}




               </ol>
            </nav>
            <div className=" d-flex my-1" style={{ overflowX: "auto", height: "60vh" }}>
               <div className="mx-1" style={{ minWidth: "320px", overflowY: "auto" }}>
                  <ul className="list-group rounded-0">
                     {categories.map((elem, index) => {
                        return (
                           <li className="list-group-item p-2" style={{}} key={index} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={() => click(elem.id)}>{elem.categories}</li>
                        );

                     })}
                  </ul>
               </div>

               <div className="mx-1" style={{ minWidth: "320px", overflowY: "auto" }}>
                  <div className="list-group rounded-0">
                     {subcategories.map((elem, index) => {
                        return (
                           <Link to={{pathname:'/addproduct',search:elem.sub_categories_name,state:elem.sub_categories_name,hash:"e24325",key: "2ekd6o"}} style={{ textDecoration: 'none' }} className="list-group-item list-group-item-action p-2" key={index} onClick={()=>level_2(elem.id)} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>{elem.sub_categories_name}</Link>
                        );

                     })}
                  </div>
               </div>
            </div>
         </div>


      </>
   );
}