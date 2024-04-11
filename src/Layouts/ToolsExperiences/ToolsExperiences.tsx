import { useEffect } from "react";
import { experiences, tools } from "../../FakeBackend/toolsExperiences";
import { spinningIcon } from "../../Services/Utils/toolsExperiences";

const ToolsExperiences = () => {
  useEffect(() => {
    return () => {
      spinningIcon();
    }  
  }, [])
  
  return (
    <div className="layout-container" id="experiences">
      <main className="layout">
        <h2 className="font-bold text-[32px] text-center mb-10">
          Tools & Experiences
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-8 items-start mb-10">
          {/* tools */}
          <div className="min-w-[300px] md:w-[420px] flex flex-wrap gap-4 justify-center lg:justify-start m-auto lg:m-0">
            {tools
              .filter((tool) => !tool.topSkill)
              .map((tool, index) => (
                <div
                  key={index}
                  className="tool-icon flex flex-col items-center justify-center gap-2 w-[86px] md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg p-2 shadow-icon"
                >
                  <div>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <p className="text-xs lg:text-sm mt-4 text-gray-500">
                    {tool.name}
                  </p>
                </div>
              ))}
          </div>
          {/* experiences */}
          <div className="m-auto lg:m-0">
            <div className="w-full m-auto">
              {experiences.map((exp, index) => (
                <a href={exp.company.url} target="_blank" className="flex justify-between mb-5 border-b-[1px] border-gray-200 pb-8 px-4 hover:shadow-icon hover:text-inherit hover:scale-105 transition-all" key={index}>
                  <div className="w-[200px]">
                    <p className="text-primary font-semibold">{exp.date.end}</p>
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-base lg:text-lg">
                      {exp.title}
                    </p>
                    <a href={exp.company.url}>{exp.company.name}</a>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolsExperiences;
