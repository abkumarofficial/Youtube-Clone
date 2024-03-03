import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/generator";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 border border-blue-600 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <button
        className="m-2 p-2 bg-green-400"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Toggle
      </button>
      <div>
        <input
          className="px-2 border border-black w-72 text-black"
          type="number"
          value={text}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">Nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
