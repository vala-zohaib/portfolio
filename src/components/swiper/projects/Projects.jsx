// Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../projects/Projects.css";
import Projectscard from "../../projectscard/Projectscard";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSwiper = () => {
  return (
    // Swiper
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      modules={[Navigation, Pagination, A11y]}
      navigation={{ enabled: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          navigation: {
            enabled: false,
          },
        },
        768: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <Projectscard
          name={"Fully Responsive My Portfolio Website Using React.js"}
          details={
            "In this project, i developed a fully dynamic, responsive, appealing and user-friendly portfolio website for myself. It includes all the details regarding my professional profile, education, skills, work experience, projects, certifications and all my details."
          }
          link={"https://github.com/vala-zohaib/portfolio"}
          linktext={"https://github.com/vala-zohaib/portfolio"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Projectscard
          name={
            "Reusable Google Forms-Inspired NPM Package with React, TypeScript, and Redux"
          }
          details={
            "In this project at Technic Lab, I built a reusable NPM package replicating Google Forms functionality using React, TypeScript, and Redux. It enables easy integration of dynamic form builders while ensuring type safety, modularity, and efficient state management."
          }
          link={"javascript:;"}
          linktext={"Confidential"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Projectscard
          name={
            "Fully Responsive Facebook-Inspired Community Page Built with TypeScript and SCSS"
          }
          details={
            "In this project, I built a fully responsive Facebook-inspired community page using TypeScript and SCSS. I translated a detailed UI concept into clean, scalable code while focusing on personalized posts, comments, and an intuitive user experience."
          }
          link={"https://github.com/vala-zohaib/community-page"}
          linktext={"https://github.com/vala-zohaib/community-page"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Projectscard
          name={
            "E-Commerce Women Clothes Website Using HTML, CSS, JavaScript and PHP"
          }
          details={
            "In this project, i developed a feature-rich , appealing and user-friendly e-commerce women clothes website. I designed and implemented an intuitive user interface ensuring seamless navigation. I Integrated interactive features and functionalities to enhance user engagement and streamline the shopping experience."
          }
          link={"https://github.com/m-bilaal/FashionFlix"}
          linktext={"https://github.com/m-bilaal/FashionFlix"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSwiper;