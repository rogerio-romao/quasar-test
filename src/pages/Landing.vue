<template>
  <div class="container">
    <h4 class="continue" ref="continueRef" @click="goToMain">Moving to site in {{ 3 - secsLeft }}</h4>
    <div class="heading" ref="heading">
      <h1 ref="header1" class="h1">Welcome to</h1>
      <h1 ref="header2" class="h2">my Portfolio!</h1>
    </div>
    <div id="image-wrapper">
      <img src="../assets/rogerio_avatar.png" alt="rogerio" class="avatar" ref="avatar" />
    </div>
    <div class="nome" ref="nome">Rogerio →</div>
    <div class="stats">
      <div class="stats1" ref="stats1">{{ numProjectsStart.val }} Projects</div>
      <div class="stats2" ref="stats2">{{ numFeaturedStart.val }} Featured</div>
      <div class="stats3" ref="stats3">1 Awesome Dev</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { gsap } from "gsap";
import { useQuasar, useMeta } from 'quasar'

const $q = useQuasar()

const $store = useStore()

const $router = useRouter();

const heading = ref(null);
const header1 = ref(null);
const header2 = ref(null);
const avatar = ref(null);
const nome = ref(null);
const continueRef = ref(null);
const stats1 = ref(null);
const stats2 = ref(null);
const stats3 = ref(null);
const numProjectsStart = reactive({ val: 0 });
const numProjectsEnd = computed(() => $store.state.projects.projects.length);
const numFeaturedStart = reactive({ val: 0 });
const numFeaturedEnd = computed(() => $store.state.featured.featured.length)
const secsLeft = ref(0)

const metadata = useMeta({
  title: 'Welcome',
  titleTemplate: title => `${title} - Rogerio's Portfolio`,
})

const goToMain = () => {
  $router.push({
    path: "/featured",
  });
}

const startCountdown = () => {
  const interval = setInterval(() => {
    secsLeft.value++;
    if (secsLeft.value === 3) {
      clearInterval(interval);
      goToMain();
    }
  }, 1000);
}


onMounted(() => {
  if ($q.platform.is.mobile) {
    gsap.set(heading.value, { scale: 0.5 })
    gsap.set(stats1.value, { scale: 0.8 })
    gsap.set(stats2.value, { scale: 0.8 })
    gsap.set(stats3.value, { scale: 0.8 })

  }
  gsap.set(avatar.value, { autoAlpha: 1, scale: 0, rotate: 540 });
  gsap.set(nome.value, { opacity: 0, y: -20 });
  gsap.set(stats1.value, { opacity: 0, y: "+100" });
  gsap.set(stats2.value, { opacity: 0, y: "+50" });
  gsap.set(stats3.value, { opacity: 0, y: "-50", x: "+150" });
  gsap.set(continueRef.value, { opacity: 0, y: "-100" });

  const tl = gsap.timeline({
    defaults: { ease: "elastic", duration: 1 },
    onComplete: () => startCountdown(),
  });

  tl.to(header1.value, {
    opacity: 1,
    y: 0,
    color: "#8c0",
    duration: 1.5,
    delay: 1.5,
  })
    .to(header2.value, {
      opacity: 1,
      y: 0,
      color: "#8c0",
    })
    .to(avatar.value, {
      opacity: 1,
      ease: "bounce(6)",
      x: 48,
      y: -48,
      rotate: 0,
      scale: 1,
      duration: 1,
    })
    .to(stats1.value, {
      opacity: 1,
      y: 0,
      delay: 1.2,
    })
    .to(numProjectsStart, 1, {
      val: numProjectsEnd.value,
      duration: 2,
      ease: "power1.in",
      roundProps: "val",
    })
    .to(stats2.value, {
      opacity: 1,
      color: "#72b8e4",
      y: 0,
    }, "-=0.5")
    .to(numFeaturedStart, 1, {
      val: numFeaturedEnd.value,
      duration: 2,
      ease: "slow(0.5, 0.4, false)",
      roundProps: "val",
    })
    .to(stats3.value, {
      opacity: 1,
      color: "#c93926",
      x: 0,
      y: 0,
      delay: 0.2,
      duration: 2.5,
    })
    .to(
      nome.value,
      {
        opacity: 1,
        color: "#29c9b6",
        ease: "bounce.out",
        x: 48,
        y: -48,
        scale: 0.7,
        skewY: 15,
      },
      "-=0.5"
    )
    .to(continueRef.value, {
      opacity: 1,
      color: "#c9b626",
      y: 0,
      delay: 1,
    });
});
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Playfair+Display:wght@500&family=Staatliches&display=swap");
.container {
  cursor: none;
  background: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Staatliches", cursive;
}
img {
  display: block;
  width: 26vmin;
  height: 26vmin;
  border-radius: 50%;
  opacity: inherit;
  perspective: 500px;
}
h1 {
  margin: 0;
  display: block;
}
#image-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 16vmin;
  margin-right: 16vmin;
}
.heading {
  text-align: center;
  width: 100vw;
}
.h1 {
  transform: translateY(-13vmin);
}
.h2 {
  transform: translateY(13vmin);
}
.nome {
  font-size: 8.5vmin;
  color: aliceblue;
  position: absolute;
  top: 18vmin;
  right: 43vmin;
  font-family: "Amatic SC", cursive;
  font-weight: 700;
}
.stats {
  position: absolute;
  bottom: 0;
  left: 4vmin;
  right: 0;
  top: 70%;
  padding: 4.5vmin;
  font-size: clamp(1.5rem, -0.875rem + 7vw, 3.5rem);
  color: aliceblue;
  display: flex;

  gap: 7vmin;
}
.stats > div {
  transform-origin: center;
  flex: 1;
}
.stats1 {
  margin-left: 6.5vmin;
}
.continue {
  font-size: 4vmin;
  color: #e3d9f2;
  position: absolute;
  top: 26vmin;
  left: 16vmin;
  margin: 0 auto;
}
</style>

