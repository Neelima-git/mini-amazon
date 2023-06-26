import {
  ShoppingCartIcon,
  Bars3Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Search } from "./";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber)
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-miniAmazon text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="flex pr-4 pl-4">
            <div className="self-end pb-1">
              <MapPinIcon className="h-6" />
            </div>
            <div className="text-sm xl:text-base font-bold flex flex-col">
              <div className="text-xs xl:text-sm">Hello</div>
              <div>Select your address</div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="relative">
              <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                {cart}
              </div>
            </div>
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-miniAmazon-light_blue text-white space-x-3 text-s xl:text-base p-2 px-3 pl-6 items-center">
        <div className="sideNavigation flex items-center me-2">
          <div>
            <Bars3Icon className="h-6" />
          </div>
          <div className="font-bold">All</div>
        </div>
        <div>Amazon miniTV</div>
        <div>Sell</div>
        <div>Best Sellers</div>
        <div>Mobiles</div>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>New Releases</div>
        <div>Electronics</div>
        <div>Prime</div>
        <div>Home & Kitchen</div>
        <div className="flex items-center justify-end flex-grow">
          <div className="ml-auto">
            <img
              src="../images/download_app.jpg"
              alt="Download app"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
