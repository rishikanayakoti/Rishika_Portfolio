import React, { useState } from 'react';
import "./header.css";
import Navlogo from "../../assests/R.png"; 
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("show-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo"> <img src={Navlogo} alt="" className="nav__logo" /></a>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav == "home" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" onClick={() => setActiveNav("about")} className={activeNav == "about" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" onClick={() => setActiveNav("skills")} className={activeNav == "skills" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-channel nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" onClick={() => setActiveNav("projects")} className={activeNav == "projects" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-file nav__icon"></i>Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#milestones" onClick={() => setActiveNav("milestones")} className={activeNav == "milestones" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-star nav__icon"></i>Milestones
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav == "contact" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("hireme")}
                  className={activeNav === "hireme" ? "nav__hireme-btn active-link" : "nav__hireme-btn"}
                >
                  Hire Me
                </a>
              </li>


            </ul>
            <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header

