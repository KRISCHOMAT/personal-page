import { todoImg } from "../../public/images/todo";
import { kosmoImg } from "../../public/images/kosmorama";
import { soundImg } from "../../public/images/sound-memory";

import kosmoMusicImg from "../../public/images/music/kosmo-vid-still-edit.jpg";
import krysheMusicImg from "../../public/images/music/kryshe.jpg";
import nataliaMusicImg from "../../public/images/music/natalia-mateo.jpg";

export const webProjects = [
  {
    title: "To Do Or Not To Do",
    techs: ["react", "node.js", "mongoDB"],
    links: [
      { name: "Live", url: "https://todoornottodo.krischomat.de/" },
      {
        name: "GitHub",
        url: "https://github.com/KRISCHOMAT/to-to-or-not-to-do",
      },
    ],
    images: todoImg,
  },
  {
    title: "Sound Memory",
    techs: ["HTML", "Javascrip", "Bootstrap"],
    links: [
      { name: "Live", url: "https://sound-memory.49.12.247.10.sslip.io/" },
      { name: "GitHub", url: "https://github.com/KRISCHOMAT/sound-memory" },
    ],
    images: soundImg,
  },
  {
    title: "Kosmorama",
    techs: ["react", "canvas"],
    links: [
      { name: "Live", url: "https://www.kosmorama-music.com/" },
      { name: "GitHub", url: "https://github.com/KRISCHOMAT/kosmorama" },
    ],
    images: kosmoImg,
  },
];

export const musicPorjects = [
  {
    title: "Kosmorama",
    image: kosmoMusicImg,
    info: "The duo Kosmorama is playing cosmic Jazz music with trumpet, selfmade synths and sampler.",
    sideInfo:
      "Gregor Lener: Trumpet || Christian Grothe: DIY Synths & Samplers",
    links: [
      { url: "https://www.kosmorama-music.com/", title: "Website" },
      { url: "https://www.kosmorama-music.com/", title: "YouTube" },
      { url: "https://www.kosmorama-music.com/", title: "BandCamp" },
    ],
  },
  {
    title: "Kryshe",
    image: krysheMusicImg,
    info: "My solo project",
    sideInfo:
      "Christian Grothe: DIY Synths & Samplers, Circuit-Bending, Trumpet",
    links: [
      {
        url: "https://www.youtube.com/channel/UC16Iagn_SgUKrbaLI99wccA",
        title: "YouTube",
      },
      { url: "https://kryshe.bandcamp.com/", title: "BandCamp" },
    ],
  },
  {
    title: "Natalia Mateo Trio",
    image: nataliaMusicImg,
    info: "",
    sideInfo:
      "Natalia Mateo: Voc || Bertram Burkert: Gitarre || Christian Grothe: Sampling & Synths",
    links: [],
  },
];

export const diyProjects = [];
