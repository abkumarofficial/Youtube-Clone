import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/store";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((state) => {
    return state.search;
  });

  useEffect(() => {
    // Debouncing
    const timeout = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const getSearchSuggestions = () => {
    fetch(YOUTUBE_SEARCH_API + searchQuery)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSuggestions(json[1]);
        // Caching the Data
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getSearchSuggestions();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={handleToggleMenu}
          className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-8 mx-2"
          alt="youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        {/* <div> */}
        <input
          className="px-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        />
        {/* </div> */}
        <button
          className=" border border-gray-400 p-2 rounded-r-full bg-gray-100"
          type="text"
        >
          Search
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[24rem] border bg-grey-200">
            {
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <li
                      className="px-3 py-2 shadow-sm hover:bg-gray-300"
                      key={suggestion}
                    >
                      {suggestion}
                    </li>
                  );
                })}
              </ul>
            }
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="profile"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </div>
    </div>
  );
};

export default Head;
