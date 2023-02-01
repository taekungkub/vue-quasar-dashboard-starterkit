// FILE: main.js

import { Quasar } from "quasar";
import quasarLang from "quasar/lang/th";

// Import icon libraries
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/material-icons/material-icons.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";
import { Notify } from "quasar";

Notify.setDefaults({
  progress: true,
  timeout: 2500,
  textColor: "white",
  position: "bottom-right",
  actions: [{ icon: "close", color: "white" }],
});

const quasar = {
  install(myApp: any) {
    myApp.use(Quasar, {
      plugins: {
        Notify,
      }, // import Quasar plugins and add here
      lang: quasarLang,

      config: {
        brand: {
          primary: "#5E61E6",
          secondary: "#788392",
          accent: "#66C731",
          dark: "#202F3F",
          positive: "#66C731",
          negative: "#E6381B",
          info: "#05AFD4",
          warning: "#E69900",
        },
        notify: {},
      },
    });
  },
};

export default quasar;
