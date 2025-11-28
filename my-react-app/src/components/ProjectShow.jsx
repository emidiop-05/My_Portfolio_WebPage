import React, { useState } from "react";
import styles from "./ProjectShow.module.css";

import { PlatformDetails } from "./project-details/PlatformDetails";
import { FitnessDetails } from "./project-details/FitnessDetails";

const projects = [
  {
    id: "platform",
    name: "PlatformGame",
    image: "/assets/PlatGameImg.png",
    component: <PlatformDetails />,
    url: "https://emidiop-05.github.io/Emidio-Pedro-Game-Ironhack-/",
    github: "https://github.com/emidiop-05/Emidio-Pedro-Game-Ironhack-",
  },
  {
    id: "fitnessworld",
    name: "Fitness-World",
    image: "/assets/FitnessWorldCover.png",
    component: <FitnessDetails />,
    url: "https://fitnesss-world.netlify.app/",
    github: "https://github.com/emidiop-05/Fitness-World-Frontend",
  },
];

export function ProjectShow() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const currentProjectData = projects.find((p) => p.id === activeProject);

  return (
    <div className={styles.projectShowcaseContainer}>
      <div className={styles.tabNavigationRow}>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`${styles.tabButton} ${
              activeProject === project.id ? styles.active : ""
            }`}
            onClick={() => setActiveProject(project.id)}
          >
            <img
              src={project.image}
              alt={`${project.name} Thumbnail`}
              className={styles.tabImage}
            />
          </button>
        ))}
      </div>

      <div className={styles.projectContentPanel}>
        {currentProjectData && (
          <div className={styles.projectDisplayArea}>
            {React.cloneElement(currentProjectData.component, {
              screenshotClass: styles.mainScreenshot,
            })}

            <div className={styles.projectLinks}>
              <a
                href={currentProjectData.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Site
              </a>
              <a
                href={currentProjectData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
