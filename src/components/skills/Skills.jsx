import React from 'react';
import "./skills.css";

const SkillIcon = ({ iconClass, skillName }) => (
  <div className="skill">
    <i className={iconClass}></i>
    <span>{skillName}</span>
  </div>
);

const Skills = () => (
  
  <div className="skills section " id='skills'>
    <h2 className="section__title">Skills</h2>
    <div className="skillicons">
    <SkillIcon iconClass="fab fa-html5" skillName="HTML5" />
    <SkillIcon iconClass="fab fa-css3-alt" skillName="CSS3" />
    <SkillIcon iconClass="fab fa-js-square" skillName="JavaScript" />
    <SkillIcon iconClass="fab fa-react" skillName="ReactJS"/>
    <SkillIcon iconClass="fab fa-node-js" skillName="NodeJS" />
    <SkillIcon iconClass="fab fa-js" skillName="ExpressJS" />
    <SkillIcon iconClass="fas fa-database" skillName="SQL" />
    <SkillIcon iconClass="fas fa-chart-line" skillName="Tableau"/>
    <SkillIcon iconClass="fab fa-r-project" skillName="R" />
    <SkillIcon iconClass="fab fa-python" skillName="Python" />
    <SkillIcon iconClass="fab fa-java" skillName="Java" />
    <SkillIcon iconClass="fab fa-github" skillName="Git"/>

        </div>
  </div>
);

export default Skills;
