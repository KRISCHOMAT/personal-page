import Heading from "../../../components/layout/Heading";
import GoBack from "../../../components/GoBack";
import MusicCard from "../../../components/MusicCard";
import { musicPorjects } from "../../../data/web-data";

const Index = () => {
  return (
    <main>
      <div className="projectHeading">
        <GoBack url="/projects" />
        <Heading title="Music" />
      </div>
      <div className="content">
        {musicPorjects.map((project, index) => {
          return (
            <MusicCard
              key={index}
              title={project.title}
              image={project.image}
              info={project.info}
              links={project.links}
              sideInfo={project.sideInfo}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Index;
