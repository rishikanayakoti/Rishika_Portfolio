import React from 'react';
import "./skills.css";


// const Skills = () => {
//   return (
//     <section className="skills section" id='skills'>
//         <h2 className="section_title">Skills</h2>
//         {/* <span className="section__subtitle">My technical level</span> */}

//         <div className="skills__container grid container">
//         <div className="skills_content">
//             <h3 className="skills__title">Frontend developer</h3>
//             <div className="skills__box">
//                 <div className="skills__group">
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">HTML</h3>
//                             <span className="skills__level">Advanced</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">CSS</h3>
//                             <span className="skills__level">Advanced</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">Javascript</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
  
//                 </div>
//                 <div className="skills__group">
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">Bootstrap</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">Git</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">React</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
  
//                 </div>
//             </div>
//         </div>
//         <div className="skills_content">
//             <h3 className="skills__title">Backend developer</h3>
//             <div className="skills__box">
//                 <div className="skills__group">
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">NodeJS</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">MongoDB</h3>
//                             <span className="skills__level">Advanced</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">Python</h3>
//                             <span className="skills__level">Advanced</span>
//                         </div>
//                     </div>
  
//                 </div>
//                 <div className="skills__group">
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">Express.JS</h3>
//                             <span className="skills__level">Basic</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">MySQL</h3>
//                             <span className="skills__level">Advanced</span>
//                         </div>
//                     </div>
//                     <div className="skills__data">
//                         <i class='bx bx-badge-check'></i>
//                         <div>
//                             <h3 className="skills__name">RESTful APIs</h3>
//                             <span className="skills__level">Intermediate</span>
//                         </div>
//                     </div>
  
//                 </div>
//             </div>
//         </div>
//         </div>
//     </section>
//   )
// }

// export default Skills



const SkillIcon = ({ iconClass, skillName }) => (
  <div className="skill">
    <i className={iconClass}></i>
    <span>{skillName}</span>
  </div>
);

const Skills = () => (
  
  <div className="skills">
    <h2 className="section__title">Skills</h2>
    <div className="skillicons">
    <SkillIcon iconClass="fab fa-html5" skillName="HTML5" />
    <SkillIcon iconClass="fab fa-css3-alt" skillName="CSS3" />
    <SkillIcon iconClass="fab fa-js-square" skillName="JavaScript" />
    <SkillIcon iconClass="fab fa-react" skillName="ReactJS"/>
    <SkillIcon iconClass="fab fa-node-js" skillName="NodeJS" />
    <SkillIcon iconClass="fab fa-js" skillName="ExpressJS" />
    <SkillIcon iconClass="fas fa-database" skillName="MongoDB" />
    <SkillIcon iconClass="fab fa-bootstrap" skillName="Bootstrap" />
    <SkillIcon iconClass="fas fa-code" skillName="C" />
    <SkillIcon iconClass="fab fa-python" skillName="Python" />
    <SkillIcon iconClass="fab fa-java" skillName="Java" />
    <SkillIcon iconClass="fab fa-github" skillName="Git"/>

        </div>
  </div>
);

export default Skills;
