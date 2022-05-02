import Heading from "../../../components/layout/Heading";
import GoBack from "../../../components/GoBack";
import WebCard from "../../../components/WebCard";
import { webProjects } from "../../../data/web-data";

const Index = () => {
  return (
    <main>
      <div className="projectHeading">
        <GoBack url="/projects" />
        <Heading title="Web" />
      </div>
      <div className="content">
        {webProjects.map((project, index) => {
          return (
            <WebCard
              key={index}
              title={project.title}
              images={project.images}
              techs={project.techs}
              links={project.links}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Index;
