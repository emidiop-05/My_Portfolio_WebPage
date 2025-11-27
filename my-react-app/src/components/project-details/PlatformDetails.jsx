import { div } from "three/tsl";

import styles from "../ProjectShow.module.css";

export function PlatformDetails() {
  return (
    <div>
      <h3>Platform Game (Vanilla Js)</h3>
      <p>
        A solo-developed 2D platform game showcasing mastery of DOM manipulation
        and core JavaScript concepts for movement, collision, and game state
        management.
      </p>

      <img
        src="/assets/PlatGameImg.png"
        alt="Platform Game Cover"
        className={styles.mainScreenshot}
      />

      <h4>Tech Stack:</h4>
      <ul>
        <li>Frontend: Vanilla JavaScript, HTML5, CSS3</li>
      </ul>
    </div>
  );
}
