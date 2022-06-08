import Head from "next/head";
import ProfileImage from "../components/ProfileImage";

const Index = () => {
  return (
    <main>
      <div className="content">
        <ProfileImage />
        <h2 className="subHeading">Web Developing</h2>
        <div className="content">
          <p>
            Hi Iam Christian. I am a fullstack web developer with a focus on
            frontend. Have a look at my projects if you want to know more.
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
