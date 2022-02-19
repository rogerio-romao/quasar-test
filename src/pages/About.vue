<template>
  <q-page padding class="flex column bg-light-blue-1">
    <AboutForm />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Who am I</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey">
      I am a software developer with a passion for building web applications.
      I'm very passionate about doing things I like, and doing them well! Currently work as a Full-Stack Developer at
      <a
        href="https://www.calashock.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Calashock Commerce</a>. Get in touch if you need to contact me.
    </p>
    <br />
    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Technologies</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey">
      HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify, Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...
      <br />This website uses many of these, mainly Vue as the framework with heavy use of Vuex for the state, with bespoke components for every section of the app and clear separation of concerns between data and presentation, where i use Tailwind for the base CSS.
      Here is the Github for the source code for this website: https://github.com/rogerio-romao/rogerio
    </p>
    <q-separator />
  </q-page>
</template>

<script>
import { useMeta } from 'quasar';
import { ref } from 'vue'
import AboutForm from 'src/components/AboutForm.vue';
export default {
  components: { AboutForm },
  name: 'About',
  setup() {
    const metadata = useMeta({
      title: 'About Me',
      titleTemplate: title => `${title} - Rogerio's Portfolio`,
    })

    return {
      metadata,
    }
  },
}
</script>

