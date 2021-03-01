import { React } from "react";
import "./navbar.scss";

//Custom Icons
import MailIcon from "../../../components/MailIcon/MailIcon";
import BellIcon from "../../../components/BellIcon/BellIcon";
import CloudIcon from "../../../components/CloudIcon/CloudIcon";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className="navbar-component animate__animated animate__backInDown">
        <div className="search-bar">
          <div className="search-input-container">
            <div className="search-input__icon">{/* <p>Icon</p> */}</div>
            <div className="search-input__textfield">
              {/* <input type="text" placeholder="sarch" /> */}
              <TextField
                id="input-with-icon-textfield"
                placeholder="Buscar"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#8395A7" }} />
                    </InputAdornment>
                  ),
                  classes,
                }}
              />
            </div>
          </div>
        </div>
        <div className="user-notification">
          <div className="notification-icons">
            <div className="notification-card-icon">
              <div className="notification-card-icon--icon notification-card-icon__cloud">
                {/* <IconButton aria-label="show 4 new mails" color="#8395A7">
                      <Badge badgeContent={1} color="secondary"> */}
                <CloudIcon className="notification-card-icon__cloud" />
                {/* </Badge>
                    </IconButton> */}
                {/* <i className="fas fa-bell"></i> */}
              </div>
            </div>
            <div className="notification-card-icon">
              <div className="notification-card-icon--icon notification-card-icon__bell">
                {/* <i className="fas fa-bell"></i> */}
                {/* <IconButton aria-label="show 4 new mails" color="#8395A7">
                      <Badge badgeContent={2} color="#10AC84"> */}
                <BellIcon />
                {/* </Badge>
                    </IconButton> */}
              </div>
            </div>
            <div className="notification-card-icon">
              <div className="notification-card-icon--icon notification-card-icon__mail">
                {/* <i className="fas fa-bell"></i> */}
                {/* <IconButton aria-label="show 4 new mails" color="#8395A7">
                      <Badge badgeContent={3} color="#54A0FF"> */}
                <MailIcon />
                {/* </Badge> */}
                {/* </IconButton> */}
              </div>
            </div>
          </div>

          <div className="user-profile">
            <div className="user-profile-avatar-card">
              <div className="user-profile-avatar-card--image">
                <img
                  class="user__image"
                  src="https://cistitisderepeticion.com/wp-content/uploads/2015/12/sexo-mujer-cistitis-infeccion-urinaria-960x720.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="user-profile-name">
              <p className="user-profile-name__text">Liliana</p>
              <i class="fas fa-chevron-down"></i>
              <div className="user-profile-dropdown">
                <div className="user-profile-dropdown-item">
                  <div className="user-profile-dropdown-icon">
                    <i className="fas fa-bell user-profile-dropdown-icon__icon"></i>
                  </div>
                  <div className="user-profile-dropdown-option">
                    <p className="user-profile-dropdown-option__text">
                      Mi cuenta
                    </p>
                  </div>
                </div>
                <div className="user-profile-dropdown-item">
                  <div className="user-profile-dropdown-icon">
                    <i className="fas fa-bell user-profile-dropdown-icon__icon"></i>
                  </div>
                  <div className="user-profile-dropdown-option">
                    <p className="user-profile-dropdown-option__text">
                      Mi cuenta
                    </p>
                  </div>
                </div>
                <div className="user-profile-dropdown-item">
                  <div className="user-profile-dropdown-icon">
                    <i className="fas fa-bell user-profile-dropdown-icon__icon"></i>
                  </div>
                  <div className="user-profile-dropdown-option">
                    <p className="user-profile-dropdown-option__text">
                      Mi cuenta
                    </p>
                  </div>
                </div>
                <div className="user-profile-dropdown-item">
                  <div className="user-profile-dropdown-icon">
                    <i className="fas fa-bell user-profile-dropdown-icon__icon"></i>
                  </div>
                  <div className="user-profile-dropdown-option">
                    <p className="user-profile-dropdown-option__text">
                      Mi cuenta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
