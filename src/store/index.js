import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import featured from "./featured";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      featured,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
