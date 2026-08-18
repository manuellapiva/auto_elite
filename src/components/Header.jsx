import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Sobre",
      path: "/sobre",
    },
    {
      name: "Veículos",
      path: "/produtos",
    },
    {
      name: "Contato",
      path: "/contato",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-[#050505]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center bg-red-600">
            <span className="text-[10px] font-black tracking-tight text-white">
              AE
            </span>
          </div>
          <div className="flex items-center text-sm font-black uppercase tracking-[0.18em]">
            <span className="text-white">
              AUTO
            </span>
            <span className="ml-1 text-red-600">
              ELITE
            </span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "text-red-600"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <NavLink
            to="/produtos"
            className="group flex items-center gap-2 bg-red-600 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-700"
          >
            Ver veículos
            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 items-center justify-center text-gray-300 transition-colors duration-300 hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <FiX size={23} />
          ) : (
            <FiMenu size={23} />
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#1f1f1f] bg-[#050505] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-5 py-6">

          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-[#1f1f1f] py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">

            <NavLink
              to="/produtos"
              onClick={closeMenu}
              className="group flex items-center gap-2 bg-red-600 px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-700"
            >
              Ver veículos
              <FiArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}