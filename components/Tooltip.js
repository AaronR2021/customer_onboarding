import styles from "../styles/body_container.module.css";
import { useState, useEffect } from "react";
//workflow of tooltip
function ToolTip({ tips, removeBox }) {
  //onclick of next button
  const [next, setNext] = useState(0);
  //used to skip the initial render
  const [loading, setloading] = useState(0);
  //holds all info about what should be shown in the guideBox
  const [boxInfo, setBoxInfo] = useState();
  //resets the box on change of website
  /*                                                          */
  useEffect(() => {
    removeBox(false);
    return () => {
      removeBox(true);
    };
  }, []);
  //work here>else
  useEffect(() => {
    if (next < tips.length) {
      setloading(1);
      setBoxInfo(tips);
      //total height of document
      var totalHeight = document.querySelector("body").scrollHeight;
      //location used to find additional info about the selected ID element
      var location = document
        .getElementById(tips[next].id)
        .getBoundingClientRect();

      //selects the smaller rotated tip
      var smallTip = document.getElementById("smallTip"); //inner box

      //selects the guideBox
      var tipbox = document.getElementById("tipbox"); //outer box

      //checks if guideBox has to display above ID or below
      if (totalHeight - location.bottom > 210) {
        tipbox.style.left = location.left + "px";
        tipbox.style.top =
          location.top + window.scrollY + location.height + "px";

        smallTip.style.left = 100 + location.left + "px";
        smallTip.style.top =
          location.top + window.scrollY + location.height + "px";
      } //
      else {
        var tipboxheight = tipbox.getBoundingClientRect();
        console.log("else part coz its small");
        tipbox.style.left = location.left + "px";
        tipbox.style.bottom = location.top + "px";
        tipbox.style.top = location.top - tipboxheight.height + "px";
        smallTip.style.left = location.left + 6 + "px";
        smallTip.style.top = location.top - 28 + "px";
      }
    }
  }, [next]);
  /*                                                          */
  //clicked when finished watching the tutorial or skipped it
  function radioButton() {
    if (localStorage.getItem("urls_skip")) {
      var urls = JSON.parse(localStorage.getItem("urls_skip"));
      //
      if (urls.includes(window.location.href)) {
        removeBox(true);
        //skip
      } else {
        urls.push(window.location.href);
        localStorage.setItem("urls_skip", JSON.stringify(urls));
        removeBox(true);
      }
    } //
    else {
      localStorage.setItem("urls_skip", JSON.stringify([window.location.href]));
      removeBox(true);
    }
  }
  //to make sure application does not break when resizing
  window.addEventListener("resize", () => {
    var totalHeight = document.querySelector("body").scrollHeight;
    //location used to find additional info about the selected ID element
    var location = document
      .getElementById(tips[next].id)
      .getBoundingClientRect();

    //selects the smaller rotated tip
    var smallTip = document.getElementById("smallTip"); //inner box

    //selects the guideBox
    var tipbox = document.getElementById("tipbox"); //outer box

    //checks if guideBox has to display above ID or below
    if (totalHeight - location.bottom > 210) {
      tipbox.style.left = location.left + "px";
      tipbox.style.top = location.top + window.scrollY + location.height + "px";

      smallTip.style.left = 100 + location.left + "px";
      smallTip.style.top =
        location.top + window.scrollY + location.height + "px";
    } //
    else {
      var tipboxheight = tipbox.getBoundingClientRect();
      console.log("else part coz its small");
      tipbox.style.left = location.left + "px";
      tipbox.style.bottom = location.top + "px";
      tipbox.style.top = location.top - tipboxheight.height + "px";
      smallTip.style.left = location.left + 6 + "px";
      smallTip.style.top = location.top - 28 + "px";
    }
  });
  return (
    <>
      <div className={styles.tip} id="smallTip"></div>
      <div className={styles.tooltip} id="tipbox">
        {!loading ? removeBox(true) : removeBox(false)}
        <div className={styles.withinTooltip}>
          <h2>One more thing...</h2>
          <div className={styles.scroll}>
            <p>{loading ? boxInfo[next].desciption : ""}</p>
          </div>
          <div className={styles.tooltipFooter}>
            <form className={styles.form}>
               {" "}
              <input
                type="radio"
                id="hideTooltip"
                onClick={() => radioButton()}
              />
              <label htmlFor="hideTooltip">Hide these tips</label>
            </form>
            {tips.length - 1 > next ? (
              <button
                className={styles.next}
                onClick={() =>
                  tips.length - 1 > next ? setNext(next + 1) : ""
                }
              >
                <a className={styles.anchor}>Next</a>
              </button>
            ) : (
              <button className={styles.next} onClick={() => radioButton(true)}>
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ToolTip;
