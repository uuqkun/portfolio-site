import {
  ArrowRight,
  EvenCaseStudy,
  FooterGithub,
  OddCaseStudy,
  PreviewNetbook,
} from "../../Assets/Images";
import { Button } from "../../Components";
import { cases } from "../../FakeBackend/studyCase";

const CaseStudy = () => {
  return (
    <div className="layout-container" id="case-study">
      <main className="layout">
        <div className="bg-gray-50 w-full h-full absolute -z-[999] left-0" />
        <h2 className="font-bold text-[32px] text-center mb-10 pt-10">
          Latest Case Studies
        </h2>

        <div>
          {/* case studies */}
          {cases.map((item, index) => (
            <div className="flex flex-col md:flex-row gap-4 items-start bg-white shadow-icon rounded-xl mb-10 overflow-hidden">
              <div className="p-5 lg:p-8 w-full">
                <img
                  src={index % 2 === 0 ? EvenCaseStudy : OddCaseStudy}
                  alt={item.title}
                  className="mb-4 w-12 md:w-14"
                />
                <p className="uppercase text-gray-400 text-xs md:text-sm">
                  {item.categories.join(" / ")}
                </p>
                <h3 className="font-bold text-[24px] lg:text-[28px] my-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    text="View Case Study"
                    variant="btn-primary btn-outline"
                    onClick={() => window.open(item.url, "_blank")}
                  />
                  <a href={item.repo} className="p-2">
                    <img
                      src={FooterGithub}
                      alt={item.title + " Source code"}
                      className="w-5 lg:w-6 hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  </a>
                </div>
              </div>
              <div className="w-full h-[200px] md:h-full object-cover">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;
