import Heading from "../components/layout/Heading";
import ProfileImage from "../components/ProfileImage";

const Index = () => {
  return (
    <main>
      <div className="content">
        <ProfileImage />
        <h2 className="subHeading">Freelance web developer & music producer</h2>
        <div className="content">
          <p>
            Hi, I am Christian. I make music, love programming and developing
            and I am building my own electronic instruments. Have a look at my
            projects if you want to know more.
          </p>
          <p>
            Don´t hesitate to get in touch. I am happy to read your message!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
