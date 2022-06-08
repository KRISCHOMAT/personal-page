import Heading from "../components/layout/Heading";
import { getProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import classes from "../styles/layout/ProjectsContainer.module.css";

const Projects = () => {
  const [tags, setTags] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleClick = (e) => {
    if (e.target.checked) {
      setTags((prevTags) => {
        return [...prevTags, e.target.name];
      });
    }
    if (!e.target.checked) {
      const newTags = tags.filter((tag) => tag !== e.target.name);
      setTags(newTags);
    }
  };

  useEffect(() => {
    setProjects(getProjects(tags));
  }, [tags]);

  return (
    <main>
      <Heading title="Projects" />
      <Filter handleClick={handleClick} />
      <div className={classes.container}>
        {projects.length > 1 ? (
          projects.map((project, id) => {
            return (
              <ProjectCard
                key={id}
                title={project.title}
                techs={project.techs}
                links={project.links}
                description={project.description}
                images={project.images}
              />
            );
          })
        ) : (
          <h1>Working On It!</h1>
        )}
      </div>
    </main>
  );
};

export default Projects;
