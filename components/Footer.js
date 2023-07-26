import Image from "next/image";
import styles from "../styles/component/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <h4>Acknowledgement of Country</h4>
        <p>
          We acknowledgement Aboriginal and Torres Strait Islander peoples as
          the First Australians and Traditional Custodians of the lands where we
          live, learn and work.
        </p>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__upper}>
          <div className={styles.footer__bottom__upper_logo}>
            {/* Logo */}
            <h1>Chaabi</h1>
            <span>for Bluecollar Works</span>
          </div>
          <div className={styles.footer__bottom__upper_list}>
            <h3>Product</h3>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
          </div>

          {/* product */}
          <div className={styles.footer__bottom__upper_list}>
            <h3>Product</h3>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
          </div>

          {/* Support */}
          <div className={styles.footer__bottom__upper_list}>
            <h3>Product</h3>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
          </div>

          {/* Get in Touch */}
          <div className={styles.footer__bottom__upper_list}>
            <h3>Product</h3>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
            <h5>Features</h5>
          </div>
        </div>

        <div className={styles.footer__bottom__lower}>
          <div className={styles.button}>
            <button>Download Now</button>
          </div>

          {/* Social Handle */}
          <div className={styles.social}>
            <Link href="#">
              <Image src={"/instagram.svg"} width={50} height={50} />
            </Link>
            <Link href="#">
              <Image src={"/facebook.svg"} width={50} height={50} />
            </Link>
            <Link href="#">
              <Image src={"/linkedin.svg"} width={50} height={50} />
            </Link>
            <Link href="#">
              <Image src={"/youtube.svg"} width={50} height={50} />
            </Link>
          </div>
        </div>

        <hr className={styles.hr}/>
        <div className={styles.rights} >
          <div className={styles.rights__left}>
            <span>Cookies</span>
            <span>Cookies Polices</span>
            <span>Private Policy</span>
            <span>Terms</span>
            
          </div>
          <div className={styles.rights__right}>2023 © chaabi. All rights reserved. Powered by WorkRyt Technologies</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
