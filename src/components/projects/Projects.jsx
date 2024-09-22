import React from 'react';
import './projects.css';

const ProjectCard = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Project" className="card__image" />
      <div className="card__overlay">
        <div>
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {/* <p className="card__description">{description}</p> */}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__row">
          <ProjectCard
            title="Color Sampler"
            imageUrl="https://i.imgur.com/X4YRMw0.png"
            description="A web tool built with HTML, CSS, and JS for sampling and previewing colors in an image."
          />
          <ProjectCard
            title="Podcasty"
            imageUrl="https://i.imgur.com/lzydnQG.png"
            description="NextJS-based platform for listening to, uploading, and managing podcasts, with React and TailwindCSS frontend."
          />
          <ProjectCard
            title="Online Clothing Web Application"
            imageUrl="https://i.imgur.com/NIiay3f.jpg"
            description="Web clothing app with HTML5, CSS, React, responsive UI, and user-friendly features, doubling user engagement."
          />
        </div>
        <div className="projects__row">
          <ProjectCard
            title="Driver Drowsiness Detection"
            imageUrl="https://i.imgur.com/EEsj3h4.jpg"
            description="A Python model using OpenCV, TensorFlow, and dlib detects driver drowsiness with 98% accuracy, alerting with an alarm after 8 frames (290ms)."
          />
          <ProjectCard
            title="Website Blocker"
            imageUrl="https://i.imgur.com/GlLWt22.png"
            description="Python tkinter tool boosts productivity, blocks distractions, and increases task completion by 20%, saving 15 hours weekly."
          />
          <ProjectCard
            title="AI Crossword Puzzle Solver"
            imageUrl="https://i.imgur.com/ZHtC3BE.png"
            description="Python-powered AI crossword solver intelligently cracks crossword puzzles using a backtracking algorithm."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
