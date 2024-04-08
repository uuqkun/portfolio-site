import { HeaderBg } from "../../Assets/Images";
import {
  CTA,
  CaseStudy,
  Footer,
  Header,
  Navbar,
  ToolsExperiences,
} from "../../Layouts";

const Home = () => {
  return (
    <div>
      <img
        src={HeaderBg}
        alt="Header background"
        className="absolute top-0 left-0 w-full h-[80vh] lg:h-[90vh] object-cover object-left lg:object-center"
      />

      <Navbar />
      <Header />
      <ToolsExperiences />
      <CaseStudy />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
