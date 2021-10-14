import styles from "../styles/body_container.module.css";
import Head from "next/head";
import Start from "../public/js/module";
import { useState, useEffect } from "react";
import Tooltip from "../components/Tooltip";

function Profile() {
  /*_____________useState_ ____________*/
  const [displayData, setdisplayData] = useState([]);
  const [remove, setremove] = useState(false);
  /*_____________useEffect_____________*/
  useEffect(() => {
    Start.add(
      "nav",
      "This is navbar and This is main header and Vivamus magna justo, lacinia eget consectetur sed"
    );
    Start.add(
      "footer",
      "This is a footer and This is main header and Vivamus magna justo, lacinia eget consectetur sed"
    );

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
        <h2 id="main-header">This is the Profile page</h2>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum
          congue leo eget malesuada. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Nulla quis lorem ut libero
        </p>
        <p>
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
          Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie
          malesuada.
        </p>

        <h2>This is more info about the Profile page</h2>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum
          congue leo eget malesuada. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Nulla quis lorem ut libero
        </p>
        <p>
          malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
          Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie
          malesuada.
        </p>
        <div id="footer" className={styles.footer}>
          <p>Author: Aaron Rebelo</p>
          <a href="mailto:hege@example.com">aaronrebelo.personal@gmail.com</a>
        </div>
      </div>

      {displayData.length > 0 && !remove ? (
        <Tooltip tips={displayData} removeBox={(val) => setremove(val)} />
      ) : (
        <></>
      )}
    </>
  );
}
export default Profile;
