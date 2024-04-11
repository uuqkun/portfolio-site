import { NavbarLogo } from "../../Assets/Images";
import { footerIcons, footerList } from "../../FakeBackend/footer";

const Footer = () => {
  return (
    <div className="layout-container">
      <footer className="layout py-10 flex flex-wrap items-center justify-center md:justify-between gap-8">
        {/* FOOTER LOGO */}
        <div className="footer-logo w-full md:w-fit md:navbar-start">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white w-[56px] h-[56px] rounded-full shadow-icon">
              <img src={NavbarLogo} alt="Footer logo" />
            </div>
            <p className="md:text-xl uppercase text-gray-400">&copy; {new Date().getFullYear()} Uqierach</p>
          </div>
        </div>

        {/* FOOTER LIST */}
        <nav className="footer-list w-full md:w-fit md:flex md:flex-row gap-2 md:navbar-center">
          {footerList.map((item, index) => (
            <li key={index} className="p-3 text-center">
              <a
                href={item.url}
                className="text-gray-500 active:text-gray-100 font-normal md:text-lg transition-all ease-linear"
              >
                {item.title}
              </a>
            </li>
          ))}
        </nav>

        {/* FOOTER ICONS */}
        <div className="footer-icons flex gap-4">
          {footerIcons.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer">
              <div className="bg-gray-50 p-4 w-[50px] h-[50px] rounded-md">
                <img src={item.icon} alt={item.title} />
              </div>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
