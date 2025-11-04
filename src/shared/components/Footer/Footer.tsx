import styles from "./Footer.module.css";
import logo2 from "@/assets/logoappok2.svg"; // đường dẫn đúng trong project
import vectorIcon from "@/assets/icon/vector.svg";
import facebook from "@/assets/icon/facebook.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* container  */}
      <div className={styles.container}>
        {/* wrapper */}
        <div className={styles.wrapper}>
          {/* logo */}
          <img src={logo2} alt="Yêu Project logo" className={styles.logo} />

          {/* subscribe */}
          <div className={styles.subscribe}>
            <h3>Nhận thông tin mới nhất từ chúng tôi</h3>
            <form className={styles.form}>
              <input type="email" placeholder="Nhập email của bạn" required />
              <button type="submit">
                <img src={vectorIcon} alt="Gửi" />
              </button>
            </form>
          </div>
        </div>
        {/* navigate */}
        <nav className={styles.navigate}>
          {/* title */}
          <h4 className={styles.title}>Điều hướng</h4>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Trang chủ
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Về chúng tôi
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Sự kiện
              </a>
            </li>
          </ul>
          {/* btn */}
          <button className={styles.btnFacebook}>
            <img src={facebook} alt="facebook" />
          </button>
        </nav>
      </div>
      {/* copyright */}
      <div className={styles.copyright}>
        <p>YEU.COM © Bản quyền của Công ty TNHH abcd</p>
      </div>
    </footer>
  );
};

export default Footer;
