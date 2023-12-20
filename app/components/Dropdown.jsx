"use client"

import { useRouter } from "next/navigation";

//?type_eq=
const Dropdown = ({ options }) => {
  let router = useRouter()
  const  handleDropdownChange = async e => {
    
    router.push(`/${e.target.value}`)
    console.log(router)
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" onChange={handleDropdownChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
