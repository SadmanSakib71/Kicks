import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import productIcon from "../../assets/product-details-icon.svg";
import get from "../../Methods/get";

const CATEGORIES_API = "https://api.escuelajs.co/api/v1/categories";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    get(CATEGORIES_API)
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setCategories(
          list.map((c) => ({
            id: c.id,
            title: c.name?.toUpperCase() ?? "",
            image: c.image ?? "",
            alt: c.name ?? "",
          })),
        );
      })
      .catch(() => setCategories([]));
  }, []);

  // Chunk into pairs so we show 2 cards per slide
  const slides = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < categories.length; i += 2) {
      pairs.push(categories.slice(i, i + 2));
    }
    return pairs;
  }, [categories]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = slides.length - 1;

  const goPrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };
  const goNext = () => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  };

  return (
    <section className="bg-[#292929] pl-7 sm:pl-12 mt-10 sm:mt-30">
      {/* Header bar */}
      <div className="flex items-center justify-between py-6 sm:py-10 pr-3">
        <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight">
          CATEGORIES
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous categories"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-lg bg-[#888888] text-white flex items-center justify-center hover:bg-[#777] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#888888]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next categories"
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content area with rounded top - carousel shows 2 cards at a time */}
      <div className="bg-[#F8F8F8] rounded-tl-2xl sm:rounded-tl-3xl overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((pair, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full grid grid-cols-1 sm:grid-cols-2 divide-x-0 sm:divide-x divide-gray-200/80 shrink-0"
            >
              {pair.map((category, cardIndex) => (
                <div
                  key={category.id ?? `${slideIndex}-${cardIndex}`}
                  className={`relative min-h-70 sm:min-h-80 flex flex-col ${cardIndex === 0 ? "bg-[#ECEEF0]" : ""}`}
                >
                  {/* Product image - blends with card background */}
                  <div className="flex-1 flex items-center justify-center py-6 px-4 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="max-h-45 sm:max-h-55 w-auto object-contain object-center"
                    />
                  </div>

                  {/* Bottom row: title + CTA button */}
                  <div className="flex items-end justify-between px-5 pb-5 pt-2">
                    <h3 className="text-black font-bold text-sm sm:text-base lg:text-lg uppercase tracking-tight leading-tight max-w-[60%]">
                      {category.title}
                    </h3>

                    <Link to={`/category-product/${category?.id}`}>
                      <button
                        type="button"
                        aria-label={`View ${category.title}`}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0 cursor-pointer"
                      >
                        <img src={productIcon} alt="" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
