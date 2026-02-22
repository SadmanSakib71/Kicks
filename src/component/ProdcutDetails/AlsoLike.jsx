import { useRef } from "react";
import { Link } from "react-router-dom";

const ALSO_LIKE_PRODUCTS = [
  {
    id: 1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    alt: "Adidas 4DFWD x Parley running shoes navy",
  },
  {
    id: 2,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    alt: "Adidas running shoes white green",
  },
  {
    id: 3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    alt: "Adidas running shoes olive",
  },
  {
    id: 4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80",
    alt: "Adidas running shoes dark gray",
  },
  {
    id: 5,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    alt: "Adidas 4DFWD x Parley running shoes",
  },
];

const AlsoLike = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="">
        {/* Header: title + scroll arrows */}
        <div className="flex items-start justify-between gap-4 mb-6 lg:mb-8">
          <h2 className="text-[#2E2E2E] font-bold uppercase tracking-tight text-2xl sm:text-3xl lg:text-4xl">
            You may also like
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-lg bg-[#2E2E2E] text-gray-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E2E2E] focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Scroll left"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-lg bg-[#2E2E2E] text-gray-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E2E2E] focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Scroll right"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll: 2 cards on mobile, 4 on desktop; scroll by viewport */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ALSO_LIKE_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.9375rem)] flex flex-col overflow-hidden rounded-[10px]"
            >
              {/* Image block: grey container + badge + image - same as NewProducts */}
              <div className="bg-white p-1 rounded-[30px] h-75">
                <div className="relative rounded-[30px] bg-[#E6E6E6] h-full flex items-center justify-center p-4">
                  <div className="absolute top-0 left-0 z-10 w-16 h-11 bg-linear-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center rounded-tl-[30px] rounded-br-[30px]">
                    New
                  </div>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-auto max-h-40 sm:max-h-44 object-contain object-center"
                  />
                </div>
              </div>

              {/* Title: padding aligned with card - same as NewProducts */}
              <h3 className="text-[#222222] font-bold text-base uppercase tracking-tight leading-snug pt-4 pb-3">
                {product.name}
              </h3>

              {/* Button: full width, same bottom radius as card, price in orange - same as NewProducts */}
              <Link to="/Product-details">
                <button
                  type="button"
                  className="cursor-pointer mt-auto w-full bg-[#222222] text-white font-bold uppercase tracking-wide text-sm py-4 px-4 rounded-xl hover:bg-black transition-colors"
                >
                  <span>VIEW PRODUCT - </span>
                  <span className="text-[#FFC107]">${product.price}</span>
                </button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoLike;
