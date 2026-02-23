import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../Methods/get";

const SameCategoryItems = () => {
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    get("https://api.escuelajs.co/api/v1/products").then((data) => {
      const list = Array.isArray(data) ? data : [];
      const filtered = list.filter(
        (p) =>
          p.category?.id === Number(categoryId) ||
          p.category?.id === categoryId,
      );
      setProducts(
        filtered.map((p) => ({
          id: p.id,
          name: p.title ?? p.name,
          price: p.price,
          image: Array.isArray(p.images) ? p.images[0] : (p.image ?? ""),
          alt: p.title ?? p.name ?? "",
        })),
      );
    });
  }, [categoryId]);

  return (
    <section className="mt-4 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 px-4 sm:px-0">
          <h2 className="text-[#2E2E2E] font-bold uppercase tracking-tight">
            <span className="text-xl sm:text-4xl lg:text-5xl block mt-0 sm:mt-1 leading-tight">
              Same category
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-[#2E2E2E] py-8">
              No products in this category
            </p>
          ) : (
            products.map((product) => (
              <article
                key={product.id}
                className="rounded-[10px] flex flex-col overflow-hidden"
              >
                <div className="bg-white p-1 rounded-[30px] h-75">
                  <div className="relative rounded-[30px] bg-[#eceef0] h-full flex items-center justify-center p-4">
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

                <h3 className="text-[#222222] font-bold text-base uppercase tracking-tight leading-snug pt-4 pb-3">
                  {product.name}
                </h3>

                <Link to={`/Product-details/${product?.id}`}>
                  <button
                    type="button"
                    className="cursor-pointer mt-auto w-full bg-[#222222] text-white uppercase tracking-wide text-sm py-4 px-4 rounded-xl hover:bg-black transition-colors"
                  >
                    <span>VIEW PRODUCT - </span>
                    <span className="text-[#FFC107]">${product.price}</span>
                  </button>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SameCategoryItems;
