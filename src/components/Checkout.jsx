import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductDetails } from "./";
import { IN_CURRENCY } from "../utils/constants";
import { selectCartProducts, selectCartProductsNumber, selectCartSubTotal } from "../redux/cartSelectors";
import {
  decrementInCart,
  incrementInCart,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

const Checkout = () => {
  const products = useSelector(selectCartProducts);
  const itemsNumber = useSelector(selectCartProductsNumber);
  const subTotal = useSelector(selectCartSubTotal);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const renderDeliveryMessage = () => {
    const remainingAmount = 499 - subTotal;
    if (subTotal > 499) {
      return (
        <div className="text-xs xl:text-sm text-green-800 mb-2">
          Your order qualifies for{" "}
          <span className="font-bold">FREE DELIVERY</span>. Delivery Details
        </div>
      );
    } else {
      return (
        <div className="text-xs xl:text-sm mb-2">
          Add
          <span className="text-red-600 p-1">
            {IN_CURRENCY.format(remainingAmount)}
          </span>
           to your order to qualify for FREE Delivery.
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" bg-miniAmazon-background pb-4">
      <div className="min-w-[1000px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/*Products*/}
          <div className="col-span-6 bg-white ">
            <div className="flex justify-between pe-2">
              <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
              <button
                className="text-sm xl:text-base rounded text-red-600 mt-2 mb-1"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img className="p-4 m-auto" src={product.image} />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center ">
                          <div
                            className="text-xl xl:text-2xl bg-gray-300 rounded-s cursor-pointer"
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                          >
                            -
                          </div>
                          <div className="text-lg xl:text-xl bg-gray-200">
                            {product.quantity}
                          </div>
                          <div
                            className="text-xl xl:text-2xl bg-gray-300 rounded-e cursor-pointer"
                            onClick={() =>
                              dispatch(incrementInCart(product.id))
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                        {IN_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal({itemsNumber} items):
              <span className="font-semibold">
                {IN_CURRENCY.format(subTotal)}
              </span>
            </div>
          </div>
          {/*Checkout*/}
          <div className="col-span-2 bg-white rounded h-[250px] p-2">
            {renderDeliveryMessage()}
            <div className="text-base xl:text-lg mb-4 mr-4">
              Subtotal ( {itemsNumber} items):
              <span className="font-semibold">
                {IN_CURRENCY.format(subTotal)}
              </span>
            </div>
            <Link to={`/billing`}>
              <button className="btn">Proceed to Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
