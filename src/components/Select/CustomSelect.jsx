import React from "react";
import Select from "react-select";

const options = [
  { label: "Google", value: "Google" },
  { label: "Facebook", value: "Facebook" },
  { label: "Instagram", value: "Instagram" },
  { label: "Google Search", value: "Google Search" },
  { label: "Twitter", value: "Twitter" },
  { label: "Local Newspaper", value: "Local Newspaper" },
  { label: "At an Event", value: "At an Event" },
  { label: "Online Blog", value: "Online Blog" },
  { label: "Others", value: "Others" },
];

const CustomSelect = (props) => {
  return (
    <div>
      <Select options={options}/>
    </div>
  );
};

export default CustomSelect;
