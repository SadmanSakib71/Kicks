import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = 0;

  const leftLinks = [
    { label: "New Drops", emoji: "🔥", href: "#" },
    { label: "Men", dropdown: true, href: "#" },
    { label: "Women", dropdown: true, href: "#" },
  ];

  const ChevronDown = () => (
    <svg className="ml-0.5 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      {/* Capsule container - light pill, rounded, subtle shadow */}
      <nav className="relative mx-auto flex w-full items-center justify-between gap-4 rounded-2xl bg-neutral-50 px-4 py-3.5 shadow-sm sm:px-6 sm:py-4 lg:grid lg:grid-cols-3 lg:px-8 lg:py-5">
        {/* Left: Hamburger on mobile, nav links on desktop */}
        <div className="flex min-w-0 flex-1 items-center lg:flex-initial">
          {/* Hamburger - visible on mobile/tablet only */}
          <button
            type="button"
            className="rounded-lg p-2 text-neutral-800 transition hover:bg-neutral-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Nav links - desktop only */}
          <ul className="hidden items-center gap-6 sm:gap-8 lg:flex">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center text-sm font-medium text-neutral-800 transition hover:text-neutral-600"
                >
                  {link.label}
                  {link.emoji && <span className="ml-0.5">{link.emoji}</span>}
                  {link.dropdown && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Logo / KICKS - always centered */}
        <a
          href="/"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center lg:static lg:translate-x-0 lg:translate-y-0 lg:justify-self-center"
        >
          <img src={logo} alt="KICKS" className="h-5 w-auto sm:h-6" />
        </a>

        {/* Right: User + Cart badge on mobile; Search, Profile, Cart on desktop */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4 lg:gap-5">
          <button
            type="button"
            className="hidden rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100 lg:block"
            aria-label="Search"
          >
            <i className="fas fa-search h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100"
            aria-label="Account"
          >
            <i class="fas fa-user"></i>
          </button>
          <Link
            to="/cart"
            className="relative rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100"
            aria-label="Cart"
          >
            <i class="fas fa-shopping-cart"></i>
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 min-w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-black">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile dropdown (small screens when links are hidden) */}
      {mobileMenuOpen && (
        <div className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.emoji && <span className="ml-1">{link.emoji}</span>}
                  {link.dropdown && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
