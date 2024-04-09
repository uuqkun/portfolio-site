import { experiences, tools } from "../../FakeBackend/toolsExperiences";

const ToolsExperiences = () => {
  return (
    <div className="layout-container" id="experiences">
      <main className="layout">
        <h2 className="font-bold text-[32px] text-center mb-10">
          Tools & Experiences
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start w-[80%] m-auto mb-10">
          {/* tools */}
          <div className="w-[300px] md:w-[420px] flex flex-wrap gap-4 justify-center lg:justify-start m-auto">
            {tools
              .filter((tool) => !tool.topSkill)
              .map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 w-[86px] md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg p-2"
                >
                  <div>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <p className="text-sm lg:text-base mt-4">
                    {tool.name}
                  </p>
                </div>
              ))}
          </div>
          {/* experiences */}
          <div>
            <div className="w-full md:w-full m-auto">
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
