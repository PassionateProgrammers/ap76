import React from 'react';
import { Link } from 'react-router-dom';

const scrollToSection = (sectionId) => {
  return () => {
    // Scroll to the target section after the new page loads
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
};

const ScrollToSection = ({ to, sectionId, className, children }) => (
  <Link to={to} onClick={scrollToSection(sectionId)} className={className}>{children}</Link>
);

export default ScrollToSection;
