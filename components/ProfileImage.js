import profile from "../public/images/profile.png";
import classes from "../styles/components/ProfileImage.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const ProfileImage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Parallax speed={-5}>
          <Image src={profile} alt="profile" priority />
        </Parallax>
      </div>
    </div>
  );
};

export default ProfileImage;
