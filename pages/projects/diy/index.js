import Heading from "../../../components/layout/Heading";
import GoBack from "../../../components/GoBack";

const Index = () => {
  return (
    <main>
      <div className="projectHeading">
        <GoBack url="/projects" />
        <Heading title="DIY" />
      </div>
      <div className="content"></div>
    </main>
  );
};

export default Index;
