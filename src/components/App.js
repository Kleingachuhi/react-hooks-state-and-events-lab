import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
const [appClass, setAppClass] = useState("App light")
  function handleClick(){ 
setAppClass( prevClass => 
  prevClass === "App light" ? "App dark" : "App light"
)
  }
  return (
    <div 
    className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
