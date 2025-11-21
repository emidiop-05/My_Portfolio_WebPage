import styles from "./Main.module.css";

function MainPage() {
  return (
    <div className={styles.Text}>
      <section id="logo">
        <h1>Hello! I´m Emídio, Full-Stack Developer.</h1>
      </section>
      <section id="about-me">
        <h2>About Me</h2>
        <p>
          I am a passionate and results-driven Full-Stack Developer with a keen
          eye for modern web solutions. Specializing in React for dynamic
          front-end experiences and proficient in building robust back-end APIs,
          I thrive on transforming complex ideas into elegant, efficient, and
          user-friendly applications. My journey in development is fueled by a
          commitment to continuous learning and a drive to create impactful,
          scalable, and maintainable code.
        </p>
        <p>
          With a background in [mention a field if you have one, e.g., project
          management, graphic design, data analysis], I bring a unique
          perspective to problem-solving and a strong understanding of the
          entire product lifecycle. I'm always eager to collaborate on
          innovative projects and contribute to a team that values clean code,
          effective communication, and delivering exceptional digital products.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div>
          <h3>Lead Developer - [Company Name A] (YYYY - YYYY)</h3>
          <ul>
            <li>
              Led the development of a [type of application, e.g., customer
              dashboard] from concept to deployment.
            </li>
            <li>
              Implemented responsive UI using React and Redux, resulting in a
              20% increase in user engagement.
            </li>
            <li>
              Designed and built RESTful APIs with Node.js/Express, integrating
              with [database, e.g., PostgreSQL].
            </li>
            <li>
              Mentored junior developers and conducted code reviews to ensure
              best practices.
            </li>
          </ul>
        </div>
        <div>
          <h3>Software Engineer - [Company Name B] (YYYY - YYYY)</h3>
          <ul>
            <li>
              Contributed to the front-end development of [type of platform,
              e.g., e-commerce platform] using [framework, e.g., Angular].
            </li>
            <li>
              Developed and maintained key features, improving page load times
              by 15%.
            </li>
            <li>
              Collaborated with UX/UI designers to translate wireframes into
              interactive user interfaces.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div>
          <h3>Project Title 1: [E-commerce Platform / Social Media Clone]</h3>
          <p>
            Developed a full-stack [description, e.g., e-commerce platform
            featuring product listings, shopping cart, and secure checkout].
            Utilized [technologies, e.g., MERN stack, Stripe API, JWT
            authentication].
            <a href="[Link to Live Demo]" target="_blank">
              View Live
            </a>{" "}
            |{" "}
            <a href="[Link to GitHub Repo]" target="_blank">
              GitHub
            </a>
          </p>
        </div>
        <div>
          <h3>
            Project Title 2: [Task Management App / Portfolio Website Builder]
          </h3>
          <p>
            Created a [description, e.g., responsive task management application
            with drag-and-drop functionality and user authentication].
            Technologies include [technologies, e.g., React, Firebase, CSS
            Modules].
            <a href="[Link to Live Demo]" target="_blank">
              View Live
            </a>{" "}
            |{" "}
            <a href="[Link to GitHub Repo]" target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </section>
      <section id="contact-info">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, and
          conversations. Feel free to reach out if you have a project in mind, a
          question, or just want to connect.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="[Your LinkedIn Profile]" target="_blank">
            linkedin.com/in/yourname
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="[Your GitHub Profile]" target="_blank">
            github.com/yourusername
          </a>
        </p>
      </section>
    </div>
  );
}

export default MainPage;
