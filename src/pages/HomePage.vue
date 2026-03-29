<template>
  <main>
    <HeroSection />
    <FeaturedSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'
import HeroSection from 'src/sections/HeroSection.vue'
import FeaturedSection from 'src/sections/FeaturedSection.vue'
import ProjectsSection from 'src/sections/ProjectsSection.vue'
import AboutSection from 'src/sections/AboutSection.vue'
import ContactSection from 'src/sections/ContactSection.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeroSection,
    FeaturedSection,
    ProjectsSection,
    AboutSection,
    ContactSection,
  },
  setup () {
    useMeta({
      title: 'Rogerio Romao — Senior Full-Stack Engineer',
    })
  },
})
</script>
