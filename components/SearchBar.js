import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "~styles/components/searchbar.module.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    router.push({ pathname: "/search", query: { q: input } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <div
          className={`${styles.searchBtn} ${
            input.trim().length === 0 ? styles.disabled : null
          }`}
          onClick={handleSearch}
        >
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
