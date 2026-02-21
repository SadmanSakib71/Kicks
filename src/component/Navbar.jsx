import { useState } from "react";
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
      {/* Capsule container - light pill on darker background; width/gap come from App padding */}
      <nav className="mx-auto w-full grid grid-cols-3 items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm sm:px-8">
        {/* Left: Nav links (hidden on small screens, in hamburger menu) */}
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

        {/* Center: Logo */}
        <a
          href="/"
          className="justify-self-center text-lg font-bold uppercase tracking-tight text-neutral-800 transition hover:text-neutral-600 sm:text-xl"
        >
          <img src={logo} alt="logo" />
        </a>

        {/* Right: Search, Profile, Cart with badge */}
        <div className="flex items-center justify-end gap-4 sm:gap-5">
          <button
            type="button"
            className="rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100"
            aria-label="Search"
          >
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100"
            aria-label="Account"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 100-6 3 3 0 000 6zm-5 5a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3h6a3 3 0 013 3 1 1 0 102 0 5 5 0 00-5-5H7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="relative">
            <button
              type="button"
              className="rounded-full p-1.5 text-neutral-800 transition hover:bg-neutral-100"
              aria-label="Cart"
            >
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-medium text-white">
              {cartCount}
            </span>
          </div>

          {/* Mobile menu toggle - only when we need to collapse left links */}
          <button
            type="button"
            className="rounded-lg p-2 text-neutral-600 lg:hidden"
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
