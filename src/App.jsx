// Imports
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import linkedinLogo from "./assets/images/shared/linkedinLogo.webp";
import githubLogo from "./assets/images/shared/githubLogo.webp";
import headerHamburger from "./assets/images/headerHamburger.webp";
import closeIcon from "./assets/images/shared/closeIcon.webp";
import Sectionhead from "./components/sectionhead/Sectionhead";
import homeLogo from "./assets/images/homeLogo.webp";
import aboutProfilePic from "./assets/images/aboutProfilePic.webp";
import Educationcard from "./components/educationcard/Educationcard";
import Experiencecard from "./components/experiencecard/Experiencecard";
import Modal from "./components/modal/Modal";
import experienceCertificate from "./assets/images/experienceCertificate.webp";
import Skillscontentcard from "./components/skillscontentcard/Skillscontentcard";
import Projects from "./components/swiper/projects/Projects";
import Certificationscard from "./components/certificationscard/Certificationscard";
import metaProfessional from "./assets/images/metaProfessional.webp";
import metaBadge from "./assets/images/metaBadge.webp";
import universityMichigan from "./assets/images/universityMichigan.webp";
import johnHopkins from "./assets/images/johnHopkins.webp";
import universityLondon from "./assets/images/universityLondon.webp";
import mongoDB from "./assets/images/mongoDB.webp";
import teamLead from "./assets/images/teamLead.webp";

function App() {
  // Header Hamburger Menu State
  const [isActive, setIsActive] = useState(false);
  // Header Color Set and Padding Transition State
  const [navbarColor, setNavbarColor] = useState("#081b29");
  const [navbarPadding, setNavbarPadding] = useState("30px 0");
  // Experience Modal Open Close State
  const [experienceOpenModal, setExperienceOpenModal] = useState("none");
  // Certifications Modal Open Close State
  const [certificationsOpenModal1, setCertificationsOpenModal1] =
    useState("none");
  const [certificationsOpenModal2, setCertificationsOpenModal2] =
    useState("none");
  const [certificationsOpenModal3, setCertificationsOpenModal3] =
    useState("none");
  const [certificationsOpenModal4, setCertificationsOpenModal4] =
    useState("none");
  const [certificationsOpenModal5, setCertificationsOpenModal5] =
    useState("none");
  const [certificationsOpenModal6, setCertificationsOpenModal6] =
    useState("none");
  const [certificationsOpenModal7, setCertificationsOpenModal7] =
    useState("none");

  const hamburgerClick = () => {
    setIsActive(!isActive);
  };

  const hamburgerMenuCrossClick = () => {
    setIsActive(false);
  };

  const experienceOpenUpModal = () => {
    setExperienceOpenModal("block");
  };

  const experienceCloseUpModal = () => {
    setExperienceOpenModal("none");
  };

  const certificationsOpenUpModal1 = () => {
    setCertificationsOpenModal1("block");
  };

  const certificationsCloseUpModal1 = () => {
    setCertificationsOpenModal1("none");
  };

  const certificationsOpenUpModal2 = () => {
    setCertificationsOpenModal2("block");
  };

  const certificationsCloseUpModal2 = () => {
    setCertificationsOpenModal2("none");
  };

  const certificationsOpenUpModal3 = () => {
    setCertificationsOpenModal3("block");
  };

  const certificationsCloseUpModal3 = () => {
    setCertificationsOpenModal3("none");
  };

  const certificationsOpenUpModal4 = () => {
    setCertificationsOpenModal4("block");
  };

  const certificationsCloseUpModal4 = () => {
    setCertificationsOpenModal4("none");
  };

  const certificationsOpenUpModal5 = () => {
    setCertificationsOpenModal5("block");
  };

  const certificationsCloseUpModal5 = () => {
    setCertificationsOpenModal5("none");
  };

  const certificationsOpenUpModal6 = () => {
    setCertificationsOpenModal6("block");
  };

  const certificationsCloseUpModal6 = () => {
    setCertificationsOpenModal6("none");
  };

  const certificationsOpenUpModal7 = () => {
    setCertificationsOpenModal7("block");
  };

  const certificationsCloseUpModal7 = () => {
    setCertificationsOpenModal7("none");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setNavbarColor("#0a3b5a");
        setNavbarPadding("20px 0");
      } else {
        setNavbarColor("#081b29");
        setNavbarPadding("30px 0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header
        className="headerSec"
        style={{ backgroundColor: navbarColor, padding: navbarPadding }}
      >
        <div className="container">
          <div className="headerWrapper">
            <a className="headerName" href="index.html">
              Muhammad <span>Zohaib</span>
            </a>
            <ul className="headerOptions">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="certifications"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Certifications
                </Link>
              </li>
            </ul>
            <div className="headerLogos">
              <a href="www.linkedin.com/in/muhammad-zohaib-3a5142280">
                <img src={linkedinLogo} alt="Linkedin" />
              </a>
              <a href="https://github.com/vala-zohaib">
                <img src={githubLogo} alt="GitHub" />
              </a>
            </div>
            <div className="headerHamburger">
              <img
                className="headerHamburgerIcon"
                src={headerHamburger}
                alt="Hamburger"
                onClick={hamburgerClick}
              />
              <div
                className={`headerHamburgerMenu ${isActive ? "active" : ""}`}
              >
                <button
                  className="headerHamburgerCross"
                  onClick={hamburgerMenuCrossClick}
                >
                  <img src={closeIcon} alt="Close" />
                </button>
                <ul className="headerHamburgerOptions">
                  <li>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="certifications"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={hamburgerMenuCrossClick}
                    >
                      Certifications
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                class={`overlay ${isActive ? "active" : ""}`}
                onClick={hamburgerMenuCrossClick}
              ></div>
            </div>
          </div>
        </div>
      </header>
      {/* Home Section */}
      <section id="home" class="homeSec">
        <div class="container">
          <div class="homeWrapper">
            <div class="homeText">
              <h1>
                Hi, I'm <span>Muhammad Zohaib</span>
              </h1>
              <h2>Front-End Developer</h2>
              <p>
                I'm a Front-End Developer with a Bachelors degree from Sukkur IBA
                Sindh, looking to make a position for myself in the
                competitive corporate world and contribute to achieving the
                goals on both professional and personal level.
              </p>
            </div>
            <div class="homeLogo">
              <img src={homeLogo} alt="Developer" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" class="aboutSec">
        <div class="container">
          <div class="aboutWrapper">
            <Sectionhead head1={"About"} head2={"Me"} />
            <div class="aboutProfilePic">
              <span></span>
              <img src={aboutProfilePic} alt="Profile Picture" />
            </div>
            <h3>
              Front-End <span>Developer</span>
            </h3>
            <p>
              As a Front-End Developer, I bring a solid foundation in web
              development along with a passion for creating engaging and
              user-friendly interfaces. With expertise in latest Front-End
              technologies, I am adept at translating design concepts into
              seamless, functional websites. With a keen eye for detail and a
              collaborative mindset, I can deliver innovative solutions to
              enhance user experience and meet project objectives effectively. I
              believe that my diverse background, coupled with my passion for
              web development, will bring a fresh perspective to your team. I am
              ready to contribute to your team and help bring your vision to
              life.
            </p>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" class="educationSec">
        <div class="container">
          <div class="educationWrapper">
            <Sectionhead head1={"My"} head2={"Education"} />
            <div className="educationMainCard">
              <Educationcard
                qualification={"BS Computer Science"}
                institution={
                  "Sukkur IBA University, Sindh, Pakistan"
                }
                date={"August 2022 - June 2026"}
              />
              <Educationcard
                qualification={"FSc (Pre-Engineering)"}
                institution={"Samra English Public Colledge, Gambat"}
                date={"June 2019 - May 2021"}
              />
              <Educationcard
                qualification={"Matric (Science)"}
                institution={"Samra English Public School, Gambat"}
                date={"June 2017 - April 2019"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="experienceSec">
        <div className="container">
          <div className="experienceWrapper">
            <Sectionhead head1={"My"} head2={"Experience"} />
            <div className="experienceMainCard">
              <Experiencecard
                designation={"Typescript Developer Intern"}
                company={"Technics Lab"}
                date={"June 2025-August 2025"}
              />
              <button
                className="experienceCertificateBtn"
                onClick={experienceOpenUpModal}
              >
                Check Certificate
              </button>
              <Modal
                img={experienceCertificate}
                state={experienceOpenModal}
                function={experienceCloseUpModal}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skillsSec">
        <div className="container">
          <div className="skillsWrapper">
            <Sectionhead head1={"My"} head2={"Skills"} />
            <div className="skillsMainCard">
              <div className="skillsTechnicalMainCard">
                <h3>
                  Technical <span>Skills</span>
                </h3>
                <div className="skillsTechnicalCard">
                  <Skillscontentcard skill={"HTML"} percentage={"95%"} />
                  <Skillscontentcard skill={"CSS"} percentage={"95%"} />
                  <Skillscontentcard skill={"Typescript"} percentage={"90%"} />
                  <Skillscontentcard skill={"JavaScript"} percentage={"80%"} />
                  <Skillscontentcard skill={"jQuery"} percentage={"90%"} />
                  <Skillscontentcard skill={"React.js"} percentage={"80%"} />
                  <Skillscontentcard skill={"Redux"} percentage={"90%"} />
                  <Skillscontentcard
                    skill={"Responsiveness"}
                    percentage={"95%"}
                  />
                  <Skillscontentcard skill={"GitHub"} percentage={"90%"} />
                  <Skillscontentcard skill={"phpMyAdmin"} percentage={"90%"} />
                  <Skillscontentcard skill={"WordPress"} percentage={"65%"} />
                  <Skillscontentcard skill={"IBM SPSS"} percentage={"90%"} />
                  <Skillscontentcard
                    skill={"MS Word, Powerpoint, Excel"}
                    percentage={"95%"}
                  />
                  <Skillscontentcard skill={"Canva"} percentage={"95%"} />
                  <Skillscontentcard skill={"Google Ads"} percentage={"60%"} />
                  <Skillscontentcard skill={"Meta Ads"} percentage={"65%"} />
                </div>
              </div>
              <div className="skillsSoftMainCard">
                <h3>
                  Soft <span>Skills</span>
                </h3>
                <div className="skillsSoftCard">
                  <Skillscontentcard
                    skill={"Interpersonal Communication"}
                    percentage={"95%"}
                  />
                  <Skillscontentcard skill={"Leadership"} percentage={"95%"} />
                  <Skillscontentcard skill={"Team Player"} percentage={"95%"} />
                  <Skillscontentcard skill={"Innovation"} percentage={"90%"} />
                  <Skillscontentcard skill={"Persuasion"} percentage={"95%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projectsSec">
        <div className="container">
          <div className="projectsWrapper">
            <Sectionhead head1={"My"} head2={"Projects"} />
            <div className="projectsMainCard">
              <Projects />
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="certificationsSec">
        <div className="container">
          <div className="certificationWrapper">
            <Sectionhead head1={"My"} head2={"Certifications"} />
            <div className="certififcationsMainCard">
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={"Meta Front-End Developer Professional Certificate"}
                    company={"Coursera"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal1}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={metaProfessional}
                    state={certificationsOpenModal1}
                    function={certificationsCloseUpModal1}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={"Meta Front-End Developer Badge"}
                    company={"Coursera"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal2}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={metaBadge}
                    state={certificationsOpenModal2}
                    function={certificationsCloseUpModal2}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={
                      "University Of Michigan Web Design For Everybody: Basics Of Web Development & Coding Professional Certificate"
                    }
                    company={"Coursera"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal3}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={universityMichigan}
                    state={certificationsOpenModal3}
                    function={certificationsCloseUpModal3}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={
                      "Johns Hopkins University HTML, CSS, And JavaScript For Web Developers Certificate"
                    }
                    company={"Coursera"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal4}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={johnHopkins}
                    state={certificationsOpenModal4}
                    function={certificationsCloseUpModal4}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={
                      "University Of London Responsive Website Basics: Code With HTML, CSS, And JavaScript Certificate"
                    }
                    company={"Coursera"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal5}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={universityLondon}
                    state={certificationsOpenModal5}
                    function={certificationsCloseUpModal5}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={"Introduction to MongoDB Certificate"}
                    company={"MongoDB University"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal6}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={mongoDB}
                    state={certificationsOpenModal6}
                    function={certificationsCloseUpModal6}
                  />
                </div>
              </div>
              <div className="certificationsCard">
                <div className="certificationsInnerCard">
                  <Certificationscard
                    title={"Recognized for Organizing Hackathon as Club Head"}
                    company={"Tech Club"}
                  />
                  <div className="checkCertificate">
                    <button
                      className="certificationsCertificateBtn"
                      onClick={certificationsOpenUpModal7}
                    >
                      Check Certificate
                    </button>
                  </div>
                  <Modal
                    img={teamLead}
                    state={certificationsOpenModal7}
                    function={certificationsCloseUpModal7}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footerSec">
        <div className="container">
          <div className="footerWrapper">
            <a className="footerName" href="index.html">
              Muhammad <span>Zohaib</span>
            </a>
            <div className="footerContact">
              <div className="footerDetails">
                <p>+92 3263684107</p>
                <a href="mailto: dev.muhammadzohaib@gmail.com">
                  dev.muhammadzohaib@gmail.com
                </a>
              </div>
              <div className="footerLinks">
                <a href="https://www.linkedin.com/in/muhammad-zohaib-3a5142280/">
                  <img src={linkedinLogo} alt="Linkedin" />
                </a>
                <a href="https://github.com/vala-zohaib">
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;