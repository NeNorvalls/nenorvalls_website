import React, { useState } from 'react';
import s from './skillCard.module.css';

const SkillCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${s.flipCard}${flipped ? ` ${s.clicked}` : ''}`} onClick={flipCard}>
      <div className={s.flipCardInner}>
        <div className={s.flipCardFront}>
          <h2>{title}</h2>
        </div>
        <div className={s.flipCardBack}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const SkillsContainer = () => {
  return (
    <div className={s.cardContainer}>
      <SkillCard
        title="HTML5"
        description="Proficient in crafting semantic and accessible markup for robust web applications."
      />
      <SkillCard
        title="CSS3"
        description="Experienced in styling with precision, utilizing modern CSS features to create visually appealing and responsive designs."
      />
      <SkillCard
        title="JavaScript"
        description="Adapt at leveraging the power of JavaScript to create
        interactive and dynamic user interfaces."
      />
      <SkillCard
        title="UI Design"
        description="Skilled in user interface design, ensuring visually pleasing
        and intuitive interactions."
      />
      <SkillCard
        title="GitHub REPO"
        description="Proficient in using Git and GitHub for version control,
        ensuring collaborative and organized code repositories."
      />
      <SkillCard
        title="WordPress HEADLESS CMS"
        description="Experience in utilizing WordPress as a headless CMS for
        efficient and flexible content management."
      />
      <SkillCard
        title="React"
        description="Skilled in developing modern and scalable web applications
        using React.js"
      />
      <SkillCard
        title="Sass"
        description="Proficient in using Sass for efficient and maintainable
        stylesheet development."
      />
      <SkillCard
        title="Node.js"
        description="Experienced in styling with precision, utilizing modern CSS features 
        to create visually appealing and responsive designs."
      />
      <SkillCard
        title="Netlify Deploy"
        description="Experienced in deploying web applications to Netlify for
        seamless and automated deployment workflows."
      />
      {/* <SkillCard
        title="Next.js Development"
        description="Developing web applications , utilizing its powerful features for 
        server-side rendering, static site generation, and client-side routing with Next.js."
      />
      <SkillCard
        title="Tailwind CSS Styling"
        description="Using Tailwind CSS for styling web applications, leveraging its 
        utility-first approach to create responsive and customizable UI components."
      /> */}

    </div>
  );
};

export default SkillsContainer;
