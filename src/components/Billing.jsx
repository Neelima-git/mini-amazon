import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { IN_CURRENCY } from "../utils/constants";

const Billing = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subTotal = searchParams.get("subtotal");
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handlePayment = (e) => {
        // e.preventDefault();
        setIsOrderPlaced(true);
      };
    

  return (
    <div>
      {/* Checkout Page NavBar */}
      <div className="flex flex-row justify-around bg-slate-200 items-center py-6 mb-4">
        <Link to={"/"}>
          <div className="flex cursor-pointer">
            <img className="h-10" src={"../images/amazon_dark.svg"} />
            <p>.in</p>
          </div>
        </Link>
        <div>
          <p className="font-normal text-[30px]">Checkout</p>
        </div>
        <div>
          <LockClosedIcon className="h-8" />
        </div>
      </div>

      {/* form */}

            {/* Display success message if order is placed */}
            {isOrderPlaced ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Your order is placed successfully!</h2>
          {/* Additional order details or confirmation can be displayed here */}
        </div>
      ) : (
      <section
        aria-labelledby="payment-heading"
        className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
      >
        <div className="mx-auto max-w-lg">
          <form className="mt-6" onSubmit={handlePayment}>
            <div className="grid grid-cols-12 gap-x-4 gap-y-6">
              <div className="col-span-full">
                <label
                  for="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autocomplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  for="name-on-card"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on card
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autocomplete="cc-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  for="card-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autocomplete="cc-number"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-8 sm:col-span-9">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration date (MM/YY)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autocomplete="cc-exp"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-4 sm:col-span-3">
                <label
                  for="cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autocomplete="csc"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  for="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autocomplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  for="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autocomplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  for="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    autocomplete="address-level1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  for="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autocomplete="postal-code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-teal-100 sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <div className="flex h-5 items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  checked=""
                  className="h-4 w-4 rounded border-gray-300 focus:ring-teal-100"
                />
              </div>
              <label
                for="same-as-shipping"
                className="text-sm font-medium text-gray-900"
              >
                Billing address is the same as shipping address
              </label>
            </div>

            <button type="submit" className="btn">
            Pay {IN_CURRENCY.format(subTotal)}
            </button>

            <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
              <LockClosedIcon
                className="mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </section>
      )}
    </div>
  );
};

export default Billing;
