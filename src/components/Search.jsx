import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`)
    .then((suggestionResults) => {
      setSuggestions(suggestionResults)
    })
  };

  useEffect(() => {
    getSuggestions();
  },  [])

return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-miniAmazon-yellow rounded">
        <select
        onChange={(e) => setCategory(e.target.value)}
          className="p-[11px] pe-[0px] rounded-l text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%] text-black p-4"
          placeholder="Search Amazon.in"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[24px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
