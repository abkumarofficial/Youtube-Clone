import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cricket",
    "Cooking",
  ];
  return (
    <div className="flex">
      {list.map((value, index) => {
        return <Button key={index}>{value}</Button>;
      })}
    </div>
  );
};

export default ButtonList;
