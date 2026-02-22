import { Link } from "react-router-dom";

const NEW_PRODUCTS = [
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
];

const NewProducts = () => {
  return (
    <section className="mt-4 mb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header: title + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[#2E2E2E] font-bold uppercase tracking-tight">
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-1">
                DON&apos;T MISS OUT
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl block mt-1">
                NEW DROPS
              </span>
            </h2>
          </div>
          <button
            type="button"
            className="bg-[#4C7AF2] text-white font-semibold uppercase tracking-wide text-sm px-6 py-3 rounded-lg hover:bg-[#3d6ae0] transition-colors shrink-0 w-full sm:w-auto text-center"
          >
            SHOP NEW DROPS
          </button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {NEW_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="rounded-[10px] flex flex-col  overflow-hidden"
            >
              {/* Image block: grey container + badge + image */}
              <div className="bg-white p-1 rounded-[30px] h-75">
                <div className="relative rounded-[30px] bg-[#E6E6E6] h-full flex items-center justify-center p-4">
                  <div className="absolute top-0 left-0 z-10 w-16 h-11 bg-linear-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center  rounded-tl-[30px] rounded-br-[30px]">
                    New
                  </div>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-auto max-h-40 sm:max-h-44 object-contain object-center"
                  />
                </div>
              </div>

              {/* Title: padding aligned with card */}
              <h3 className="text-[#222222] font-bold text-base uppercase tracking-tight leading-snug pt-4 pb-3">
                {product.name}
              </h3>

              {/* Button: full width, same bottom radius as card, price in orange */}
              <Link to="/Product-details">
                {" "}
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

export default NewProducts;
