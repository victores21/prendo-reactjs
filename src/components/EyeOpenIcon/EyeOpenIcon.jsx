import { React } from "react";
import Icon from "@material-ui/core/Icon";
import eyeOpenSvg from "../../images/eye-open.svg";

const EyeOpenIcon = () => {
  return (
    <>
      <Icon>
        <img src={eyeOpenSvg} alt="open eye alt" />
      </Icon>
    </>
  );
};

export default EyeOpenIcon;
