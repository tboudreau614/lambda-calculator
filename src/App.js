import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

const [display, displaySet] = useState ('0');
const [amount, setAmount] = useState(undefined);
const [operator, setOperator] = useState(undefined);

function numberButtonClick(itemData) {
  displaySet(val => val + itemData);
}

function operatorButtonClick(itemData) {
  if (!operator) {
    setAmount(() => Number(display));
    displaySet(() => '');
  }
  else {
    const leftVal = Number(display);
    const result = operator(amount, leftVal);
    setAmount(() => result);
    displaySet(() => result);
  }
  setOperator(() => itemData);
}

function specialButtonClick(itemData) {
  const amt = amount ? amount : Number(display);


  if (itemData === 'C') {
    setAmount(() => undefined);
    displaySet(() => '');
  }

  if (itemData === '%') {
    setAmount(() => amt / 100);
    displaySet(() => amt / 100);
  }

  if (itemData === '+/-') {
    setAmount(() => -amt);
    displaySet(() => -amt);
  }
}

  return (
    <div className="container">
      <Logo />
      <div className="App">
      <div className="app-cont">
          <Logo />
          <div className="cont-enter">
            <Display value={display} />
          </div>
          <div className="big-container">
            <div className="container-sp-number">
              <Specials value={specialButtonClick} />
              <Numbers numberClick={numberButtonClick} />
            </div>
            <div className="container-operators">
              <Operators operatorClick={operatorButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
