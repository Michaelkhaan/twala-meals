import Link from "next/link";
import styles from "./footer.module.scss"
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
      <div className={styles.brand}>
      <img
        src="/logo.png" alt="Logo"
        className={styles.logo}
        />
        </div>
        <div className={styles.navLinks}>
        <Link href="">About Us</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Get Help</Link>
          <Link href="#">Start to Deliver</Link>
          <Link href="#">Add Restaurant</Link>
        </div>
        <div className={styles.socials}>
    
        <Image
         width={30}
        height={30}
        src="/linkedin.png" alt="Logo"/>
        <Image
         width={30}
        height={30}
        src="/facebook.png" alt="Logo"/>
        <Image
         width={30}
        height={30}
        src="/twitter.png" alt="Logo"/>
        </div>
      </div>
      <div className={styles.middle}>
       <div className={styles.contact}>
       <button className={styles.contactButton}>Contact us:</button>
       <p className={styles.emailText}>
            Email: <Link href="mailto:contact@twalameals.com">contact@twalameals.com</Link>
          </p>
          <p className={styles.phone}>
            Phone: <a href="tel:1-800-567-8901">1-800-567-8901</a>
          </p>
          <p className={styles.desc}>Countries We Operate In: Zambia,<br className={styles.contactDescbr}/> Zimbabwe, Botswana, Namibia, Malawi</p>
       </div>
       <div className={styles.subscribe}>
          <input type="email" placeholder="Enter Your Email" className={styles.input} />
          <button className={styles.subscribeButton}>Subscribe To <br/> Amazing Deals</button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
       <div>
       <p>© 2024 BrightCodeLab Inc. All Rights Reserved.</p>
       </div>
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
