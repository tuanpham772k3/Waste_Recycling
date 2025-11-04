import styles from "../styles/Banner.module.css";
import recycleIcon from "@/assets/icon/layer_1.svg";
import magnifierIcon from "@/assets/icon/magnifier.svg";
import earth from "@/assets/images/earth.png";
import garbage1 from "@/assets/images/garbage1.png";
import garbage2 from "@/assets/images/garbage2.png";
import garbage3 from "@/assets/images/garbage3.png";
import garbage4 from "@/assets/images/garbage4.png";

const garbageImages = [
  { src: garbage1, className: styles.garbage1 },
  { src: garbage2, className: styles.garbage2 },
  { src: garbage3, className: styles.garbage3 },
  { src: garbage4, className: styles.garbage4 },
];

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Từ những mảnh rác nhỏ nhất
            <img src={recycleIcon} alt="Recycle" className={styles.icon} />
          </h1>
          <p className={styles.description}>
            Một hệ sinh thái công nghệ thúc đẩy nguồn dân từ giác thu gom rác tái chế qua
            một ứng dụng điện thoại thông minh.
          </p>
          <button className={styles.btnSearch}>
            <img src={magnifierIcon} alt="Magnifier" aria-hidden="true" />
            Tìm hiểu thêm
          </button>
        </div>

        <div className={styles.visuals}>
          <div className={styles.earth}>
            <img src={earth} alt="Earth" />
            {garbageImages.map(({ src, className }) => (
              <img src={src} className={`${styles.garbage} ${className}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
