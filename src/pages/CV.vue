<template>
  <q-page padding class="flex column bg-light-blue-1">
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">
      Curriculum Vitae
    </h4>

    <q-separator />

    <q-card dark class="my-card q-pa-lg q-mb-md">
      <q-card-section>
        <div class="post-content" v-html="cv.html"></div>
      </q-card-section>
    </q-card>

    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">
      Recommendations
    </h4>

    <q-card dark class="my-card q-pa-lg q-mb-md">
      <q-card-section>
        <div class="post-content" v-html="vincenzo.html"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";
import { ref } from "vue";

import cv from "../cv/cv.md";
import vincenzo from "../cv/vincenzo.md";

export default {
  components: {},
  name: "CV",
  setup() {
    const metadata = useMeta({
      title: "Curriculum Vitae",
      titleTemplate: (title) => `${title} - Rogerio's Portfolio`,
    });

    return {
      metadata,
      cv,
      vincenzo,
    };
  },
};
</script>
