import React from 'react'
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rishika</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#milestones" className="footer__link">Milestones</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="mailto:rishika1873@gmail.com" className="home__social-icon" target="_blank"><i className="uil uil-envelope-alt"></i></a>
                    <a href="https://www.linkedin.com/in/rishika-nayakoti3781/" className="home__social-icon" target="_blank"><i className="uil uil-linkedin"></i></a>
                    <a href="https://github.com/rishikanayakoti" className="home__social-icon" target="_blank"><i className="uil uil-github"></i></a>

                </div>
                

            </div>
        </footer>
    )
}

export default Footer
