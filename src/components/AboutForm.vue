<template>
  <div class="q-pa-md row items-start full-width q-gutter-md">
    <q-card class="my-card full-width" flat bordered>
      <q-form @submit="onSubmit" ref="msgForm">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs full-width">
            <div class="text-overline">About Me</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              <q-img
                class="round"
                src="../statics/images/rogerio_avatar.jpeg"
              />
              Rogerio Romao
            </div>
            <div class="text-caption text-grey">
              Full-Stack Developer working @ Calashock.
            </div>
            <div class="text-overline">Location:</div>
            <div class="text-caption text-grey">London.</div>
            <div class="text-overline">Get In Touch:</div>
            <div class="q-gutter-md" style="max-width: 600px">
              <q-input
                standout
                v-model="name"
                label="Your Name"
                :rules="[
                  (val) => val.length >= 2 || 'Please fill out your name',
                ]"
              />
              <q-input
                standout
                v-model="email"
                label="Your Email"
                type="email"
                :rules="[isValidEmail]"
              />
              <q-input
                standout
                v-model="subject"
                label="Subject"
                :rules="[
                  (val) =>
                    val.length >= 3 ||
                    'Please enter the subject of your message',
                ]"
              />
              <q-input
                standout
                v-model="message"
                label="Message"
                type="textarea"
                :rules="[
                  (val) => val.length >= 12 || 'Please write your message',
                ]"
              />
            </div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
            type="submit"
            color="primary"
            icon="email"
            label="Send Message"
          />

          <q-btn-group flat>
            <a
              href="https://github.com/rogerio-romao"
              target="_blank"
              class="q-mr-xs"
            >
              <q-btn
                :label="$q.screen.gt.xs ? 'Github' : ''"
                icon="fab fa-github"
                color="info"
              ></q-btn>
            </a>
            <a
              href="https://codepen.io/rogerio-romao"
              target="_blank"
              class="q-mr-xs"
            >
              <q-btn
                :label="$q.screen.gt.xs ? 'Codepen' : ''"
                icon="fab fa-codepen"
                color="info"
              ></q-btn>
            </a>
            <a href="https://www.linkedin.com/in/rogerio-romao" target="_blank">
              <q-btn
                :label="$q.screen.gt.xs ? 'LinkedIn' : ''"
                icon="fab fa-linkedin"
                color="info"
              ></q-btn>
            </a>
          </q-btn-group>
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import emailjs from "emailjs-com";
export default {
  name: "AboutForm",
  setup() {
    const $q = useQuasar();

    const name = ref("");
    const email = ref("");
    const subject = ref("");
    const message = ref("");
    const msgForm = ref(null);

    const onSubmit = () => {
      const templateParams = {
        user_name: name.value,
        user_email: email.value,
        subject: subject.value,
        message: message.value,
      };
      emailjs
        .send(
          "gmail",
          "contact",
          templateParams,
          process.env.VUE_APP_EMAILJS_USERID
        )
        .then(
          (result) => {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message:
                "Thank you for your message, I will get back to you as soon as possible.",
            });
            msgForm.value.reset();
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
          },
          (error) => {
            console.log(error.text);
            $q.notify({
              message: "Error sending message, please try again later.",
              color: "negative",
              icon: "error",
            });
          }
        );
    };

    const isValidEmail = (val) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
    };

    return {
      name,
      email,
      subject,
      message,
      isValidEmail,
      onSubmit,
      msgForm,
    };
  },
};
</script>

<style scoped>
.round {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
a {
  text-decoration: none;
}
</style>
