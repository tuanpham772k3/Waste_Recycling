import styles from "../styles/Content.module.css";
import video1 from "../../../assets/videos/video1.mp4";
import trash from "../../../assets/images/trash.png";

const Content = () => {
    return (
        <main>
            {/* Section 1*/}
            <section className={styles.content}>
                {/* container */}
                <div className={styles.container}>
                    {/* Title */}
                    <div className={styles.title}>
                        <h2>Sứ mệnh của chúng tôi</h2>
                        <p>
                            Kết nối người dân/hộ gia đình có rác tái chế với người thu gom và các
                            đơn vị tái chế một cách tiện lợi và hiệu quả thông qua nền tảng công
                            nghệ.
                        </p>
                    </div>

                    {/* Wrapper mission*/}
                    <div className={styles.missionWrapper}>
                        {/* List Mission */}
                        <div className={styles.missionList}>
                            {/* 1 */}
                            <div className={styles.missionItem}>
                                <div className={styles.missionItemContent}>
                                    <h3>Từng bước bảo vệ môi trường</h3>
                                    <p>
                                        Thúc đẩy phân loại rác tại nguồn và tăng tỷ lệ tái chế, giảm
                                        thiểu lượng rác thải ra môi trường, góp phần bảo vệ môi
                                        trường.
                                    </p>
                                </div>
                                <span className={styles.missionNumber}>1</span>
                            </div>
                            {/* 2 */}
                            <div className={styles.missionItem}>
                                <div className={styles.missionItemContent}>
                                    <h3>Bổ sung nguồn thu nhập</h3>
                                    <p>
                                        Tạo thêm nguồn thu nhập cho người thu gom và tối ưu hóa
                                        chuỗi cung ứng rác tái chế.
                                    </p>
                                </div>
                                <span className={styles.missionNumber}>2</span>
                            </div>
                            {/* 3 */}
                            <div className={styles.missionItem}>
                                <div className={styles.missionItemContent}>
                                    <h3>Cộng đồng nhỏ, ý thức lớn</h3>
                                    <p>
                                        Xây dựng một cộng đồng có ý thức về tái chế và tiêu dùng bền
                                        vững.
                                    </p>
                                    <span className={styles.missionNumber}>3</span>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className={styles.missionItem}>
                                <div className={styles.missionItemContent}>
                                    <h3>Minh bạch và an toàn</h3>
                                    <p>
                                        Ứng dụng công nghệ để minh bạch hóa và nâng cao hiệu quả của
                                        ngành công nghiệp tái chế.
                                    </p>
                                </div>
                                <span className={styles.missionNumber}>4</span>
                            </div>
                        </div>

                        {/* Video */}
                        <div className={styles.videoWrapper}>
                            <video autoPlay loop muted playsInline className={styles.video}>
                                {" "}
                                <source src={video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2*/}
            <section className={styles.needContent}>
                {/* container */}
                <div className={styles.needContainer}>
                    {/* title wrapper */}
                    <div className={styles.needTitle}>
                        <h2>Và... chúng tôi cần bạn</h2>
                        <p>
                            Hiện nay, rác tái chế (nhựa, giấy, kim loại...) bị bỏ phí rất lớn vì
                            không được thu gom đúng cách. Đồng thời, người dân chưa có động lực thực
                            sự để nhặt và phân loại rác.
                        </p>
                    </div>

                    {/* process wrapper */}
                    <div className={styles.needProcessList}>
                        {/* item 1 */}
                        <div className={styles.needProcessItem}>
                            <span className={styles.needProcessNumber}>1</span>
                            <h3>Tạo yêu cầu thu gom rác</h3>
                            <img src={trash} alt="trash" />
                        </div>
                        {/* item 2 */}
                        <div className={styles.needProcessItem}>
                            <span className={styles.needProcessNumber}>2</span>
                            <h3>Điều phối người thu gom</h3>
                            <img src={trash} alt="trash" />
                        </div>
                        {/* item 3 */}
                        <div className={styles.needProcessItem}>
                            <span className={styles.needProcessNumber}>3</span>
                            <h3>Ghi nhận giao dịch, thanh toán</h3>
                            <img src={trash} alt="trash" />
                        </div>
                        {/* item 4 */}
                        <div className={styles.needProcessItem}>
                            <span className={styles.needProcessNumber}>4</span>
                            <h3>Xử lý rác đã thu gom</h3>
                            <img src={trash} alt="trash" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Content;
