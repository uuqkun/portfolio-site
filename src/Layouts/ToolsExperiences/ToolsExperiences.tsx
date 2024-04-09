import { experiences, tools } from "../../FakeBackend/toolsExperiences";

const ToolsExperiences = () => {
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
                  className="flex flex-col items-center justify-center gap-2 w-[86px] md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg p-2 shadow-icon"
                >
                  <div>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <p className="text-xs lg:text-base mt-4">
                    {tool.name}
                  </p>
                </div>
              ))}
          </div>
          {/* experiences */}
          <div className="m-auto lg:m-0">
            <div className="w-full m-auto">
              {experiences.map((exp, index) => (
                <div className="flex justify-between mb-5" key={index}>
                  <div className="w-[200px]">
                    <p className="text-primary">{exp.date.end}</p>
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-base lg:text-lg">
                      {exp.title}
                    </p>
                    <p>{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToolsExperiences;
