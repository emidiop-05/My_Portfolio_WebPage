import styles from "./Main.module.css";
import { IconModel } from "../components/IconModel";

import { ReactIcon } from "../components/models/ReactIcon";
import { CSSIcon } from "../components/models/CSSIcon";
import { HtmlIcon } from "../components/models/HtmlIcon";

import { MongoIcon } from "../components/models/MoongoIcon";
import { JsIcon } from "../components/models/JsIcon";

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
              <li className={styles.StackText}>
                {" "}
                <IconModel
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <ReactIcon position={[0, 0, 0]} scale={1} />
                </IconModel>
              </li>
              <li className={styles.StackText}>
                <IconModel
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <HtmlIcon position={[0, 0, 0]} scale={1} />
                </IconModel>
              </li>
              <li className={styles.StackText}>
                <IconModel
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <CSSIcon position={[0, 0, 0]} scale={1} />
                </IconModel>
              </li>
            </ul>
          </div>
          <div className={styles.BackDiv}>
            <h2 className={styles.StackTitle}>Back-End</h2>
            <ul className={styles.BackStacks}>
              <li className={styles.StackText}>
                <IconModel
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <JsIcon position={[0, 0, 0]} scale={1} />
                </IconModel>
              </li>
              <li className={styles.StackText}>
                <IconModel
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <MongoIcon position={[0, 0, 0]} scale={1} />
                </IconModel>
              </li>
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
