import ProjectBanner from "../../components/ProjectBanner";
import synth from "../../public/images/diy.jpg";
import code from "../../public/images/code.jpg";
import studio from "../../public/images/studio.jpg";
import Heading from "../../components/layout/Heading";

const Projects = () => {
  return (
    <main>
      <Heading title="Projects" />

      <div className="content marginTop">
        <ProjectBanner name="Web" image={code} url="/projects/web" />
        <ProjectBanner name="Music" image={studio} url="/projects/music" />
        <ProjectBanner name="DIY" image={synth} url="projects/diy" />
      </div>
    </main>
  );
};

export default Projects;
