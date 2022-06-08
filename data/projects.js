export const projects = [
  {
    title: "ToDoOrNotToDo",
    images: ["/images/todo/todo-dash.jpg", "/images/todo/todo-reg.jpg"],
    description:
      "An App I made to deepen my knowledge about the MERN Stack. It is a to do list made with React.js, Node.js and MongoDB as a database. It has features such as making friend requests, adding friends to lists and also a live-notification.",
    techs: ["React", "Node.js", "mongoDB"],
    links: [
      {
        url: "https://todoornottodo.krischomat.de/",
        name: "Live",
        icon: "icon",
      },
      {
        url: "https://github.com/KRISCHOMAT/to-to-or-not-to-do",
        name: "GitHub",
        icon: "icon",
      },
    ],
    tags: ["web", "backend", "frontend"],
  },
  {
    title: "Kosmorama",
    images: [
      "/images/kosmorama/kosmorama-1.jpg",
      "/images/kosmorama/kosmorama-2.jpg",
    ],
    description:
      "A website for the band Kosmorama. It has a custom design with a intro animation made with HTML Canvas.",
    techs: ["React", "Node.js", "mongoDB"],
    links: [
      {
        url: "https://www.kosmorama-music.com/",
        name: "Live",
        icon: "icon",
      },
      {
        url: "https://github.com/KRISCHOMAT/kosmorama",
        name: "GitHub",
        icon: "icon",
      },
    ],
    tags: ["web", "frontend"],
  },
  {
    title: "Web Seqeuncer",
    images: [
      "/images/web-sq/web-sq2.jpg",
      "/images/web-sq/web-sq1.jpg",
      "/images/web-sq/web-sq3.jpg",
      "/images/web-sq/web-sq4.jpg",
      "/images/web-sq/web-sq5.jpg",
    ],
    description:
      "A first version of my multichannel web-synthesizer. You can create a sequence or log into a sequence as a step.",
    techs: ["React", "Node", "Socket.IO"],
    links: [
      {
        url: "https://web-sq.krischomat.de/",
        name: "Live",
        icon: "icon",
      },
      {
        url: "https://github.com/KRISCHOMAT/multi-synth",
        name: "GitHub",
        icon: "icon",
      },
    ],
    tags: ["backend", "frontend", "music"],
  },
  {
    title: "Sound Memory",
    images: [
      "/images/sound-memory/sound-dash.jpg",
      "/images/sound-memory/sound-reg.jpg",
    ],
    description:
      "A memory game with sound. Instead of finding matching images, you need to find matching sounds.",
    techs: ["HTML", "JavaScript", "CSS"],
    links: [
      {
        url: "https://sound-memory.49.12.247.10.sslip.io/",
        name: "Live",
        icon: "icon",
      },
      {
        url: "https://github.com/KRISCHOMAT/sound-memory",
        name: "GitHub",
        icon: "icon",
      },
    ],
    tags: ["web", "frontend", "music"],
  },
  {
    title: "Personal Page",
    images: [
      "/images/personal-page/personal1.jpg",
      "/images/personal-page/personal2.jpg",
      "/images/personal-page/personal3.jpg",
      "/images/personal-page/personal4.jpg",
      "/images/personal-page/personal5.jpg",
    ],
    description:
      "My personal page as a developer with a showcase of some of my project",
    techs: ["NEXT", "Node", "mongoDB"],
    links: [
      {
        url: "https://www.christian-grothe.com/",
        name: "Live",
        icon: "icon",
      },
    ],
    tags: ["frontend"],
  },
];

export const getProjects = (tags) => {
  if (tags.length === 0) {
    return projects;
  }
  const filteredProjects = projects.filter((project) =>
    tags.some((item) => project.tags.includes(item))
  );

  return filteredProjects;
};
