import styles from "./Main.module.css";

function MainPage() {
  return (
    <div className={styles.Text}>
      <div className={styles.FirstInfo}>
        <section id="logo">
          <h1 className={styles.Title}>
            Hello! I´m <span className={styles.Name}>Emídio</span> Full-Stack
            Developer.
          </h1>
          <a
            href="/resume.pdf"
            download="Emídio_Resume.pdf"
            className={styles.Resume}
          >
            Download my resume.
          </a>
        </section>

        <section id="stacks">
          <div className={styles.FrontDiv}>
            <h2 className={styles.StackTitle}>Front-End</h2>
            <ul className={styles.FrontStacks}>
              <li className={styles.StackText}>React</li>
              <li className={styles.StackText}>HTML</li>
              <li className={styles.StackText}>CSS</li>
            </ul>
          </div>
          <div className={styles.BackDiv}>
            <h2 className={styles.StackTitle}>Back-End</h2>
            <ul className={styles.BackStacks}>
              <li className={styles.StackText}>MongoDB</li>
              <li className={styles.StackText}>Express.js</li>
              <li className={styles.StackText}>Node.js</li>
            </ul>
          </div>
        </section>
      </div>
      <section id="about-me">
        <h1>HELLOW WORLD</h1>
      </section>
      <section id="experience"></section>
      <section id="projects"></section>
      <section id="contact-info"></section>
    </div>
  );
}

export default MainPage;
