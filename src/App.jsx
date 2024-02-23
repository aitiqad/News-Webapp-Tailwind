import React, { useState } from "react";
import { Navbar } from "./assets/Components/Navbar";
import { NewsBoard } from "./assets/Components/NewsBoard";

function App() {
  const[category, setCategory]=useState("general")
  return (

    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}

export default App;
