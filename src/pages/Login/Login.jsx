import { React } from "react";
import logo from "../../images/Foto.png";
import "../Login/Login.scss";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="hero">
          <div className="hero-left">
            <img className="hero-left__image" src={logo} alt="" />
          </div>
          <div className="hero-right">
            <div className="hero-right__title">
              <h1 className="hero-right__title--text">Iniciar sesión</h1>
            </div>
            <div className="hero-right__description">
              <p className="hero-right__description--text">
                Selecciona como deseas ingresar a la plataforma
              </p>
            </div>
            <div className="hero-right_socials">
              <button className="hero-right__social-buttons">F</button>
              <button className="hero-right__social-buttons">G</button>
              <button className="hero-right__social-buttons">in</button>
            </div>
            <div className="form">
              <div className="form__input">
                <label className="pure-material-textfield-outlined">
                  <input placeholder=" " />
                  <span>Correo electronico</span>
                </label>
              </div>
              <div className="form__input">
                <label className="pure-material-textfield-outlined">
                  <input placeholder=" " />
                  <span>Contraseña</span>
                </label>
              </div>
              <div className="form__forgotpass">
                <a className="form_forgotpass--text">
                  ¿Olvidaste la contraseña?
                </a>
              </div>
              <div className="form__login">
                <button className="form__login--button">Iniciar sesión</button>
              </div>

              <div className="form__signup">
                <p>
                  ¿Aún no tienes cuenta?{" "}
                  <a href="#" class="text--primary">
                    Regístrate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
