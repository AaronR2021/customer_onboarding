import styles from "../styles/body_container.module.css";
import Start from "../public/js/module";
import { useState, useEffect } from "react";
import Tooltip from "../components/Tooltip";

function Home() {
  /*_____________useState_____________*/
  const [displayData, setdisplayData] = useState([]);
  const [remove, setremove] = useState(false);
  /*_____________useEffect_____________*/
  useEffect(() => {
    Start.add(
      "main-header",
      "This is main header and Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit."
    );
    Start.add("nav", "This is navbar");
    Start.add("sub-header", "This is sub-header");

    return () => {
      Start.initialise();
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("urls_skip")) {
      //if we finish watching the guide or skipped the tutorial> sets  to true
      setremove(
        localStorage.getItem("urls_skip").includes(window.location.href)
      );
    }

    Start.display().then((val) => setdisplayData(val));
  }, []);
  return (
    <>
      <div className={styles.body}>
        <h2 id="main-header">This is the Home page</h2>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum
          congue leo eget malesuada. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Nulla quis lorem ut libero
          malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
          Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie
          malesuada.
        </p>

        <h2 id="sub-header">This is more info about the Home page</h2>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum
          congue leo eget malesuada. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Nulla quis lorem ut libero
          malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
          Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie
          malesuada.
        </p>
      </div>
      {displayData.length > 0 && !remove ? (
        <Tooltip tips={displayData} removeBox={(val) => setremove(val)} />
      ) : (
        <></>
      )}
    </>
  );
}
export default Home;
