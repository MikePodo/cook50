import "~styles/globals.scss";

import { library, config } from "@fortawesome/fontawesome-svg-core";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  faStopwatch,
  faFire,
  faPepperHot,
  faBookmark,
  faBookOpen,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import { faBookmark as faBookmarkOutline } from "@fortawesome/free-regular-svg-icons";

library.add(
  faStopwatch,
  faFire,
  faPepperHot,
  faBookmark,
  faBookmarkOutline,
  faBookOpen,
  faEye
);

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={1500} />
      <Component {...pageProps} />
      <h2 className="footer">
        &copy; 2022 Michael Podolsky - Created Using Edamam Recipe API
      </h2>
    </>
  );
}

export default MyApp;
