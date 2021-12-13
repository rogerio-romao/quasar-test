<template>
  <q-page padding class="flex column bg-light-blue-1">
    <!-- content -->
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered >
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">About Me</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Rogerio Romao</div>
            <div class="text-caption text-grey">
              Intelligent, hard-working, takes pride in quality of work, enjoys learning new skills and does it fast. Experience in managing and leading teams, administrative work, and excellent IT skills. A trusted and valued asset for your company.
            </div>
            <div class="text-overline">Location:</div>
            <div class="text-caption text-grey">London. Available for remote work. Relocation considered.</div>
            <div class="text-overline">Get In Touch:</div>
            <div class="q-gutter-md" style="max-width: 600px">
              <q-form @submit="onSubmit">
                <q-input standout v-model="name" label="Your Name" :rules="[val => val.length >= 2 || 'Please fill out your name']" />
                <q-input standout v-model="email" label="Your Email" type="email" :rules="[isValidEmail]" />
                <q-input standout v-model="subject" label="Subject" :rules="[val => val.length >= 3 || 'Please enter the subject of your message']" />
                <q-input standout v-model="message" label="Message" type="textarea" :rules="[val => val.length >= 12 || 'Please write your message']" />
              </q-form>
            </div>
          </q-card-section>
          

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="round"
              src="../statics/images/rogerio_avatar.jpeg"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn-group round>
            <q-btn flat round icon="email" />
            <q-btn flat color="primary">
              Send Message
            </q-btn>
          </q-btn-group>
        </q-card-actions>
      </q-card>
    </div>
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Who am I</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">
      I am a software developer with a passion for building web applications. 
      I'm very passionate about doing things I like, and doing them well! And I love web development. I'm an avid and fast learner, a very calm person and I like to work hard. I have education background in IT and programming and have worked on it both professionally and as freelancer for some years. Life then took me into other lines of work, I had my own business (music school), and after that shop management. I've now gone back into the path of web development / coding and things couldn't be more interesting these days with the current state of technologies involved.
    </p>
    <br>
    <q-separator />
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Why I code</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">Having decided that my previous line of work was not fulfilling me, had a deep thought about what it was I would like to work on, and this was the most natural decision, as I had that background to start with. Bought several online courses and couldn't be happier, going through them at a fast pace, and enjoying building my own programs applying what i've learnt, besides doing the course's projects. This involved from full back-end site deployments using NodeJS, Express, MongoDB, to small games using Unity and Construct3, to front-end apps apps using Vue, React, HTML5, CSS3, Javascript, Git & jQuery.</p>
    <br>
    <q-separator />
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Where I want to go</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">I see myself doing this passionately, continually improving and learning best practices and new developments. I want to be a world class software engineer, and am applying myself hard to reach that goal - as can be seen by my portfolio. In the short term, the goal would be to get an interesting challenge in an interesting company, on a junior level, to learn and grow and provide value.</p>
    <br>
    <q-separator />
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Technologies</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify, Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...

This website uses many of these, mainly Vue as the framework with heavy use of Vuex for the state, with bespoke components for every section of the app and clear separation of concerns between data and presentation, where i use Tailwind for the base CSS.
Here is the Github for the source code for this website: https://github.com/rogerio-romao/rogerio</p>
  </q-page>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
  }
  },
}
</script>

<style scoped>
.round {

  border-radius: 50%;
}
</style>
