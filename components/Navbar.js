import React from "react";
import { useRouter } from "next/router";

import styles from "~styles/components/navbar.module.scss";

import PageHead from "~components/PageHead";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <PageHead route={pathname} />
      <div className={styles.container}>
        <h1 onClick={() => router.push("/")}>Cook50</h1>
        <h3 onClick={() => router.push("/saved")}>Saved</h3>
      </div>
    </>
  );
};

export default Navbar;
