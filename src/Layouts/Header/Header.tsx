import { MapIcon, ProfilePict } from "../../Assets/Images";
import { Button } from "../../Components";
import { tools } from "../../FakeBackend/toolsExperiences";

const Header = () => {
  return (
    <div className="layout-container h-[80vh]">
      <header className="layout flex justify-center">
        {/* header content */}
        <div className="flex flex-col items-center text-center gap-2 max-w-[648px] text-white">
          <img
            src={ProfilePict}
            alt="Achmad Furqon Rachmadie profile picture"
            className="avatar w-24 md:w-28 lg:w-36 rounded-full mb-6"
          />
          <div className="flex items-center gap-2">
            <img src={MapIcon} alt="location" />
            <p className="text-gray-200 font-medium">Malang, Indonesia</p>
          </div>
          <h1 className="font-bold">Achmad F. Rachmadie</h1>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            dolores excepturi tempore optio sed voluptas illum quis corrupti
            quam. Quia?
          </p>
          <Button text="Download CV" variant="btn-primary text-white" />
        </div>
        <div className="top-skill-logo"></div>
      </header>

      {/* Top skill */}
      <div className="mx-auto mt-10 bg-white shadow-lg rounded-lg w-fit lg:max-w-[524px] py-4 px-8 absolute bottom-0 left-1/2 -translate-x-1/2">
        <header className="text-center font-bold text-gray-500 text-sm">
          TOP SKILLS
        </header>
        <div className="flex gap-8 items-center justify-center mt-2">
          {tools
            .filter((tool) => tool.topSkill)
            .map((tool, index) => (
              <a href={tool.url} key={index} className="w-[32px] hover:scale-110 transition-all">
                <img src={tool.icon} alt={tool.name} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
