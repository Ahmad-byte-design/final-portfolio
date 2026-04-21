import NavItems from "./NavItems";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex items-end justify-end">

      <nav className="hidden md:block w-full bg-primary relative rounded-bl-[99999px]">
        <NavItems />
      </nav>

     
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-3 z-50 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

  
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary z-40
                    overflow-hidden transition-all duration-300 rounded-b-2xl shadow-lg
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <NavItems mobile onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default Nav;
