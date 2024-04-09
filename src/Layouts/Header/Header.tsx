import { HeaderBg, MapIcon, ProfilePict } from "../../Assets/Images";
import { Button } from "../../Components";
import { tools } from "../../FakeBackend/toolsExperiences";
import { handleDownloadCV } from "./utils";

const Header = () => {
  return (
    <div className="layout-container" id="home">
      <img
        src={HeaderBg}
        alt="Header background"
        className="absolute top-0 left-0 w-full h-full -z-[999] object-cover object-left lg:object-center"
      />
      <header className="layout flex justify-center">
        {/* header content */}
        <div className="flex flex-col items-center text-center gap-2 max-w-[648px] text-white">
          <img
            src={ProfilePict}
            alt="Achmad Furqon Rachmadie profile picture"
            className="avatar w-24 md:w-36 lg:w-48 rounded-full mb-6"
          />
          <div className="flex items-center gap-2">
            <img src={MapIcon} alt="location" />
            <p className="text-gray-200 font-medium md:text-xl">
              Malang, Indonesia
            </p>
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Achmad F. Rachmadie
          </h1>
          <p className="my-5 md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            dolores excepturi tempore optio sed voluptas illum quis corrupti
            quam. Quia?
          </p>
          <Button text="Download CV" variant="btn-primary btn-outline text-primary" onClick={handleDownloadCV} />
        </div>
        <div className="top-skill-logo"></div>
      </header>

      {/* Top skill */}
      <div className="mx-auto mt-10 bg-white shadow-md rounded-lg w-fit lg:max-w-[524px] py-6 px-8 md:px-12">
        <header className="text-center font-bold text-gray-500 text-sm">
          TOP SKILLS
        </header>
        <div className="flex gap-8 items-center justify-center mt-5">
          {tools
            .filter((tool) => tool.topSkill)
            .map((tool, index) => (
              <a
                href={tool.url}
                key={index}
                className="w-8 h-8 lg:w-10 lg:h-10 hover:scale-110 transition-all"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full"
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
