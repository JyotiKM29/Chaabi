import Cards from "../components/Cards";
import styles from "../styles/pages/home.module.scss";

import Cardfeature from "../components/Cardfeature";
import Testimonialcard from "./TestimonialCard";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeleft}>
          <div className={styles.homeleft__heading}>
            Supercharge your workforce with WhatApp learning.
          </div>
          <p className={styles.homeleft__subheading}>
            Unlock their true potential with AI driven vernacular content and
            whatsapp learning.
          </p>
          <button className={styles.homeleft__button}>Start Now</button>
        </div>
        <div className={styles.home_right}>
          <h1>Image Gif</h1>
        </div>
      </div>
      <div className={styles.itWork}>
        <h2>Yes, It Works!</h2>
        <div className={styles.testimonialcards}>
          <Testimonialcard />
        </div>
      </div>
      


     <div className={styles.cards}>

      <Cardfeature  />
     </div>
      

      {/* <div className={styles.cardContainer} >
         <div className={styles.cardContainer_button}>
          <button>feature 1</button>
          <button>feature 2</button>
          <button>feature 3</button>
          <button>feature 4</button>
          <button>feature 5</button>
         </div>
         <div className={styles.cardContainer_cards}>
          <div id={styles.card1}>
            <h1>Card 1</h1>
          </div>
          <div id={styles.card2}>
            <h1>Card 2</h1>
          </div>
          <div id={styles.card3}>
            <h1>Card 3</h1>
          </div>
          <div id={styles.card4}>
            <h1>Card 4</h1>
          </div>
          <div id={styles.card5}>
            <h1>Card 5</h1>
          </div>
         </div>
      </div> */}
      
    </>
  );
};

export default Home;
