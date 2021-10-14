var guide = [];

var start = {
  initialise: () => {
    guide = [];
    return guide;
  },
  add: function addGuide(id, desciption = "", url = window.location.href) {
    /*ADDS GUIDE TO guide or LocalStorage if called from another page */
    //localStorage.setItem("tips", []);
    if (url !== window.location.href) {
      //test url
      url.match(/^(http|https):\/\/?([a-d|0-9|/])*/) ? "" : (url = null);

      //
      if (url === null) {
        return;
      }
      //
      else if (localStorage.getItem("tips")) {
        var tips = JSON.parse(localStorage.getItem("tips"));
        //
        if (
          !tips.some(function (el) {
            return el.url === url && el.id === id;
          })
        ) {
          tips.push({ url, id, desciption });
          localStorage.setItem("tips", JSON.stringify(tips));
        } else {
        }
      } else {
        localStorage.setItem(
          "tips",
          JSON.stringify([
            {
              url,
              id,
              desciption,
            },
          ])
        );
      }
    } else {
      //continue normal execution
      return new Promise((resolve, reject) => {
        /*__________________________________Test Phase______________________ */
        //these test cases whould be in filter
        //test id
        document.getElementById(id) ? (id = id) : (id = null);
        //test description
        desciption.trim() === ""
          ? (desciption = null)
          : (desciption = desciption);

        /*______________________if/else Phase______________________ */

        //reject return null
        if (id === null || desciption === "") {
          return "";
        }
        //resolve push object
        else {
          resolve(
            guide.push({
              url,
              id,
              desciption,
            })
          );
        }
      });
    }
  },

  display: () => {
    //check if localstorage present
    if (localStorage.getItem("tips")) {
      //if present
      //retrieve localstorage data
      var tips = JSON.parse(localStorage.getItem("tips"));
      tips = tips.filter((item) => item.url == window.location.href);
      guide = guide.concat(tips);
    }
    return new Promise((resolve, reject) => {
      setTimeout(resolve(guide), 1000);
    });
  },
};

export default start;
