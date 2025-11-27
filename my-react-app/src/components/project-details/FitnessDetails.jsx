import styles from "../ProjectShow.module.css";

export function FitnessDetails() {
  return (
    <div className="project-detail-content">
      <h3 className={styles.featureTitle}>Fitness World (MERN Stack)</h3>
      <p className={styles.featureText}>
        A full-stack social fitness hub with community blogs,AI chatbot, user
        profiles, and dynamic content generation.
      </p>
      <h4 className={styles.featureTitle}>Tech Stack:</h4>
      <ul className={styles.featuresUl}>
        <li>MERN: MongoDB, Express, React, Node.js</li>
      </ul>

      <img
        src="./assets/FitnessWorldCover.png"
        alt="Fitness World Screenshot"
        className={styles.mainScreenshot}
      />
    </div>
  );
}
