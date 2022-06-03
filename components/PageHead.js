import React from "react";
import Head from "next/head";

const PageHead = ({ route }) => {
  const getTitle = () => {
    switch (route) {
      case "/":
        return " | Home";
      default:
        return "";
    }
  };

  return (
    <div>
      <Head>
        <title>{`Cook50${getTitle()}`}</title>
      </Head>
    </div>
  );
};

export default PageHead;
