import { useState } from "react";
import AlsoLike from "./AlsoLike";

const PRODUCT = {
  name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
  price: 125,
  badge: "New Release",
  colors: [
    { name: "Shadow Navy", value: "#1e3a5f" },
    { name: "Army Green", value: "#4a5d23" },
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  images: [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
  ],
};

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(38);

  return (
    <div className="">
      <div className="py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: 2x2 image grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {PRODUCT.images.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={src}
                  alt={`${PRODUCT.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: product info */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#4C7AF2] text-white text-xs font-semibold uppercase tracking-wide mb-3">
              {PRODUCT.badge}
            </span>
            <h1 className="text-[#2E2E2E] font-bold uppercase tracking-tight text-xl sm:text-2xl mb-2">
              {PRODUCT.name}
            </h1>
            <p className="text-[#4C7AF2] font-bold text-2xl sm:text-3xl mb-6">
              ${PRODUCT.price.toFixed(2)}
            </p>

            {/* Color */}
            <div className="mb-6">
              <p className="text-[#2E2E2E] font-semibold uppercase text-sm tracking-wide mb-2">
                Color
              </p>
              <div className="flex gap-3">
                {PRODUCT.colors.map((color, i) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E2E2E] ${
                      selectedColor === i
                        ? "border-[#1e3a5f] ring-offset-[#f5f3ef]"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {PRODUCT.colors[selectedColor].name}
              </p>
            </div>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2E2E2E] font-semibold uppercase text-sm tracking-wide">
                  Size
                </p>
                <button
                  type="button"
                  className="text-[#2E2E2E] text-sm underline hover:no-underline focus:outline-none"
                >
                  Size chart
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {PRODUCT.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E2E2E] focus:ring-offset-2 ${
                      selectedSize === size
                        ? "bg-[#2E2E2E] text-white border-[#2E2E2E]"
                        : "bg-white text-[#2E2E2E] border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mb-4">
              <button
                type="button"
                className="flex-1 bg-[#2E2E2E] text-white font-semibold uppercase text-sm tracking-wide py-3.5 px-6 rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="w-12 h-11.5 flex items-center justify-center bg-[#2E2E2E] text-white rounded-lg hover:bg-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E2E2E] focus:ring-offset-2"
                aria-label="Add to wishlist"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="w-full bg-[#4C7AF2] text-white font-semibold uppercase text-sm tracking-wide py-3.5 px-6 rounded-lg hover:bg-[#3d6ae0] transition-colors mb-8"
            >
              Buy it now
            </button>

            {/* About the product */}
            <section>
              <h2 className="text-[#2E2E2E] font-bold uppercase text-sm tracking-wide mb-2">
                About the product
              </h2>
              <p className="text-gray-600 text-sm mb-1">
                {PRODUCT.colors.map((c) => c.name).join(" / ")}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="text-gray-500 text-sm space-y-1 list-disc list-inside">
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <AlsoLike />
    </div>
  );
};

export default ProductDetails;
