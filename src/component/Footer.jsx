import kicksWordmarkImg from "../assets/footerLogo.svg";
import footerUperPartIcon from "../assets/footerUperPartIcon.svg";

const Footer = () => {
  const categories = [
    "Runners",
    "Sneakers",
    "Basketball",
    "Outdoor",
    "Golf",
    "Hiking",
  ];
  const companyLinks = ["About", "Contact", "Blogs"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email signup
  };

  return (
    <footer className="mt-16 mb-5 rounded-t-3xl overflow-hidden">
      {/* Card 1: Blue section - rounded upper part (top-left, top-right) */}
      <div className="bg-[#4B66FF] rounded-b-3xl">
        <div className="rounded-t-3xl overflow-hidden px-6 py-12 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-white/95 text-sm md:text-base mt-2 mb-6">
              Sign up for free! Join the community.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-4 py-3 rounded-xl border-2 border-[#6B85FF] bg-transparent text-white placeholder:text-white/60 focus:outline-none focus:border-white/80"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#1E1E1E] text-white font-semibold uppercase text-sm tracking-wide hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="relative shrink-0">
            <img src={footerUperPartIcon} alt="" />
          </div>
        </div>
        {/* Card 2: Dark section - rounded at bottom so “dark part” and bottom are one rounded block */}
        <div className="relative bg-[#1E1E1E] rounded-t-3xl rounded-b-3xl px-6 py-12 md:px-12 lg:px-16 overflow-hidden pb-0">
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About us */}
            <div>
              <h3 className="text-[#FF9800] font-bold text-lg mb-3">
                About us
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-[#FF9800] font-bold text-lg mb-3">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((name) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="text-white/90 text-sm hover:text-white transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#FF9800] font-bold text-lg mb-3">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((name) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="text-white/90 text-sm hover:text-white transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-[#FF9800] font-bold text-lg mb-3">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Large KICKS graphic - image element (not background) */}
          <div className="w-full  pointer-events-none select-none" aria-hidden>
            <img
              src={kicksWordmarkImg}
              alt=""
              className="w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Part under the footer: copyright bar */}
      <div className="py-4 text-center">
        <p className="text-[#4a4a4a] text-sm">© All rights reserved</p>
      </div>
    </footer>
  );
};

function FacebookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88 2.1V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export default Footer;
