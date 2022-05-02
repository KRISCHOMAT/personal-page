import Heading from "../components/layout/Heading";

const about = () => {
  return (
    <main>
      <Heading title="About" />
      <div className="content">
        <h2>My Story</h2>
        <p>
          During my journey as a musician, I found out that I like experimenting
          with electronics. I started doing effects with Max/MSP and some years
          later I found myself building an analog synthesizer from scratch. From
          there I started to explore the possibilites of microcontrollers like
          the Teensy or the Arduino which brought me to programming. So I got
          interested in learning more about it and also went into the
          web-developing direction. After refreshing my skills in HTML and CSS,
          which I already did a bit as a teenager, I started to learn Node.js,
          MongoDB, React.js and Next.js, just to find out that I have the same
          passion working with these technologies that I have fiddeling around
          with my instruments. But bringing these two worlds together is
          something I realy like to do. For example building and programming an
          instrument for a dance performance or just continue to work on my
          modular synth.
        </p>
        <p>
          The most important lesson I learned so far is that there is nothing
          you cannot learn. All the knowlege is just available. The only thing
          that counts is to not give up and the solution will come. <br />
          So if you want to collaborate on a project or hire me as a frontend
          and/or backend developer, I am happy to read your message!
        </p>
      </div>
    </main>
  );
};

export default about;
