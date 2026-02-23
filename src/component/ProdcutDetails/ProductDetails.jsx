import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import get from "../../Methods/get";
import AlsoLike from "./AlsoLike";
import Loading from "../Loading";

const PRODUCT = {
  badge: "New Release",
  colors: [
    { name: "Shadow Navy", value: "#1e3a5f" },
    { name: "Army Green", value: "#4a5d23" },
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(38);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((data) => setProductDetails(data))
      .catch((err) => console.error("Failed to fetch product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const images = productDetails?.images?.length
    ? productDetails.images.map((img) =>
        typeof img === "string" ? img : img.url,
      )
    : [];
  const name = productDetails?.title ?? null;
  const price = productDetails?.price ?? null;

  if (loading) {
    return (
      <div className="py-8 lg:py-12">
        <Loading className="min-h-60" />
      </div>
    );
  }

  return (
    <div className="">
      <div className="py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: 2x2 image grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={src}
                  alt={`${name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: product info */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block px-3 py-2 sm:py-3 rounded-full bg-[#4C7AF2] text-white text-xs font-semibold uppercase tracking-wide mb-3">
              {PRODUCT.badge}
            </span>
            <h1 className="text-[#2E2E2E] font-bold uppercase tracking-tight text-xl sm:text-2xl mb-2">
              {name}
            </h1>
            <p className="text-[#4C7AF2] font-bold text-2xl sm:text-3xl mb-6">
              ${Number(price).toFixed(2)}
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
                  className="text-[#2E2E2E] text-sm font-semibold underline hover:no-underline focus:outline-none"
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
                onClick={() => {
                  if (!productDetails?.id || !name || price == null) return;
                  const image = images[0] || "";
                  addToCart({
                    productId: productDetails.id,
                    name,
                    category: productDetails?.category?.name ?? "Product",
                    color: PRODUCT.colors[selectedColor].name,
                    price,
                    size: selectedSize,
                    quantity: 1,
                    image,
                  });
                }}
                className="flex-1 cursor-pointer bg-[#2E2E2E] text-white font-semibold uppercase text-sm tracking-wide py-3.5 px-6 rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="w-12 h-11.5 flex items-center justify-center bg-[#2E2E2E] text-white rounded-lg hover:bg-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E2E2E] focus:ring-offset-2"
                aria-label="Add to wishlist"
              >
                <i class="fas fa-heart"></i>
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
              <p className="text-gray-500 text-sm my-6">
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="text-gray-500 text-sm space-y-1 list-disc list-inside pl-3">
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
