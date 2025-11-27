import styles from "../ProjectShow.module.css";

export function FitnessDetails() {
  return (
    <div className="project-detail-content">
      <h3>Fitness World (MERN Stack)</h3>
      <p>
        A full-stack social fitness hub with community blogs,AI chatbot, user
        profiles, and dynamic content generation.
      </p>

      <img
        src="./assets/FitnessWorldCover.png"
        alt="Fitness World Screenshot"
        className={styles.mainScreenshot}
      />

      <h4>Key Features:</h4>
      <ul>
        <li>AI Chat-Bot integration</li>
        <li>IMC Calculator</li>
        <li>Custom Training Plans (ExerciseDB API)</li>
        <li>User Authentication and Blog Area</li>
      </ul>
      <h4>Tech Stack:</h4>
      <ul>
        <li>MERN: MongoDB, Express, React, Node.js</li>
      </ul>
    </div>
  );
}
