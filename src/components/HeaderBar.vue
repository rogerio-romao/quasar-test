<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1a1a2e]' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Name / Logo -->
      <button
        class="font-syne font-bold text-xl text-[#f0b429] hover:text-[#f5c842] transition-colors tracking-widest"
        @click="scrollToSection('hero')"
      >
        RR
      </button>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <button
          v-for="section in sections"
          :key="section.id"
          class="font-mono text-sm transition-colors"
          :class="activeSection === section.id ? 'text-[#f0b429]' : 'text-[#a1a1aa] hover:text-[#e4e4e7]'"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </button>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-[#a1a1aa] hover:text-white transition-colors p-1"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[#12121a] border-b border-[#1a1a2e] py-4"
      >
        <div class="max-w-7xl mx-auto px-6 flex flex-col gap-1">
          <button
            v-for="section in sections"
            :key="section.id"
            class="text-left font-mono text-sm py-3 border-b border-[#1a1a2e] last:border-0 transition-colors"
            :class="activeSection === section.id ? 'text-[#f0b429]' : 'text-[#a1a1aa] hover:text-[#e4e4e7]'"
            @click="scrollToSection(section.id); mobileOpen = false"
          >
            {{ section.label }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'HeaderBar',
  setup () {
    const scrolled = ref(false)
    const mobileOpen = ref(false)
    const activeSection = ref('hero')

    const sections = [
      { id: 'hero', label: 'Home' },
      { id: 'featured', label: 'Featured' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ]

    const scrollToSection = (id) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScroll = () => {
      scrolled.value = window.scrollY > 20
    }

    let observer = null

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSection.value = entry.target.id
            }
          })
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )

      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      if (observer) observer.disconnect()
    })

    return {
      scrolled,
      mobileOpen,
      activeSection,
      sections,
      scrollToSection,
    }
  },
})
</script>
