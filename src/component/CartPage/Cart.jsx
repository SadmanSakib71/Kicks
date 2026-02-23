import { useState } from "react";
import { useCart } from "@/context/CartContext";
import AlsoLike from "../ProdcutDetails/AlsoLike";

const DELIVERY_FEE = 6.99;

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    updateSize,
    removeItem,
    itemCount,
  } = useCart();
  const [sizeOpen, setSizeOpen] = useState(null);
  const [qtyOpen, setQtyOpen] = useState(null);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + DELIVERY_FEE;

  const handleUpdateQuantity = (id, newQty) => {
    updateQuantity(id, newQty);
    setQtyOpen(null);
  };

  const handleUpdateSize = (id, newSize) => {
    updateSize(id, newSize);
    setSizeOpen(null);
  };

  const sizes = [8, 9, 10, 11, 12];
  const maxQty = 10;

  return (
    <div className="px-6">
      {/* Promo banner */}
      <div className="pt-6 pb-2 mb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#2C2C2C] font-bold text-2xl sm:text-3xl mb-1">
            Saving to celebrate
          </h2>
          <p className="text-[#2C2C2C] text-sm sm:text-base mb-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <p className="text-[#2C2C2C] text-sm">
            <a href="#" className="underline hover:no-underline">
              Join us
            </a>{" "}
            or{" "}
            <a href="#" className="underline hover:no-underline">
              Sign-in
            </a>
          </p>
        </div>
      </div>

      {/* Main: Your Bag + Order Summary */}
      <div className="pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Left: Your Bag */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 sm:p-8">
              <h1 className="text-[#2C2C2C] font-bold text-xl sm:text-2xl tracking-tight mb-1">
                Your Bag
              </h1>
              <p className="text-[#2C2C2C]/80 text-sm mb-6">
                Items in your bag not reserved - check out now to make them
                yours.
              </p>

              {cartItems.length === 0 ? (
                <p className="text-[#2C2C2C]/70 py-8">Your bag is empty.</p>
              ) : (
                <ul className="space-y-6">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div className="flex gap-4 sm:gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="shrink-0 w-40 h-40 sm:w-36 sm:h-36 rounded-lg bg-white overflow-hidden flex items-center justify-center border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 min-w-0">
                          <div>
                            <h3 className="text-[#2C2C2C] font-bold uppercase text-sm sm:text-base tracking-tight">
                              {item.name}
                            </h3>
                            <p className="text-[#2C2C2C]/80 text-sm mt-2">
                              {item.category}
                            </p>
                            <p className="text-[#2C2C2C]/80 text-sm my-2">
                              {item.color}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                              {/* Size dropdown */}
                              <div className="relative">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setSizeOpen(
                                      sizeOpen === item.id ? null : item.id,
                                    )
                                  }
                                  className="flex items-center gap-1 text-sm text-[#2C2C2C] border border-gray-300 rounded px-3 py-2 bg-white hover:border-gray-400"
                                >
                                  Size {item.size}
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                {sizeOpen === item.id && (
                                  <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-20">
                                    {sizes.map((s) => (
                                      <button
                                        key={s}
                                        type="button"
                                        onClick={() => handleUpdateSize(item.id, s)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                      >
                                        {s}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Quantity dropdown */}
                              <div className="relative">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setQtyOpen(
                                      qtyOpen === item.id ? null : item.id,
                                    )
                                  }
                                  className="flex items-center gap-1 text-sm text-[#2C2C2C] border border-gray-300 rounded px-3 py-2 bg-white hover:border-gray-400"
                                >
                                  Quantity {item.quantity}
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                {qtyOpen === item.id && (
                                  <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-25">
                                    {Array.from(
                                      { length: maxQty },
                                      (_, i) => i + 1,
                                    ).map((q) => (
                                      <button
                                        key={q}
                                        type="button"
                                        onClick={() =>
                                          handleUpdateQuantity(item.id, q)
                                        }
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                      >
                                        {q}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3 text-gray-400">
                              <button
                                type="button"
                                className="p-1 hover:text-[#2C2C2C]"
                                aria-label="Add to wishlist"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="p-1 hover:text-[#2C2C2C]"
                                aria-label="Remove item"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div>
                            <p className="text-[#3A65FF] font-bold text-base sm:text-lg">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F5F5F5] lg:bg-transparent p-6 sm:p-0">
              <h2 className="text-[#2C2C2C] font-bold text-xl sm:text-2xl uppercase tracking-tight mb-6">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#2C2C2C]">
                  <span>
                    {itemCount} ITEM{itemCount !== 1 ? "S" : ""}
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#2C2C2C]">
                  <span>Delivery</span>
                  <span>${DELIVERY_FEE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#2C2C2C]">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>
              </div>
              <div className="flex justify-between text-[#2C2C2C] font-bold text-base sm:text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="w-full mt-6 bg-[#2C2C2C] text-white uppercase text-sm tracking-wide py-3.5 px-6 rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                className="w-full mt-3 text-sm text-[#2C2C2C] underline hover:no-underline"
              >
                Use a promo code
              </button>
            </div>
          </div>
        </div>
      </div>
      <AlsoLike />
    </div>
  );
};

export default Cart;
