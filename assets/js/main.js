import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();




initScrollReveal();
typeWrite(document.querySelector(".typewriter"));



// Scroll Reveal for Left Slide
const revealLeftElements = document.querySelectorAll(".reveal-left-unique");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // reveal only once
      }
    });
  },
  { threshold: 0.2 } // trigger when 20% visible
);

revealLeftElements.forEach(el => observer.observe(el));


const formUnique = document.getElementById("contact-form-unique");
const popupUnique = document.getElementById("contact-popup-unique");
const closeBtnUnique = document.getElementById("popup-close-unique");

formUnique.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing
  popupUnique.classList.add("show");
  formUnique.reset(); // Clear form
});

closeBtnUnique.addEventListener("click", function() {
  popupUnique.classList.remove("show");
});

window.addEventListener("click", function(e) {
  if (e.target === popupUnique) {
    popupUnique.classList.remove("show");
  }
});



// Dubai Startup Website
hoverChangeExperience(
  ".dubaiweb",
  `Designed and developed a fully responsive, high-performance corporate 
  website for <strong>Nutracon Pharma</strong>, a Dubai-based pharmaceutical 
  startup. Delivered a clean, modern interface with optimized user experience, 
  integrated product catalog functionality, and SEO-friendly architecture 
  to strengthen their digital presence and brand credibility in the 
  Middle East market.`,
  "Website Design & Development",
  "Nutracon Pharma – Dubai, UAE",
  "2025"
);

// Competitive Programming
hoverChangeExperience(
  ".cp",
  `Active competitive programmer with a current rating of 1100+ 
  on major platforms. Participated in multiple online contests, 
  demonstrating strong problem-solving, algorithmic thinking, 
  and optimization skills.`,
  "Competitive Programmer",
  "Online Programming Platforms",
  "Ongoing"
);

// LeetCode Practice
hoverChangeExperience(
  ".leetcode",
  `Solved over 200+ algorithmic and data structure problems on LeetCode, 
  improving coding efficiency, mastery of problem-solving patterns, 
  and readiness for technical interviews.`,
  "Algorithm & DSA Practice",
  "LeetCode",
  "Ongoing"
);

// GitHub Developers Club
hoverChangeExperience(
  ".githubclub",
  `Active member of the college's GitHub Developers Club, 
  contributing to open-source projects, hosting peer coding sessions, 
  and collaborating on innovative software solutions.`,
  "Club Member & Contributor",
  "GitHub Developers Club – College",
  "Ongoing"
);
hoverChangeDescription(
  ".html",
  "HTML is a markup language used to define and structure the elements that a web page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language made up of 'layers', created for the purpose of styling web pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features not available in native CSS."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a component-based way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables features like server-side rendering and static site generation for React-based websites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, allowing you to write CSS code directly inside JavaScript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides utility classes for styling web pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features not available in the native language, as well as making it statically typed."
);



hoverChangeDescription(
  ".nodejs",
  "Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server side."
);
hoverChangeDescription(
  ".express",
  "Express.js is a minimal and flexible Node.js web framework used for building APIs and web applications."
);
hoverChangeDescription(
  ".mysql",
  "MySQL is a relational database management system used to store, organize, and manage data using SQL queries."
);
