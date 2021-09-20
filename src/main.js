import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(router, VueGoogleMaps, {
    load: {
      key: process.env.MAPS_API_KEY,
    },
  })
  .mount("#app");
