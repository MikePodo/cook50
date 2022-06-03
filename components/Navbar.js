import React from "react";
import { useRouter } from "next/router";

import styles from "~styles/components/navbar.module.scss";

import PageHead from "~components/PageHead";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={styles.container}>
      <PageHead route={pathname} />
      <h1>Cook50</h1>
    </div>
  );
};

export default Navbar;
