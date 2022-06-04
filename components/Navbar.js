import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~styles/components/navbar.module.scss";

import PageHead from "~components/PageHead";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <PageHead router={router} />
      <div className={styles.container}>
        <div className={styles.titleContainer} onClick={() => router.push("/")}>
          <FontAwesomeIcon icon="blender"></FontAwesomeIcon>
          <h1>Cook50</h1>
        </div>
        <h3 onClick={() => router.push("/saved")}>Saved</h3>
      </div>
    </>
  );
};

export default Navbar;
