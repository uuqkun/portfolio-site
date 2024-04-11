import {
  CaseStudy,
  Footer,
  Header,
  Navbar,
  ToolsExperiences,
} from "../../Layouts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ToolsExperiences />
      <CaseStudy />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
};

export default Home;
