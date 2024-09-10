import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <header className="sm:px-8 px-4 py-6 bg-gray-800 text-white z-10 w-full">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-3xl font-bold">
            Logo
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/sign-in"><button className="font-montserrat leading-normal text-lg text-slate-gray bg-green-400 px-4 py-3 rounded-lg list-none">Join US</button></Link>
          {!isMenuOpen && (
            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl" />
            </div>
          )}
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed w-1/2 top-0 right-0 left-0 z-10 bottom-0 lg:bottom-auto bg-slate-100">
            <div
              className="hidden max-lg:block fixed right-0  px-4 py-6 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl text-white" />
            </div>

            <ul className=" lg:hidden h-full p-4">
              <li className="text-4xl mb-4 font-bold">Logo</li>
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                  className="my-2"
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
                <li className="font-montserrat leading-normal text-lg text-slate-gray bg-green-400 px-4 py-3 rounded-lg">Join US</li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
