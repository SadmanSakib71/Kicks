import mainImage from "../../assets/heroImage (1).svg";
import sideImage2 from "../../assets/heroImage (2).svg";
import sideImage1 from "../../assets/heroImage (3).svg";

const HeroSection = () => {
  return (
    <section className="mb-8 sm:mb-12 px-1 sm:px-0">
      {/* Headline - compact on mobile only; original size/center on lg+ */}
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-[55px] sm:text-6xl md:text-8xl leading-tight lg:text-[215px] lg:leading-none">
          <span className="text-[#1a1a1a]">DO IT</span>
          <span className="text-[#2563eb]"> RIGHT</span>
        </h1>
      </div>

      {/* Main product container - rounded card on mobile only */}
      <div className="relative overflow-hidden rounded-2xl mt-4 shadow-lg lg:rounded-none lg:mt-0 lg:shadow-none">
        <div className="relative min-h-90 sm:min-h-130 lg:min-h-187.5">
          {/* Main image area - mustard/golden fabric with shoe */}
          <div className="relative min-h-90 sm:min-h-130 lg:min-h-187.5">
            <img
              src={mainImage}
              alt="Nike Air Max"
              className="absolute inset-0 w-full h-full object-cover lg:object-fill"
            />

            {/* Vertical "Nike product of the year" label - left edge */}
            <div className="absolute left-3 lg:left-5 rounded-br-2xl rounded-bl-2xl top-1/2 -translate-y-1/2  lg:w-50 lg:h-10 -rotate-90 origin-left flex items-center justify-center bg-black z-10 py-1 mt-6 px-2">
              <span className="text-white text-[10px] lg:text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                Nike product of the year
              </span>
            </div>

            {/* Bottom left text + CTA - original spacing/sizes on lg+ */}
            <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:max-w-[45%] p-4 sm:p-6 lg:p-8 z-10">
              <h2 className="text-xl sm:text-3xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight mb-1 sm:mb-2">
                Nike Air Max
              </h2>
              <p className="text-white/95 text-xs sm:text-base lg:text-lg mb-3 sm:mb-5 max-w-md">
                Nike introducing the new air <br /> max for everyone&apos;s
                comfort
              </p>
              <button
                type="button"
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors mb-2 sm:mb-4"
              >
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Thumbnail stack - bottom-right on mobile (first screenshot); original on lg+ */}
          <div className="absolute right-2 sm:right-4 bottom-4 sm:bottom-6 lg:bottom-auto lg:top-3/4 lg:right-6 lg:-translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-10">
            <div className="w-14 h-14 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl border-2 border-white/90 overflow-hidden shadow-md bg-white shrink-0">
              <img
                src={sideImage1}
                alt="Nike Air Max alternative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-14 h-14 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl border-2 border-white/90 overflow-hidden shadow-md bg-white shrink-0">
              <img
                src={sideImage2}
                alt="Nike Air Max brown"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
