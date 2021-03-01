import { React, useState } from "react";
import logo from "../../images/Foto.png";
import "../Login/Login.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import googleIcon from "../../images/google-icon.svg";

import EyeOpenIcon from "../../components/EyeOpenIcon/EyeOpenIcon";
import EyeClosedIcon from "../../components/EyeClosedIcon/EyeClosedIcon";

const useStyles = makeStyles((theme) => ({
  inputClass: {
    width: "410px",
  },
  customIcon: {
    width: "100%",
    height: "100%",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [formInformation, setFormInformation] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");

  const handleChange = (prop) => (event) => {
    setFormInformation({ ...formInformation, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormInformation({
      ...formInformation,
      showPassword: !formInformation.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailValid = () => {
    const emailRegexValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailRegexValidator.test(
      String(formInformation.email).toLowerCase()
    );

    setIsEmailValid(result);
  };

  const handlePasswordValid = () => {
    if (formInformation.password.length > 5) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handlePasswordValid();
    handleEmailValid();

    //MOCK USER LOGIN

    if (
      formInformation.email === "admin@admin.com" &&
      formInformation.password === "123456"
    ) {
      console.log("yes");
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="hero">
          <div className="hero-left">
            <img className="hero-left__image" src={logo} alt="" />
          </div>
          <div className="hero-right">
            <form>
              <div className="row">
                <div className="hero-right__title">
                  <h1 className="hero-right__title--text">Iniciar sesión</h1>
                </div>
                <div className="hero-right__description">
                  <p className="hero-right__description--text">
                    Selecciona como deseas ingresar a la plataforma
                  </p>
                </div>
                <div className="hero-right__socials">
                  <Button
                    variant="contained"
                    color="primary"
                    className="hero-right__social-button facebook-background--color"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="hero-right__social-button google-background--color google--button"
                  >
                    <img
                      className="form-input__image"
                      src={googleIcon}
                      alt=""
                    />
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="hero-right__social-button linkedin-background--color"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Button>
                </div>
                <div className="form">
                  <div className="form__input">
                    <TextField
                      className={classes.inputClass}
                      id="outlined-basic"
                      label="Correo electronico"
                      variant="outlined"
                      error={isEmailValid === false}
                      onChange={handleChange("email")}
                    />
                  </div>
                  <div className="form__input">
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.textField,
                        classes.inputClass
                      )}
                      variant="outlined"
                      error={isPasswordValid === false}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        className="font-600"
                      >
                        Contraseña
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={
                          formInformation.showPassword ? "text" : "password"
                        }
                        value={formInformation.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {formInformation.showPassword ? (
                                <EyeOpenIcon className={classes.customIcon} />
                              ) : (
                                <EyeClosedIcon className={classes.customIcon} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </div>
                  <div className="form__forgotpass">
                    <a href={"/"} className="form_forgotpass--text">
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
                  <div className="form__login">
                    <Button
                      variant="contained"
                      color="primary"
                      className="form__login--button"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Iniciar sesión
                    </Button>
                  </div>

                  <div className="form-signup">
                    <p className="form-signup--text">
                      ¿Aún no tienes cuenta?{" "}
                      <a href={"/"} className="form-signup--signup">
                        Regístrate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
