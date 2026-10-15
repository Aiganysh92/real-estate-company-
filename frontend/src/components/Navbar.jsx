import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-crest-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crest-600 font-display text-lg font-bold text-white">
            C
          </span>
          <span className="font-display text-xl font-bold text-crest-900">
            Crestview Realty
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-crest-800 md:flex">
          <Link to="/" className="hover:text-crest-500">
            Buy
          </Link>
          <a href="#listings" className="hover:text-crest-500">
            Listings
          </a>
          <a href="#about" className="hover:text-crest-500">
            About
          </a>
          <a href="#contact" className="hover:text-crest-500">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-crest-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-crest-700"
        >
          Talk to an Agent
        </a>
      </div>
    </header>
  );
}

export default Navbar;
