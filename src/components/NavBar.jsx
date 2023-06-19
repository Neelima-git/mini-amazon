import {
  ShoppingCartIcon,
  Bars3Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Search } from "./";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-miniAmazon text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt="Amazon logo"
          />
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
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex bg-miniAmazon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 px-3 pl-6 items-center">
        <div className="sideNavigation flex items-center">
          <div>
            <Bars3Icon class="h-6" />
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
        <div>Amazon Pay</div>
        <div>Fashion</div>
        <div>Computers</div>
        <div>Gift Ideas</div>
      </div>
    </header>
  );
};

export default NavBar;
