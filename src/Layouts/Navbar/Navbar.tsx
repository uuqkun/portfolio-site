import { useState } from "react";
import { INavExit, INavOpen, NavbarLogo } from "../../Assets/Images";
import { Button } from "../../Components";
import { navbarList } from "../../FakeBackend/navbar";
import { userProfile } from "../../FakeBackend/fakeProfile";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="w-full bg-blur fixed top-0 left-0 z-50">
      <nav className="layout navbar py-3 gap-2">
        <div className="nav-icon navbar-start">
          <div className="bg-white rounded-full shadow-icon">
            <img src={NavbarLogo} alt="Navbar logo" />
          </div>
        </div>
        <ul className="hidden md:flex md:navbar-center gap-4">
          {navbarList.map((item, index) => (
            <li key={index} className="p-1">
              <a
                href={item.url}
                className="text-gray-500 active:text-gray-100 font-normal md:text-lg transition-all ease-linear"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* nav toggle menu */}
        <div
          className="navbar-end md:hidden"
          onClick={() => setNavToggle(!navToggle)}
        >
          <img src={!navToggle ? INavOpen : INavExit} alt="Open navbar" />
        </div>

        <ul
          className={`navbar-end w-auto max-w-[351px] lg:hidden flex-col gap-4 top-full bg-white shadow-sm rounded-md p-6 absolute ${
            navToggle ? "right-1/2 translate-x-1/2" : "-right-full"
          } transition-all ease-in-out delay-200 duration-200`}
        >
          {navbarList.map((item, index) => (
            <li key={index} className="p-1">
              <a
                href={item.url}
                className="text-gray-500 active:text-gray-100 font-normal transition-all ease-linear"
                onClick={() => setNavToggle(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
          <Button
            text="Email me"
            variant="btn-primary text-white"
            onClick={() =>
              window.open(`mailto:${userProfile.email[2]}`, "_blank")
            }
          />
        </ul>
        <div className="hidden md:flex md:navbar-end">
          <Button
            text="Email me"
            variant="btn-primary text-white"
            onClick={() =>
              window.open(`mailto:${userProfile.email[2]}`, "_blank")
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
