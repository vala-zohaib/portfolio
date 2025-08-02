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
            "In this project at Technic Lab, I created a reusable NPM package that replicates the functionality of Google Forms, allowing developers to easily integrate customizable and dynamic form builders into React applications. Built with React, TypeScript, and Redux, it ensures modularity, type safety, and efficient state management. This solution significantly reduced repetitive form creation across multiple projects while aligning with modern development standards."
          }
          link={"javascript:;"}
          linktext={"Confidential"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Projectscard
          name={
            "Fully Responsive mytruetraffic.com Website Home Page Using HTML, CSS and jQuery"
          }
          details={
            "In this project, I developed a fully responsive homepage for My True Traffic, a product website of Skyscrapers. I converted high-quality Figma design  into clean and efficient code while ensuring consistent design and a great user experience."
          }
          link={"https://github.com/m-bilaal/MyTrueTraffic"}
          linktext={"https://github.com/m-bilaal/MyTrueTraffic"}
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