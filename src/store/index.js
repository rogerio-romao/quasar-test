import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import featured from "./featured";
import projects from "./projects";
import courses from "./courses";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      featured,
      projects,
      courses,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
