function Footer() {
  return (
    <footer id="contact" className="border-t border-crest-100 bg-crest-900 text-crest-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white">Crestview Realty</h3>
          <p className="mt-2 text-sm text-crest-200">
            Helping families and investors find exceptional homes since 2012.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-crest-300">
            Contact
          </h4>
          <p className="mt-2 text-sm">hello@crestviewrealty.example</p>
          <p className="text-sm">(555) 010-2024</p>
        </div>
        <div id="about">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-crest-300">
            About
          </h4>
          <p className="mt-2 text-sm text-crest-200">
            This site is a sample application used for DevOps training at
            JumpToTech DevOps School. Listings are fictional.
          </p>
        </div>
      </div>
      <div className="border-t border-crest-800 px-6 py-4 text-center text-xs text-crest-400">
        © {new Date().getFullYear()} Crestview Realty. For educational use only.
      </div>
    </footer>
  );
}

export default Footer;
