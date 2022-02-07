<template>
  <q-page padding class="flex column bg-light-blue-1">
    <AboutForm />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Who am I</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey">
      I am a software developer with a passion for building web applications.
      I'm very passionate about doing things I like, and doing them well! And I love web development. I'm an avid and fast learner, a very calm person and I like to work hard. I have education background in IT and programming and have worked on it both professionally and as freelancer for some years. Life then took me into other lines of work, I had my own business (music school), and after that shop management. I've now gone back into the path of web development / coding and things couldn't be more interesting these days with the current state of technologies involved.
    </p>
    <br />
    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Why I code</h4>
    <p
      class="q-pl-md text-h5 text-weight-light text-blue-grey"
    >Having decided that my previous line of work was not fulfilling me, had a deep thought about what it was I would like to work on, and this was the most natural decision, as I had that background to start with. Bought several online courses and couldn't be happier, going through them at a fast pace, and enjoying building my own programs applying what i've learnt, besides doing the course's projects. This involved from full back-end site deployments using NodeJS, Express, MongoDB, to small games using Unity and Construct3, to front-end apps apps using Vue, React, HTML5, CSS3, Javascript, Git & jQuery.</p>
    <br />
    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Where I want to go</h4>
    <p
      class="q-pl-md text-h5 text-weight-light text-blue-grey"
    >I see myself doing this passionately, continually improving and learning best practices and new developments. I want to be a world class software engineer, and am applying myself hard to reach that goal - as can be seen by my portfolio. In the short term, the goal would be to get an interesting challenge in an interesting company, on a junior level, to learn and grow and provide value.</p>
    <br />
    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Technologies</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey">
      HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify, Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...
      <br />This website uses many of these, mainly Vue as the framework with heavy use of Vuex for the state, with bespoke components for every section of the app and clear separation of concerns between data and presentation, where i use Tailwind for the base CSS.
      Here is the Github for the source code for this website: https://github.com/rogerio-romao/rogerio
    </p>
    <q-separator />

    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">Courses</h4>
    <p
      class="q-pl-md text-h5 text-weight-light text-blue-grey"
    >Other than the courses listed below, i also regularly spend time learning using resources such as MDN, W3Schools, FreeCodeCamp - have done nearly all of their certifications. I also enjoy practicing by doing coding challenges / exercises in websites such as Codesignal (163125 points), Codewars(ranked 4kyu, 1293 points) and Edabit (8340 xp). Scored 93% on Hired.com's coding interview tests. Currently taking Harvard University's Computer Science course CS50 online.</p>
    <Courses />
  </q-page>
</template>

<script>
import { useMeta } from 'quasar';
import { ref } from 'vue'
import Courses from 'src/components/Courses.vue';
import AboutForm from 'src/components/AboutForm.vue';
export default {
  components: { Courses, AboutForm },
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

