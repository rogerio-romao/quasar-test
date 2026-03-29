<template>
  <section id="about" ref="sectionRef" class="py-24 bg-[#0a0a0f]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16 reveal">
        <p
          class="font-mono text-[#6366f1] text-sm tracking-[0.2em] uppercase mb-3"
        >
          Who I Am
        </p>
        <h2 class="font-alpha font-bold text-4xl md:text-5xl text-[#e4e4e7]">
          About & CV
        </h2>
      </div>

      <!-- Two-column layout -->
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Left: Bio + photo -->
        <div class="reveal">
          <div class="flex items-start gap-6 mb-8">
            <img
              src="../statics/images/rogerio_avatar.jpeg"
              alt="Rogerio Romao"
              class="w-24 h-24 rounded-full object-cover border-2 border-[#1a1a2e] flex-shrink-0"
            />
            <div>
              <h3 class="font-alpha font-bold text-2xl text-[#e4e4e7] mb-1">
                Rogerio Romao
              </h3>
              <p class="font-mono text-sm text-[#6366f1] mb-2">
                Senior Full-Stack Engineer
              </p>
              <p class="font-manrope text-[#71717a] text-sm">
                London, UK · Purrform Ltd
              </p>
            </div>
          </div>

          <p class="font-manrope text-[#a1a1aa] leading-relaxed mb-6">
            I'm a software developer with a passion for building web
            applications. Passionate about doing things well and with care.
            Currently working as a Senior Full-Stack Developer at
            <a
              href="https://purrform.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#6366f1] hover:text-[#f0b429] transition-colors"
              >Purrform Ltd</a
            >.
          </p>

          <div class="flex flex-wrap gap-2 mb-10">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="font-mono text-xs text-[#71717a] border border-[#1a1a2e] px-3 py-1 hover:text-[#f0b429] hover:border-[#f0b429]/40 transition-colors"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Testimonial block -->
          <blockquote
            class="border-l-2 border-[#f0b429] pl-6 py-2 bg-[#12121a] pr-6 rounded-r"
          >
            <p
              class="font-manrope text-[#a1a1aa] italic leading-relaxed mb-3"
              v-html="vincenzoQuote"
            ></p>
            <footer class="font-mono text-xs text-[#71717a]">
              — Vincenzo Aglieri Rinella, Senior Project Delivery Manager @
              Calashock
            </footer>
          </blockquote>
        </div>

        <!-- Right: CV timeline -->
        <div class="reveal">
          <div class="cv-content prose-sm max-w-none" v-html="cv.html"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useReveal } from "src/composables/useReveal";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import cv from "../cv/cv.md";
import vincenzo from "../cv/vincenzo.md";

export default defineComponent({
  name: "AboutSection",
  setup() {
    const sectionRef = ref(null);
    useReveal(sectionRef);

    const $store = useStore();
    const schools = computed(() => $store.state.courses.schools);
    const coursesOpen = ref(false);

    const technologies = [
      "HTML",
      "CSS",
      "TypeScript",
      "Vue",
      "React",
      "Nuxt",
      "Next.js",
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "Tailwind",
      "Git",
    ];

    // Extract a short quote from vincenzo's recommendation
    const vincenzoQuote =
      vincenzo.html
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 280) + "…";

    return {
      sectionRef,
      cv,
      vincenzoQuote,
      schools,
      coursesOpen,
      technologies,
    };
  },
});
</script>
