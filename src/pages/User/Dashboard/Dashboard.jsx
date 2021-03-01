import { React } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "./dashboard.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import myCourses from "../../../images/image-option.png";
import personaliza from "../../../images/personaliza.png";
import crea from "../../../images/crea.png";
import conoce from "../../../images/conoce.png";
import videoImage from "../../../images/video.png";
import calendarSvg from "../../../images/calendar.svg";
import studentGraph from "../../../images/students.png";
import earningChart from "../../../images/chart.png";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import VistaGeneralIcon from "../../../components/VistaGeneralIcon/VistaGeneralIcon";
import ProgramasCursosIcon from "../../../components/ProgramasCursosIcon/ProgramasCursosIcon";
import ConfiguracionIcon from "../../../components/ConfiguracionIcon/ConfiguracionIcon";
import AnaliticaReporteIcon from "../../../components/AnaliticaReporteIcon/AnaliticaReporteIcon";
import MarketingVentasIcon from "../../../components/MarketingVentasIcon/MarketingVentasIcon";
import EstudiantesClientesIcon from "../../../components/EstudiantesClientesIcon/EstudiantesClientesIcon";

import DisenaSitiosIcon from "../../../components/DisenaSitioIcon/DisenaSitioIcon";
import SidebarToggleIcon from "../../../components/SidebarToggleIcon/SidebarToggleIcon";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import MailIcon from "../../../components/MailIcon/MailIcon";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import BellIcon from "../../../components/BellIcon/BellIcon";
import CloudIcon from "../../../components/CloudIcon/CloudIcon";
// import jsonFile from "../../../Api/fakeData/user.json";
import { getUserDashboardInformation } from "../../../Api/fakeData/Services/GetUserInformation";
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
  },
});
const Dashboard = () => {
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [widthContent, setWitdhContent] = useState("68px");
  const [isSidebarCollapsed, setIsSidebarCollapse] = useState(true);
  const toggleSidebarCollapsible = () => {
    console.log("EPALE");
    console.log(isSidebarCollapsed);
    if (isSidebarCollapsed) {
      setWitdhContent("240px");

      setIsSidebarCollapse(false);
    } else {
      setWitdhContent("68px");
      setIsSidebarCollapse(true);
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const classes = useStyles();

  const getDate = () => {
    var today = new Date();
    var todayString;
    today.setDate(today.getDate());
    todayString = ("0" + today.getDate()).slice(-2);
    setDate(todayString);
  };

  const getMonth = () => {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var date = new Date();
    var actualMonth = month[date.getMonth()];
    setMonth(actualMonth);
  };
  useEffect(() => {
    getUserDashboardInformation(1).then((userInformation) => {
      setUser(userInformation);
      console.log(userInformation);
      setLoading(false);
    });
    getDate();
    getMonth();
  }, []);
  if (loading) {
    return (
      <>
        <p>Loading...</p>;
      </>
    );
  } else {
    return (
      <>
        <div
          className="page-wrappers"
          style={{
            gridTemplateColumns: `${widthContent} 1fr`,
            transition: "1s all ease",
          }}
        >
          <div className="navbar-component">
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
                  <p className="user-profile-name__text">{user.name}</p>
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

          <div className="sidebar-component">
            <SideNav
              onToggle={() => toggleSidebarCollapsible()}
              onSelect={(selected) => {
                //Code
              }}
            >
              {/* <SideNav.Toggle /> */}
              <Toggle
                componentClass={(obj) => {
                  return (
                    <button
                      className="sidenav---sidenav-toggle---1KRjR"
                      onClick={obj.onClick}
                    >
                      {isSidebarCollapsed ? (
                        <div className="sidebar-header">
                          <div
                            className="sidebar-header--toggle"
                            style={{
                              transform: "rotateY(180deg)",
                              marginLeft: "23px",
                            }}
                          >
                            <SidebarToggleIcon />
                          </div>
                          <p
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              paddingLeft: "1rem",
                            }}
                          >
                            P
                          </p>
                        </div>
                      ) : (
                        <div
                          className="sidebar-header"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "1rem",
                          }}
                        >
                          <div className="sidebar-header--toggle">
                            <SidebarToggleIcon />
                          </div>
                          <p
                            style={{
                              fontSize: "26px",
                              fontWeight: "bold",
                              paddingLeft: "2.3rem",
                            }}
                          >
                            Prendo
                          </p>
                        </div>
                      )}{" "}
                    </button>
                  );
                }}
              />

              <SideNav.Nav defaultSelected="home" style={{ marginTop: "1rem" }}>
                <NavItem eventKey="home">
                  <NavIcon onClick={() => console.log("yei")}>
                    <VistaGeneralIcon
                      className="menu-item--icon__icon"
                      fill="#fff"
                    />
                  </NavIcon>
                  <NavText>Vista General</NavText>
                </NavItem>
                <NavItem eventKey="programas-cursos">
                  <NavIcon onClick={() => console.log("yei")}>
                    {/* <i className="fas fa-bars menu-item--icon__icon"></i> */}

                    <ProgramasCursosIcon />
                  </NavIcon>
                  <NavText>Programas y Cursos</NavText>
                </NavItem>
                <NavItem eventKey="disena-sitio">
                  <NavIcon onClick={() => console.log("yei")}>
                    {/* <i className="fas fa-bars menu-item--icon__icon"></i> */}
                    <DisenaSitiosIcon />
                  </NavIcon>
                  <NavText>Diseña tu sitio</NavText>
                </NavItem>
                <NavItem eventKey="estudiantes-clientes">
                  <NavIcon onClick={() => console.log("yei")}>
                    {/* <i className="fas fa-bars menu-item--icon__icon"></i> */}
                    <EstudiantesClientesIcon />
                  </NavIcon>
                  <NavText>Estudiantes / Clientes</NavText>
                </NavItem>
                <NavItem eventKey="marketing-ventas">
                  <NavIcon onClick={() => console.log("yei")}>
                    {/* <i className="fas fa-bars menu-item--icon__icon"></i> */}
                    <MarketingVentasIcon />
                  </NavIcon>
                  <NavText>Marketing y ventas</NavText>
                </NavItem>
                <NavItem eventKey="analiticas">
                  <NavIcon onClick={() => console.log("yei")}>
                    {/* <i className="fas fa-bars menu-item--icon__icon"></i> */}
                    <AnaliticaReporteIcon />
                  </NavIcon>
                  <NavText>Analítica y reporte</NavText>
                </NavItem>
                <NavItem eventKey="config" style={{ paddingTop: "11rem" }}>
                  <NavIcon onClick={() => console.log("yei")}>
                    <ConfiguracionIcon />
                  </NavIcon>
                  <NavText>Configuración</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
          </div>

          <div className="content-component">
            <div className="content">
              <div className="content-header">
                <div className="salute">
                  <p className="salute__text">
                    ¡Hola {user.short_name} así van tus programas!
                  </p>
                </div>
                <div className="content-bottom-header">
                  <div className="content-title">
                    <p class="content-title__text">Vista General</p>
                  </div>
                  <div className="calendar-card">
                    <div className="calendar-icon">
                      <img
                        className="calendar--image"
                        src={calendarSvg}
                        alt=""
                      />
                      <div className="calendar--date">
                        <p className="calendar--day">{date}</p>
                        <p className="calendar--month">{month}</p>
                      </div>
                    </div>
                    <div className="courses-information">
                      <p className="course-information__title">
                        Curso de fotografía de alimentos
                      </p>
                      <p className="course-information__helper">
                        Calificar actividad del módulo 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="course-information-cards">
                <div className="left">
                  {/* Card */}
                  <div className="course-information-card">
                    <div className="course-information-card--title">
                      <h2 className="course-information-card--title__text">
                        {user.general.active_courses}
                      </h2>
                    </div>
                    <div className="course-information-card--description">
                      <p className="course-information-card--description__text">
                        Cursos Activos
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="course-information-card">
                    <div className="course-information-card--title">
                      <h2 className="course-information-card--title__text">
                        {user.general.new_oportunities}
                      </h2>
                    </div>
                    <div className="course-information-card--description">
                      <p className="course-information-card--description__text">
                        Nuevas Oportunidades
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="course-information-card">
                    <div className="course-information-card--title">
                      <h2 className="course-information-card--title__text">
                        {user.general.registered_students}
                      </h2>
                    </div>
                    <div className="course-information-card--description">
                      <p className="course-information-card--description__text">
                        Estudiantes registrados
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="course-information-card">
                    <div className="course-information-card--title">
                      <h2 className="course-information-card--title__text">
                        {user.general.given_certificates}
                      </h2>
                    </div>
                    <div className="course-information-card--description">
                      <p className="course-information-card--description__text">
                        Certificados Entregados
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="border"></div>
                  <div className="course-information-card-right">
                    <div className="course-information-card-right--title">
                      <p class="course-information-card-right--title__text">
                        Tus Estudiantes
                      </p>
                    </div>
                    <div className="course-information-card-right--media">
                      <img
                        className="course_infomration-card-right__image"
                        src={studentGraph}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart & options */}
              <div className="earning-options">
                <div className="earnings-stats">
                  <div className="earning-stats-header">
                    <h3 className="earning-stats-title__text">
                      Ganancias reportadas
                    </h3>
                  </div>

                  <div className="earning-main-content">
                    <div className="earning-amount">
                      <h3 className="earning-amount__text">
                        $ {user.earning.total}
                      </h3>
                      <p className="earning-amount__helper">
                        Ganancias Totales
                      </p>
                    </div>
                    <div className="earning-chart">
                      <div className="date">
                        <div className="date--title">
                          <p className="date__text">Últimos 6 meses</p>
                          <i class="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      <div className="chart">
                        <img
                          className="chart__image"
                          src={earningChart}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="earning-per-month">
                    {/* <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                  </Carousel> */}
                  </div>
                </div>

                <div className="settings-cards">
                  {/* Card */}
                  <div className="setting-card">
                    <div className="setting-card--media">
                      <img class="setting-card__image" src={myCourses} alt="" />
                    </div>
                    <div className="setting-card--title special-tus-cursos">
                      <p className="setting-card__text">Tus Cursos</p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="setting-card">
                    <div className="setting-card--media">
                      <img
                        class="setting-card__image"
                        src={personaliza}
                        alt=""
                      />
                    </div>
                    <div className="setting-card--title">
                      <p className="setting-card__text">
                        Personaliza tus sitios
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="setting-card">
                    <div className="setting-card--media">
                      <img class="setting-card__image" src={crea} alt="" />
                    </div>
                    <div className="setting-card--title">
                      <p className="setting-card__text">Crea una campaña</p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="setting-card">
                    <div className="setting-card--media">
                      <img class="setting-card__image" src={conoce} alt="" />
                    </div>
                    <div className="setting-card--title">
                      <p className="setting-card__text">Conoce tus clientes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="row--title">
                  <h2 className="row__text">Conoce como crear...</h2>
                </div>

                <div className="news-cards">
                  <div className="news-card">
                    <div className="news-card--media">
                      <img
                        className="news-card--media__item"
                        src={videoImage}
                        alt=""
                      />
                    </div>
                    <div className="news-card-information">
                      <div className="news-card-information--title">
                        <h3 className="news_card_information__text">
                          Embudos de conversión
                        </h3>
                      </div>
                      <div className="news-card-information--description">
                        <p className="news-card-information__text">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor
                          sit amet, consetetur sadipscing elitr, sed diam nonumy
                          eirmod tempor
                        </p>
                      </div>
                      <div className="news-card-button">
                        <a href="/" class="btn btn-rounded">
                          Inicia ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
