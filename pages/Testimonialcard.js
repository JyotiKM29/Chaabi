import Testimonial from "@/components/Testimonial";
import styles from "../styles/component/TestimonilCard.module.scss";

const Testimonialcard = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
    
        <li
          className={styles.card}
          id={styles.card1}
          style={{ backgroundColor: "#FDCE32", color: "#3E030E" }}
        >
          <Testimonial className={styles.card_body} />
        </li>
        <li
          className={styles.card}
          id={styles.card2}
          style={{ backgroundColor: "#FFAE77", color: "#3E030E" }}
        >
          <Testimonial className={styles.card_body} />
        </li>
        <li
          className={styles.card}
          id={styles.card3}
          style={{ backgroundColor: "#92ABFC", color: "#140E57" }}
        >
          <Testimonial className={styles.card_body} />
        </li>
        <li
          className={styles.card}
          id={styles.card4}
          style={{ backgroundColor: "#B97FE6", color: "#391952" }}
        >
          <Testimonial className={styles.card_body} />
        </li>
      </ul>
    </div>
  );
};

export default Testimonialcard;
