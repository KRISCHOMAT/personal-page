import profile from "../public/images/profile.png";
import classes from "../styles/components/ProfileImage.module.css";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className={classes.container}>
      <Image
        src={profile}
        alt="profile"
        layout={"fill"}
        objectFit={"cover"}
        priority
      />
    </div>
  );
};

export default ProfileImage;
