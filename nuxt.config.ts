// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.js
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   routeRules: {
//     "/": { prerender: true },
//   },
//   plugins: ["~/plugins/firebase.js"],
// });

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  plugins: ["~/plugins/firebase.js"],
  ssr: true, // Ensure SSR is enabled
  target: "server", // Ensure SSR target is set correctly
  publicRuntimeConfig: {
    firebaseConfig: {
      apiKey: "AIzaSyAM0YfcmGMeSeCbWxxfclP6BDDKAdlTxnI",
      authDomain: "goodang-project-3f7f4.firebaseapp.com",
      projectId: "goodang-project-3f7f4",
      storageBucket: "goodang-project-3f7f4.appspot.com",
      messagingSenderId: "399137880407",
      appId: "1:399137880407:web:fcd6bc7c9e3a15358aa612",
    },
  },
});
