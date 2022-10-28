import "./styles/quasar.scss";
import lang from "quasar/lang/ru.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {},
  lang: lang,
  build: {
    scopeHosting: true,
    vueRouterMode: "history",
  },
};
