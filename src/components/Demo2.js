import React from "react";
import { useRef } from "react";

const Demo2 = () => {
  const temp = useRef(0);
  console.log(temp);
  return (
    <div className="m-4 p-2 w-96 border border-blue-600 ">
      <input
        type="text"
        ref={temp}
        className="bg-gray-200"
        onChange={() => {
          console.log(temp.current.value);
        }}
      />
      {/* <button
        className="p-4 m-2 bg-green-400"
        onClick={() => {
          temp.current++;
          console.log(temp);
        }}
      >
        Click me
      </button> */}
    </div>
  );
};

export default Demo2;
