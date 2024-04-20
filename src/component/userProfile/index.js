import profileImg from "../../assets/images/pf2.jpg";

import "../../assets/scss/style.scss";
import "./index.css";

export default function UserProfile() {
  return (
    <div className="col-lg-12">
      <div className="profile-detail">
        <div className="row right-title">
          <div className="col-sm-1 col-2 icob">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="col-sm-11 col-10 titb">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about row">
          <div className="col-md-4 bimg">
            <img src={profileImg} alt="" />
          </div>
          <div className="col-md-8 about-detail">
            <div className="detal-jumbo">
              <h3>Hellow I'm Web Designer / Developer</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries,
              </p>
            </div>
            <div className="links">
              <div className="row ">
                <div className=" col-md-12">
                  <ul className="btn-link">
                    <li className="hire">
                      <a href="">
                        <i className="fas fa-paper-plane"></i> Hire Me
                      </a>
                    </li>
                    <li className="download">
                      <a href="">
                        <i className="fas fa-cloud-download-alt"></i> Download
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="personali">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>{" "}
                  John Smith
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Toranto, Canada
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                  johnsmit07@gmail.com
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-calendar"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>{" "}
                  28 Years Old
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-phone-call"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>{" "}
                  +98 987 778 7676{" "}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{" "}
                  United States
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="title-2 row no-margin">
          <h2>My Skills</h2>
        </div>

        <div className="skills row">
          <div className="col-md-3 col-6 skilcol">
            <div className="c100 p80 big">
              <span>80%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6>Angular JS</h6>
          </div>
          <div className="col-md-3 col-6 skilcol">
            <div className="c100 p75 big">
              <span>75%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>

            <h6>Bootstrap</h6>
          </div>
          <div className="col-md-3 col-6 skilcol">
            <div className="c100 p90 big">
              <span>90%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6>PHP</h6>
          </div>
          <div className="col-md-3 col-6 skilcol">
            <div className="c100 p85 big">
              <span>85%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>

            <h6>Node JS</h6>
          </div>
        </div>

        <div id="services" className="title-2 row no-margin">
          <h2>My Services</h2>
        </div>

        <div className="services">
          <div className="service-row no-margin row">
            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-image"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>Graphic Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-globe"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>Website Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>Web Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>Android Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-navigation"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>IOS Add Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="seervic-col row">
                <div className="col-2 no-padding icons">
                  <div className="iconder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                </div>
                <div className="col-10 sdrtg">
                  <h4>Ionic Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="title-2 row no-margin">
          <h2>My Hobbies</h2>
        </div>

        <div className="hobbies">
          <div className="row no-margin hoby-row">
            <ul className="hoby row no-margin">
              <li>
                <i className="fas fa-pencil-alt"></i> Writing
              </li>
              <li>
                <i className="fas fa-bicycle"></i> Cycling
              </li>
              <li>
                <i className="fas fa-futbol"></i> Football
              </li>
              <li>
                <i className="fas fa-film"></i> Movies
              </li>
              <li>
                <i className="fas fa-plane-departure"></i> Travel
              </li>
              <li>
                <i className="fas fa-gamepad"></i> Games
              </li>
            </ul>
          </div>
        </div>

        <div className="row right-title">
          <div className="col-sm-1 col-2 icob">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="col-sm-11 col-10 titb">
            <h2>Hire Me</h2>
          </div>
        </div>

        <div className="hire-me-row no-margin row">
          <div className="col-md-6">
            <div className="row singe-col">
              <div className="col-2 icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="col-10 pl-0 drtg">
                <b>Address</b>
                <p>Toranto, Canada</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row singe-col">
              <div className="col-2 icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="col-10 pl-0 drtg">
                <b>Phone</b>
                <p>+98 7878 776 743</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row singe-col">
              <div className="col-2 icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="col-10 pl-0 drtg">
                <b>Email </b>
                <p>johnsmith007@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row singe-col">
              <div className="col-2 icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-clock"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="col-10 pl-0 drtg">
                <b>Working Hours</b>
                <p>Daily 09:00AM TO 06:00PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row right-title">
          <div className="col-sm-1 col-2 icob">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="col-sm-11 col-10 titb">
            <h2>My Resume</h2>
          </div>
        </div>

        <div className="resume-cover">
          <div className="row">
            <div className="col-md-12">
              <ul className="cbp_tmtimeline">
                <li>
                  <time className="cbp_tmtime">
                    <span className="hidden">2020 - PRESENT</span>
                  </time>

                  <div className="cbp_tmicon">
                    <i className="fas fa-desktop"></i>
                  </div>

                  <div className="cbp_tmlabel empty">
                    {" "}
                    <span>
                      <h4>Front-End Developer</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem voluptatibus, maiores suscipit sequi
                        veritatis saepe aspernatur.
                      </p>
                    </span>{" "}
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime">
                    <span>2018 - 2020</span>
                  </time>

                  <div className="cbp_tmicon bg-info">
                    <i className="fas fa-paint-brush"></i>
                  </div>

                  <div className="cbp_tmlabel">
                    <h4>UI Developer</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime" datetime="2017-11-03T13:22">
                    <span>2015 -2017</span>{" "}
                  </time>
                  <div className="cbp_tmicon bg-green">
                    {" "}
                    <i className="fas fa-globe-africa"></i>
                  </div>
                  <div className="cbp_tmlabel">
                    <h4>Web Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime" datetime="2017-10-22T12:13">
                    <span>2013 - 2015</span>
                  </time>
                  <div className="cbp_tmicon bg-blush">
                    <i className="fab fa-gripfire"></i>
                  </div>
                  <div className="cbp_tmlabel">
                    <h4>Graphic Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="title-2 row no-margin">
          <h2>Educational Details</h2>
        </div>

        <div className="resume-cover">
          <div className="row">
            <div className="col-md-12">
              <ul className="cbp_tmtimeline">
                <li>
                  <time className="cbp_tmtime">
                    <span className="hidden">2012 - 2014</span>
                  </time>

                  <div className="cbp_tmicon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>

                  <div className="cbp_tmlabel empty">
                    {" "}
                    <span>
                      <h4>Computer Engineering</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem voluptatibus, maiores suscipit sequi
                        veritatis saepe aspernatur.
                      </p>
                    </span>{" "}
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime">
                    <span>2008 - 2013</span>
                  </time>

                  <div className="cbp_tmicon bg-info">
                    <i className="fas fa-user-graduate"></i>
                  </div>

                  <div className="cbp_tmlabel">
                    <h4>UG Information Technology</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime" datetime="2017-11-03T13:22">
                    <span>2015 -2017</span>{" "}
                  </time>
                  <div className="cbp_tmicon bg-green">
                    {" "}
                    <i className="fas fa-school"></i>
                  </div>
                  <div className="cbp_tmlabel">
                    <h4>High School</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
                <li>
                  <time className="cbp_tmtime" datetime="2017-10-22T12:13">
                    <span>2013 - 2015</span>
                  </time>
                  <div className="cbp_tmicon bg-blush">
                    <i className="fas fa-chalkboard"></i>
                  </div>
                  <div className="cbp_tmlabel">
                    <h4>Primary School</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="contactus" className="row right-title pt-4">
            <div className="col-sm-1 col-2 icob">
                <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="col-sm-11 col-10 titb">
                <h2>Contact Me</h2>
            </div>
        </div>

        <div className="contact-us">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80857844595!2d-79.51814399835!3d43.71840381259961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1586433312399!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

        
      </div>
    </div>
  );
}
