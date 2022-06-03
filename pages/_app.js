import "~styles/globals.scss";

import { library, config } from "@fortawesome/fontawesome-svg-core";

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
  return <Component {...pageProps} />;
}

export default MyApp;
