import React from "react";
import { Link } from "react-router-dom";
import s from "./home.module.css";
import profilePhoto from "../../images/nenorvalls.jpg";
import SkillsContainer from "../SkillCard/SkillCard";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <img className={s.profileImage} src={profilePhoto} alt="Profile" />
        <p className={s.introParagraph}> Hello, I'm Nenita Norvalls, a frontend developer. My focus
          is on practical skills that matter in real-world web development.
         
        </p>
        <div className={s.contactInfoList}>
            <p className={s.contactInfo}>
            <strong>Mobile number:</strong> +4791129757
            </p>
            <p className={s.contactInfo}>
            <strong>Email:</strong> nenorvalls@gmail.com
            </p>
            <p className={s.contactInfo}>
            <strong>Location:</strong> Bergen, Norway
            </p>
        </div>
      </div>

      <div className={s.content}>
        <h1 className={s.welcomeHeader}>
          Welcome to Nenorvalls: Innovating Web Experiences
        </h1>
        <p className={s.skillsParagraph}>
          Throughout my Front-End Development journey at Noroff School of
          Technology and Digital Media, I've gained proficiency in various
          technologies and tools. Here are some of the key skills I've acquired:
        </p> 
        <SkillsContainer />

        <p className={s.contributionParagraph}>
          I bring a solid educational foundation and a dedication to staying current with industry trends. I
          am eager to contribute my skills and a fresh perspective to a team that values innovation and excellence.
        </p>
        <p className={s.contributionParagraph}>
          Beyond my formal education, I actively engage in continuous learning by participating in various online coding camps. 
          It's not just about Codefinity, FreeCode Camp but other similar training; I seek opportunities from a multitude of platforms to fill up any knowledge gaps. 
          This dedication reflects my commitment to staying at the forefront of industry trends and technologies, addressing not just what I know but also identifying and filling any lacking knowledge.
          Proficient in HTML, CSS, and JavaScript, I approach challenges with enthusiasm and a problem-solving mindset. 
          My journey is not limited to what I've learned so far; instead, I am driven to explore and master advanced coding languages.
          Eager to contribute my diverse skill set to a dynamic team, I am actively seeking an environment that values adaptability and continuous learning. 
          I am excited about the prospect of leveraging my current skills while embracing the opportunity to learn and apply advanced coding languages to contribute innovative solutions to projects.
        </p>
        <p className={s.readyParagraph}>
          Ready to see what I've been working on?
        </p>
        <Link to="projects" className={s.exploreButton}>
          Explore My Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
