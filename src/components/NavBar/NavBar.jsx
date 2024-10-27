import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const { logOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logout is successful!");
    });
  };
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/available-camp", label: "Available Camps" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  return (
    <div className="fixed z-10 w-full max-w-[1440px]">
      <header className="sm:px-8 px-4 py-2 bg-gray-900 bg-opacity-50 text-white z-10 w-full">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="w-16" alt="logo" />
            <p className="text-3xl font-bold">MediCare</p>
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {user ? (
            <button
              onClick={handleLogOut}
              className="font-montserrat leading-normal text-lg max-lg:hidden text-slate-gray bg-red-500 px-4 py-3 rounded-lg list-none"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/sign-in">
              <button className="font-montserrat leading-normal max-lg:hidden text-lg text-slate-gray bg-green-400 px-4 py-3 rounded-lg list-none">
                Join US
              </button>
            </Link>
          )}
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
        <nav className={`fixed w-2/3 ${isMenuOpen? 'top-0 right-0 left-0 bottom-0 lg:bottom-auto' : 'top-0 right-0 bottom-0 -left-full'} duration-1000 z-10  bg-slate-100`}>
          <div
            className="hidden max-lg:block fixed right-0 md:right-4 -top-2  px-4 py-8 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <AiOutlineClose className={`text-4xl text-white ${isMenuOpen? '' : 'hidden'}`} />
          </div>

          <ul className=" lg:hidden h-full p-4">
            <li className="text-2xl mb-4 font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} className="h-12" alt="" />
                <p>MediCare</p>
              </Link>
            </li>
            {navLinks.map((item) => (
              <li
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
                className="my-2"
              >
                <Link
                  to={item.to}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li onClick={() => setIsMenuOpen(false)}>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="font-montserrat leading-normal text-lg text-slate-gray bg-red-500 px-4 py-3 rounded-lg list-none"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/sign-in">
                  <button className="font-montserrat leading-normal text-lg text-slate-gray bg-green-400 px-4 py-3 rounded-lg list-none">
                    Join US
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default NavBar;
