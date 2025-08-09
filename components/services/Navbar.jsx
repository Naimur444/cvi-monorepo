"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Products", href: "/products" },
  {
    label: "Services",
    href: "/services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
          stroke="#3D3D3D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  const NavLink = ({ href, label, icon = null }) => (
    <Link
      href={href}
      className={`relative flex items-center gap-1 px-2 pb-1 transition-all duration-300 ease-in-out
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full
        after:transition-transform after:duration-300 after:ease-in-out
        ${
          isActive(href)
            ? "after:scale-x-100 after:bg-[#0E4F53]"
            : "after:scale-x-0 after:bg-[#0E4F53]"
        }
      `}
    >
      {label}
      {icon}
    </Link>
  );

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? " /30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 md:w-9/12 mx-auto py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
          >
            <g clipPath="url(#clip0_964_16)">
              <path
                d="M0.192396 18.8701C1.30437 18.8682 2.40961 19.0436 3.46694 19.3899C5.08492 19.9522 6.55813 20.8697 7.77965 22.0759C9.00117 23.282 9.94037 24.7465 10.5291 26.3631C10.8079 27.2505 11.0223 28.1571 11.1704 29.0757C11.3047 29.8664 11.3904 30.6646 11.427 31.4659H16.9499C17.136 30.1077 17.136 28.7304 16.9499 27.3722C16.2369 22.1936 12.985 18.908 11.8872 17.8306C7.29982 13.3424 1.66745 12.7733 0 12.6709L0.192396 18.8701Z"
                fill="#0E4F53"
              />
              <path
                d="M0.0866699 6.25536C3.3404 6.2331 6.5522 6.99409 9.45383 8.47479C10.9499 9.26939 12.351 10.2329 13.63 11.3468C15.8393 13.1583 17.7415 15.3186 19.2624 17.7433C20.1862 19.2713 20.945 20.8942 21.5259 22.5843C22.5468 25.4515 23.1417 28.4545 23.2914 31.4962H28.7804C28.8725 30.0314 29.1645 28.5863 29.6481 27.2015C30.0518 26.0633 31.7985 21.0668 35.9558 19.6478C36.1859 19.5682 36.4386 19.4999 36.4386 19.4999C37.5841 19.1915 38.7783 19.1103 39.9546 19.2609V13.0616C39.282 13.0008 38.6052 13.0008 37.9326 13.0616C32.1946 13.5738 28.4183 18.3731 27.0941 20.2283L23.4121 14.2719C23.6838 14.0215 24.095 13.6535 24.6005 13.221C26.8036 11.324 29.4255 9.11217 32.7227 7.82983C35.0419 6.95026 37.517 6.56274 39.9924 6.69166V0.51518C39.4227 0.492417 38.8606 0.492417 38.2608 0.51518C30.2894 0.837662 24.0384 5.52693 20.1225 9.37774C19.6811 8.91489 18.9681 8.19404 18.0363 7.37836C15.9501 5.5459 11.823 1.92651 5.80203 0.856633C3.92658 0.525343 2.01433 0.458941 0.120624 0.659349L0.0866699 6.25536Z"
                fill="#0E4F53"
              />
            </g>
            <defs>
              <clipPath id="clip0_964_16">
                <rect
                  width="40"
                  height="31"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="font-semibold">Cloud Vortex Innovation</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6  ">
          {navItems.map(({ label, href, icon }) => (
            <li key={href}>
              <NavLink label={label} href={href} icon={icon} />
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-full right-0 w-1/2 md:hidden flex flex-col items-center space-y-2 p-4
            bg-white/50 backdrop-blur-xl text-gray-800 font-medium shadow-xl rounded-b-2xl border-b-2 border-[#0E4F53]
            transition-all duration-300 ease-in-out transform origin-top
            ${
              menuOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            }`}
        >
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
