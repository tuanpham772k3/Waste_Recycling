// Header.tsx
import styles from "./Header.module.css";
import logo from "@/assets/logoappok1.svg"; // đường dẫn đúng trong project

const Header = () => {
  return (
    <header className={styles.header}>
      {/* container */}
      <div className={styles.container}>
        {/* logo wrapper */}
        <div className={styles.logoWrapper} role="img" aria-label="Yêu logo">
          <img src={logo} alt="Yêu logo" className={styles.logo} />
          <span className={styles.nameProduct}>Yêu</span>
        </div>

        {/* navigate */}
        <nav className={styles.navigate} aria-label="Main navigation">
          <ul className={styles.list}>
            <li>
              <a href="/" aria-current="page" className={styles.link}>
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/about" className={styles.link}>
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="/events" className={styles.link}>
                Sự kiện
              </a>
            </li>
          </ul>
        </nav>

        {/* actions */}
        <div className={styles.actions}>
          <button type="button" className={`${styles.btn} ${styles.btnLogin}`}>
            Đăng nhập
          </button>
          <button type="button" className={`${styles.btn} ${styles.btnSignup}`}>
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
