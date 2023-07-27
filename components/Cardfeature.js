import Cards from "@/components/Cards";
import styles from "../styles/component/Cardfeature.module.scss";

const Cardfeature = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        <li className={styles.card} id={styles.card1} >
          <Cards className={styles.card_body} color="#FFE58F" bg="#FDCE32" text="#3E030E"/>
        </li>
        <li className={styles.card} id={styles.card2} style={{backgroundColor:"#FFAE77" ,color:"#3E030E"}} >
          <Cards className={styles.card_body} color="#FFD6BB" bg="#FDCE32" text="#3E030E"/>
        </li>
        <li className={styles.card} id={styles.card3} style={{backgroundColor:"#92ABFC" ,color:"#140E57"}} >
          <Cards className={styles.card_body} color="#B7C6FD" bg="#FDCE32" text="#3E030E"/>
        </li>
        <li className={styles.card} id={styles.card4} style={{backgroundColor:"#B97FE6" ,color:"#391952"}} >
          <Cards className={styles.card_body} color="#D1AAEE" bg="#FDCE32" text="#3E030E"/>
        </li>
       
      </ul>
    </div>
  );
};

export default Cardfeature;
