import React from "react";
import styles from "~styles/pages/index.module.scss";

import Navbar from "~components/Navbar";

const Home = () => {
  return (
    <div className={styles.screen}>
      <Navbar />
    </div>
  );
};

export default Home;
