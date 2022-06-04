import React from "react";
import Head from "next/head";

const PageHead = ({ router }) => {
  const { pathname, query } = router;
  const getTitle = () => {
    switch (pathname) {
      case "/":
        return " | Home";
      case "/saved":
        return " | Saved Recipes";
      case "/search":
        return ` | ${query.q.replace(/\b(\w)/g, (s) => s.toUpperCase())}`;
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
