"use client";
import { useState } from "react";
import { updateList } from "../helpFuncs";
function Range(props) {
  const [value, setvalue] = useState(props.valueInit);
  const handleChange = function(e){
    setvalue(parseInt(e.target.value))
    updateList()
    
  }
  return (
    <form>
      <label htmlFor={props.id}>
        {props.id}: {value.toLocaleString()}{" "}
      </label>
      <input
        type="range"
        id={props.id}
        name={props.id}
        min={props.min}
        max={props.max}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default Range;
