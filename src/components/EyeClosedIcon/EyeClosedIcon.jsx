import { React } from "react";
import Icon from "@material-ui/core/Icon";
import eyeClosedIcon from "../../images/eye-closed.svg";

const EyeClosedIcon = () => {
  return (
    <>
      <Icon>
        <img src={eyeClosedIcon} alt="open eye alt" />
      </Icon>
    </>
  );
};

export default EyeClosedIcon;
