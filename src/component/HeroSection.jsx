import mainImage from "../assets/heroImage (1).svg";
import sideImage2 from "../assets/heroImage (2).svg";
import sideImage1 from "../assets/heroImage (3).svg";

const HeroSection = () => {
  return (
    <section className=" pb-12">
      {/* Headline */}
      <div className="text-center">
        <h1 className="text-[220px] font-bold tracking-tight">
          <span className="text-[#1a1a1a]">DO IT</span>
          <span className="ml-4 sm:ml-6 lg:ml-8 text-[#2563eb]">RIGHT</span>
        </h1>
      </div>

      {/* Main product container */}
      <div className="relative  overflow-hidden">
        <div className="relative min-h-130 lg:min-h-187.5">
          {/* Main image area - mustard/golden fabric with shoe */}
          <div className="relative  min-h-130 lg:min-h-187.5 ">
            <img
              src={mainImage}
              alt="Nike Air Max"
              className="absolute inset-0 w-full h-full"
            />

            {/* Vertical "Nike product of the year" label - left edge */}
            <div className="absolute left-5 rounded-br-2xl rounded-bl-2xl top-1/2 -translate-y-1/2 w-50 h-10 -rotate-90 origin-left flex items-center justify-center bg-black z-10">
              <span className="text-white text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                Nike product of the year
              </span>
            </div>

            {/* Bottom left text + CTA */}
            <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:max-w-[45%] p-6 lg:p-8 z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white uppercase tracking-tight mb-2">
                Nike Air Max
              </h2>
              <p className="text-white/95 text-sm sm:text-base lg:text-lg mb-5 max-w-md">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Thumbnail stack - right side, stacked vertically */}
          <div className="absolute top-3/4 right-4 sm:right-6 -translate-y-1/2 flex flex-col gap-3 z-10">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl border-2 border-white/90 overflow-hidden shadow-md bg-white shrink-0">
              <img
                src={sideImage1}
                alt="Nike Air Max alternative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl border-2 border-white/90 overflow-hidden shadow-md bg-white shrink-0">
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
