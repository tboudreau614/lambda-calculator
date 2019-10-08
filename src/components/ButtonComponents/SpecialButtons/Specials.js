import React, { useState } from "react";
import {specials} from '../../../data.js';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialColl] = useState(specials);
  const mappedSpecials = specialColl.map(elements => elements);

  return (
    <div className="special-btns-cont">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialColl.map(info => (
        <SpecialButton key={info} mappedSpecials={info} specialButtonClick={props.value} />
      ))}
    </div>
  );
};

export default Specials;