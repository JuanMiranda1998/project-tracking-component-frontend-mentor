import { useState } from "react"
import { IconClose, IconHamburger } from "../utils/Icons";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen); 

  return (
    <div className="flex flex-row justify-between items-center py-12 xl:py-16 relative">
      <div className="w-6 lg:w-8"><img className="w-full" src="/logo.svg" alt="Logo" /></div>
      <ul className="hidden md:flex flex-row justify-evenly gap-10 barlow-condensed-bold uppercase mt-2">
        <li><a className="navLink text-lg" href="#">Product</a></li>
        <li><a className="navLink text-lg" href="#">Features</a></li>
        <li><a className="navLink text-lg" href="#">Pricing</a></li>
        <li><span className="disabledLink text-lg">•</span></li>
        <li><a className="navLink disabledLink text-lg" href="#">Login</a></li>
      </ul>
      <button className="md:hidden" onClick={handleMenu}>
      {!menuOpen ? <IconHamburger /> : <IconClose />}
      </button>
      {menuOpen ? 
          <div className="w-[325px] max-w-[450px] py-2 z-10 bg-white shadow-menuShadow rounded-sm absolute top-0 left-1/2 -translate-x-1/2 translate-y-24 scale-100 barlow-condensed-bold uppercase md:hidden">
            <ul className="flex flex-col justify-center items-center gap-3 py-4">
              <li><a className="navLink" href="#">Product</a></li>
              <li><a className="navLink" href="#">Features</a></li>
              <li><a className="navLink" href="#">Pricing</a></li>
              <div className="w-[90%] h-[1px] my-3 bg-[var(--neutral-grayish-blue)] opacity-50"></div>
              <li><a className="disabledLink" href="#">Login</a></li>
            </ul>
          </div> : null}
    </div>
  )
}

export default Navbar