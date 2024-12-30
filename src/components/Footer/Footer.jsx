import React from 'react';
import s from './footer.module.css'; 

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s['footer-container']}>
        <p className={s['footer-copyright']}>
          &copy; 2023 NeNorvalls. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
