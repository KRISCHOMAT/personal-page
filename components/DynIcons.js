import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

const DynIcons = ({ icon }) => {
  if (icon === "Live") {
    return <CgWebsite size={30} />;
  }

  if (icon === "GitHub") {
    return <AiFillGithub size={30} />;
  }
};

export default DynIcons;
