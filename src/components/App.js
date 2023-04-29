import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appMode, setMode] = useState('light')
  const appClass = appMode === 'dark' ? "App dark" : "App light"

  function handleMode(){
    appClass === 'App dark' ? setMode('light') : setMode('dark')
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{appMode} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
