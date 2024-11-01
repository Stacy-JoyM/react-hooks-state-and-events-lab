import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [isOn ,setIsOn] = useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function handleOn(){
    setIsOn((prevIsOn) => !prevIsOn)
  }

   const appClass = isOn ? "App light" : "App dark"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleOn} >{isOn ? "Light Mode" : "Dark Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
