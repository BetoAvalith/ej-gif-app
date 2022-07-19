import React, { useState } from "react";

import { AddCategory, GifGrid } from "./components";


export const GifApp = () => {

  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleDeleteCategory = (category)=>{
    setCategories( categories.filter(ctg => ctg !== category) )
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <section className="category-container">
        <AddCategory addCategory={handleAddCategory} />
        <button onClick ={()=>setCategories([])} >Reset</button>
      </section>
      {/* Listado de Gif */}

      {
      categories.map((category) => (
        <section key={category} className="grid-categories"> 
          <button onClick={ () => handleDeleteCategory(category) } > X </button>
          <GifGrid key={category} category={category} />
        </section>
      ))
      }
    </>
  );
};
