import styles from "./header.module.scss";


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.socials}>
        <ul>
          <li>
            <a href="https://github.com/kuldeep-joshi1212">
              <i className={`bx bxl-github ${styles.social}`}></i>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/kuldeep-joshi/  ">
              <i className={`bx bx-code-alt ${styles.social}`}></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kuldeep-joshi1212/">
              <i className={`bx bxl-linkedin ${styles.social}`}></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/kuldeep_joshi_">
              <i className={`bx bxl-twitter ${styles.social}`}  ></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/7355442260">
              <i className={`bx bxl-whatsapp ${styles.social}`}></i>
            </a>
          </li>
          <li>
            <a href="mailto:kuldeep.kj.joshi@gmail.com">
              <i className={`bx bxl-gmail ${styles.social}`}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
