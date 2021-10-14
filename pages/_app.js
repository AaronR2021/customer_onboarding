import "../styles/globals.css";
import "../styles/nav.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="fullBody">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
