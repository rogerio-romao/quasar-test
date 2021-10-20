import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import featured from "./featured";
import projects from "./projects";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      featured,
      projects,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
