import React, { useState, useEffect } from "react";
import s from "./projects.module.css";

const Project = ({
  title,
  imageUrl,
  description,
  technologies,
  githubLink,
  demoLink
}) => (
  <div className={s.projectWrapper}>
    <h2 className={s.title}>{title}</h2>
    <img src={imageUrl} alt={title} className={s.projectImage} />
    <p className={s.description}>{description}</p>
    <p className={s.technologies}>Technologies: {technologies}</p>
    <div className={s.linkWrapper}>
      <a href={githubLink} className={s.link}>
        GitHub Link
      </a>
      <a href={demoLink} className={s.link}>
        Live Demo Link
      </a>
    </div>
  </div>
);

const ProjectSection = ({ sectionTitle, projects }) => (
  <div className={s.projectSection}>
    <h1 className={s.sectionTitle}>{sectionTitle}</h1>
    <div className={s.projectsContainer}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const reactProjects = [
    {
      title: "React E-Com",
      imageUrl: "https://i.ibb.co/PGhvSLG/react-ecom-shopping-store.png",
      description:
        "This project involves building a web application using React and designing it with Styled-components.",
      technologies: "HTML, JavaScript, React, Redux, Styled-Components",
      githubLink: "https://github.com/NeNorvalls/react-ecom-shop.git",
      demoLink: "https://ecommerce-shopping-store.netlify.app/"
    },
    {
      title: "WordPress Project",
      imageUrl: "https://i.ibb.co/WGK3SkW/bits-and-bots.png",
      description:
        "This project is created with React, Sass, Bootstrap, headless WordPress CMS, and UI design.",
      technologies: "React, Sass, Wordpress, Bootstrap, BEM",
      githubLink: "https://github.com/NeNorvalls/bits-bots_project_exam2.git",
      demoLink: "https://bitsbotsprojectexam2.netlify.app/"
    },
    {
      title: "Car App",
      imageUrl: "https://i.ibb.co/dtRkxNt/Picture5.png",
      description:
        "Explore a collection of cool cars in this React-based app. Find your dream car with ease using the search functionality.",
      technologies: "React, CSS Modules, Hooks",
      githubLink: "https://github.com/NeNorvalls/cars_react_app.git",
      demoLink: "https://car-hook-app.netlify.app/"
    }
  ];

  const htmlProjects = [
    {
      title: "Ice Creams",
      imageUrl: "https://i.ibb.co/pKhLq2K/ice-creams.jpg",
      description:
        "The project is composed of HTML, CSS, and JavaScript files to create an interactive ice cream shop experience.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/Ice_Creams_Shop.git",
      demoLink: "https://ice-creams-shop.netlify.app/"
    },
    {
      title: "Auction Web",
      imageUrl: "https://i.ibb.co/QXCfdZ7/neno-sp2auctions.png",
      description:
        "This project is designed with knowledge and mastery in HTML, Bootstrap, Sass & Javascript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/neno_SP2_auctions.git",
      demoLink: "https://neno-sp2auctions.netlify.app/"
    },
    {
      title: "Community Science Museum",
      imageUrl: "https://i.ibb.co/ZLKDmkk/csm-screenshot.jpg",
      description:
        "This website's main goal is to put what we learn about HTML and CSS",
      technologies: "HTML, CSS",
      githubLink: "https://github.com/NeNorvalls/Community-Science-Museum.git",
      demoLink: "https://github.com/NeNorvalls/Community-Science-Museum"
    },
    {
      title: "Contact Form",
      imageUrl: "https://i.ibb.co/bdh4vK7/contact-form-cover.jpg",
      description:
        "The 'Contact Us Web App' is built using HTML, CSS, and JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/contact-us.git",
      demoLink: "https://simple-contact-form-responsive.netlify.app/"
    },
    {
      title: "To-do-List",
      imageUrl: "https://i.ibb.co/2v8LfDJ/Todo-List-Cover.jpg",
      description:
        "This project is a simple To-Do List application developed using HTML, CSS, and JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/To-do-list.git",
      demoLink: "https://nenorvalls-to-do-list.netlify.app/"
    },
    {
      title: "Quiz App",
      imageUrl: "https://i.ibb.co/N7pnsF5/Quiz-App-Cover.jpg",
      description:
        "This repository contains an interactive quiz implemented in HTML, CSS, and JavaScript. The quiz dynamically generates questions and allows users to submit their answers for evaluation.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/Quiz-App.git",
      demoLink: "https://nenorvalls-quiz-app.netlify.app/"
    }
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.reactProjectsSection}>
        <ProjectSection
          sectionTitle="React Projects"
          projects={reactProjects}
        />
      </div>
      <div className={s.htmlProjectsSection}>
        <ProjectSection sectionTitle="HTML Projects" projects={htmlProjects} />
      </div>
      {showScrollButton && (
        <button className={s.scrollButton} onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Projects;
