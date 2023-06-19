import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
return (
    <div className="w-[100%]">
      <div className="flex items-center h-8 bg-miniAmazon-yellow rounded">
        <select
          className="p-[7px] rounded-l text-black border text-xs xl:text-sm"
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
          className="flex grow items-center h-[100%] text-black py-1"
          placeholder="  Search Amazon.in"
          type="text"
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[24px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
