<template>
  <q-page padding class="flex column bg-light-blue-1">
    <!-- content -->
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered >
        <q-form @submit="onSubmit" ref="msgForm">
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
                
                  <q-input standout v-model="name" label="Your Name" :rules="[val => val.length >= 2 || 'Please fill out your name']" />
                  <q-input standout v-model="email" label="Your Email" type="email" :rules="[isValidEmail]" />
                  <q-input standout v-model="subject" label="Subject" :rules="[val => val.length >= 3 || 'Please enter the subject of your message']" />
                  <q-input standout v-model="message" label="Message" type="textarea" :rules="[val => val.length >= 12 || 'Please write your message']" />
                
              </div>
            </q-card-section>
            

            <q-card-section v-if="$q.screen.gt.xs" class="col-5 flex flex-center">
              <q-img
                class="round"
                src="../statics/images/rogerio_avatar.jpeg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn type="submit" color="primary" icon="email" label="Send Message" />

            <q-btn-group flat>
              <a href="https://github.com/rogerio-romao" target="_blank" class="q-mr-xs">
                <q-btn :label="$q.screen.gt.xs ? 'Github' : ''" icon="fab fa-github" color="info"  >
                </q-btn>
              </a>
              <a href="https://codepen.io/rogerio-romao" target="_blank" class="q-mr-xs">
                <q-btn :label="$q.screen.gt.xs ? 'Codepen' : ''" icon="fab fa-codepen" color="info"  >
                </q-btn>
              </a>
              <a href="https://www.linkedin.com/in/rogerio-romao" target="_blank">
                <q-btn :label="$q.screen.gt.xs ? 'LinkedIn' : ''" icon="fab fa-linkedin" color="info"  >
                </q-btn>
              </a>
            </q-btn-group>
          </q-card-actions>
        </q-form>
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
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">HTML, CSS, Javascript, Vue, React, Vuex, Nuxt, Git, Bootstrap, Vuetify, Tailwind, Canvas Animations, Express, MongoDB, jQuery, NodeJS, Python...<br />
    This website uses many of these, mainly Vue as the framework with heavy use of Vuex for the state, with bespoke components for every section of the app and clear separation of concerns between data and presentation, where i use Tailwind for the base CSS.
    Here is the Github for the source code for this website: https://github.com/rogerio-romao/rogerio</p>
    <q-separator />
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Courses</h4>
    <p class="q-pl-md text-h5 text-weight-light text-blue-grey ">Other than the courses listed below, i also regularly spend time learning using resources such as MDN, W3Schools, FreeCodeCamp - have done nearly all of their certifications. I also enjoy practicing by doing coding challenges / exercises in websites such as Codesignal (163125 points), Codewars(ranked 4kyu, 1293 points) and Edabit (8340 xp). Scored 93% on Hired.com's coding interview tests. Currently taking Harvard University's Computer Science course CS50 online.</p>
    <courses />
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue'
import emailjs from 'emailjs-com';
import Courses from 'src/components/Courses.vue';
export default {
  components: { Courses },
  name: 'About',
  setup () {
    const $q = useQuasar()

    const name = ref('')
    const email = ref('')
    const subject = ref('')
    const message = ref('')
    const msgForm = ref(null)

    const onSubmit = () => {
      const templateParams = {
        user_name: name.value,
        user_email: email.value,
        subject: subject.value,
        message: message.value
      };
      emailjs.send('gmail', 'contact', templateParams, process.env.VUE_APP_EMAILJS_USERID)
        .then((result) => {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Thank you for your message, I will get back to you as soon as possible.'
            })
            msgForm.value.reset()
            name.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        }, (error) => {
            console.log(error.text);
            $q.notify({
                message: 'Error sending message, please try again later.',
                color: 'negative',
                icon: 'error'
            })
        });
    }
      

    const isValidEmail = (val) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
    }

    return {
      name,
      email,
      subject,
      message,
      isValidEmail,
      onSubmit,
      msgForm
    }
  },
}
</script>

<style scoped>
.round {
  border-radius: 50%;
}
a {
  text-decoration: none;
}
</style>
