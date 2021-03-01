import { React, useState, useEffect } from "react";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
//Custom Styles
import "./dashboard.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "react-multi-carousel/lib/styles.css";
//Images
import myCourses from "../../../images/image-option.png";
import personaliza from "../../../images/personaliza.png";
import crea from "../../../images/crea.png";
import conoce from "../../../images/conoce.png";
import videoImage from "../../../images/video.png";
import calendarSvg from "../../../images/calendar.svg";
import studentGraph from "../../../images/students.png";
import earningChart from "../../../images/chart.png";

//CUSTOM ICONS
import VistaGeneralIcon from "../../../components/VistaGeneralIcon/VistaGeneralIcon";
import ProgramasCursosIcon from "../../../components/ProgramasCursosIcon/ProgramasCursosIcon";
import ConfiguracionIcon from "../../../components/ConfiguracionIcon/ConfiguracionIcon";
import AnaliticaReporteIcon from "../../../components/AnaliticaReporteIcon/AnaliticaReporteIcon";
import MarketingVentasIcon from "../../../components/MarketingVentasIcon/MarketingVentasIcon";
import EstudiantesClientesIcon from "../../../components/EstudiantesClientesIcon/EstudiantesClientesIcon";
import DisenaSitiosIcon from "../../../components/DisenaSitioIcon/DisenaSitioIcon";
import SidebarToggleIcon from "../../../components/SidebarToggleIcon/SidebarToggleIcon";

//Fake API DATA
import { getUserDashboardInformation } from "../../../Api/fakeData/Services/GetUserInformation";

//Components
import Navbar from "../../../components/global/Navbar/Navbar";
import Button from "@material-ui/core/Button";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Dashboard = () => {
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [widthContent, setWitdhContent] = useState("68px");
  const [isSidebarCollapsed, setIsSidebarCollapse] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleSidebarCollapsible = () => {
    setWindowWidth(window.innerWidth);
    if (isSidebarCollapsed) {
      setWitdhContent("240px");

      setIsSidebarCollapse(false);
    } else {
      setWitdhContent("68px");
      setIsSidebarCollapse(true);
    }
  };

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
        <div className="loading-page">
          <BounceLoader css={override} color="#6C5DD3" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="page-wrappers"
          style={{
            gridTemplateColumns:
              windowWidth < 1024 ? "68px 1fr" : `${widthContent} 1fr`,
            transition: "1s all ease",
          }}
        >
          <Navbar user={user} />

          <div className="sidebar-component animate__animated animate__backInLeft">
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
                <div className="salute animate__animated animate__backInLeft">
                  <p className="salute__text">
                    ¡Hola {user.short_name} así van tus programas!
                  </p>
                </div>
                <div className="content-bottom-header">
                  <div className="content-title">
                    <p class="content-title__text animate__animated animate__backInLeft">
                      Vista General
                    </p>
                  </div>
                  <div className="calendar-card animate__animated animate__backInRight">
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

              <div className="course-information-cards animate__animated animate__backInRight">
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
              <div className="earning-options ">
                <div className="earnings-stats animate__animated animate__backInLeft">
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
                    <div className="earning-per-month-card">
                      <div className="earning-per-month--title">
                        <div className="earning-per-month__text">Octubre</div>
                      </div>

                      <div className="earning-per-month--amount">
                        <div className="earning-per-month__text">$629.75</div>
                      </div>
                    </div>
                    <div className="earning-per-month-card">
                      <div className="earning-per-month--title">
                        <div className="earning-per-month__text">Octubre</div>
                      </div>

                      <div className="earning-per-month--amount">
                        <div className="earning-per-month__text">$629.75</div>
                      </div>
                    </div>
                    <div className="earning-per-month-card">
                      <div className="earning-per-month--title">
                        <div className="earning-per-month__text">Octubre</div>
                      </div>

                      <div className="earning-per-month--amount">
                        <div className="earning-per-month__text">$629.75</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="settings-cards">
                  {/* Card */}
                  <div className="setting-card animate__animated animate__backInRight">
                    <div className="setting-card--media">
                      <img class="setting-card__image" src={myCourses} alt="" />
                    </div>

                    <div className="setting-card--title special-tus-cursos">
                      <p className="setting-card__text">Tus Cursos</p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="setting-card animate__animated animate__backInRight">
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
                  <div className="setting-card animate__animated animate__backInRight">
                    <div className="setting-card--media">
                      <img class="setting-card__image" src={crea} alt="" />
                    </div>
                    <div className="setting-card--title">
                      <p className="setting-card__text">Crea una campaña</p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="setting-card animate__animated animate__backInRight">
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
                <div className="row--title animate__animated animate__backInLeft">
                  <h2 className="row__text">Conoce como crear...</h2>
                </div>

                <div className="news-cards">
                  <div className="news-card">
                    <div className="news-card--media animate__animated animate__backInLeft">
                      <img
                        className="news-card--media__item"
                        src={videoImage}
                        alt=""
                      />
                    </div>
                    <div className="news-card-information animate__animated animate__backInRight">
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
                        <Button className="btn" variant="contained">
                          {" "}
                          Inicia ahora
                        </Button>
                        {/* <a href="/" class="btn btn-rounded">
                          Inicia ahora
                        </a> */}
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
