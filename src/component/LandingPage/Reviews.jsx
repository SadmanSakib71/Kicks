const REVIEWS = [
  {
    id: 1,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    productImage:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    productAlt: "Nike Jordan 1 high-top sneakers",
  },
  {
    id: 2,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    productImage:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    productAlt: "Colorful sneakers",
  },
  {
    id: 3,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    productImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    productAlt: "Adidas black sneakers",
  },
];

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-amber-500 fill-current shrink-0"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Reviews = () => {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header: REVIEWS title + SEE ALL button */}
        <div className="flex flex-row justify-between gap-4 mb-8">
          <h2 className="text-[#2E2E2E] font-bold uppercase tracking-tight text-3xl sm:text-4xl">
            Reviews
          </h2>
          <button
            type="button"
            className="bg-[#4C7AF2] text-white font-semibold uppercase tracking-wide text-sm px-6 py-3 rounded-lg hover:bg-[#3d6ae0] transition-colors shrink-0 text-center"
          >
            SEE ALL
          </button>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col"
            >
              {/* Top: title, text, avatar, rating */}
              <div className="p-5 sm:p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[#2E2E2E] font-bold text-lg leading-tight">
                      {review.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-snug pt-2">
                      {review.text}
                    </p>
                  </div>
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex gap-0.5"
                    aria-label={`Rating: ${review.rating}`}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-[#2E2E2E] font-bold text-sm ml-1">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Bottom: product image */}
              <div className="mt-auto rounded-b-3xl overflow-hidden bg-gray-100 h-78">
                <img
                  src={review.productImage}
                  alt={review.productAlt}
                  className="w-full h-full sm:h-full object-cover object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
