<template>
  <section
    id="hero"
    class="relative min-h-screen bg-[#0a0a0f] flex items-center justify-center overflow-hidden"
  >
    <!-- Subtle radial glow -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background: radial-gradient(
          ellipse 80% 60% at 50% 40%,
          #1a1a2e 0%,
          transparent 70%
        );
      "
    ></div>

    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Role badge -->
      <div
        ref="taglineRef"
        class="font-mono text-[#6366f1] text-sm tracking-[0.25em] uppercase mb-8"
        style="opacity: 0; transform: translateY(12px)"
      >
        Senior Full-Stack Engineer
      </div>

      <!-- Name -->
      <h1
        class="font-alpha font-extrabold leading-[0.9] mb-8 overflow-hidden tracking-[0.005em]"
        style="font-size: clamp(3.5rem, 12vw, 9rem)"
      >
        <span
          ref="firstName"
          class="block text-[#e4e4e7]"
          style="opacity: 0; transform: translateY(60px)"
          >Rogerio</span
        >
        <span
          ref="lastName"
          class="block text-[#f0b429]"
          style="opacity: 0; transform: translateY(60px)"
          >Romao</span
        >
      </h1>

      <!-- Subtitle -->
      <p
        ref="subtitleRef"
        class="font-manrope text-[#a1a1aa] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        style="opacity: 0; transform: translateY(16px)"
      >
        Building elegant, performant web experiences.<br />Full-stack from
        pixels to solid backends.
      </p>

      <!-- CTA buttons -->
      <div
        ref="ctaRef"
        class="flex flex-wrap gap-4 justify-center"
        style="opacity: 0; transform: translateY(16px)"
      >
        <button
          class="font-mono text-sm text-[#f0b429] border border-[#f0b429] px-7 py-3 hover:bg-[#f0b429] hover:text-[#0a0a0f] transition-all duration-200 tracking-wider"
          @click="scrollTo('featured')"
        >
          View My Work
        </button>
        <button
          class="font-mono text-sm text-[#a1a1aa] border border-[#1a1a2e] px-7 py-3 hover:border-[#a1a1aa] hover:text-[#e4e4e7] transition-all duration-200 tracking-wider"
          @click="scrollTo('contact')"
        >
          Get In Touch
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      ref="scrollRef"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#71717a]"
      style="opacity: 0"
    >
      <span class="font-mono text-xs tracking-[0.2em] uppercase">Scroll</span>
      <div
        class="w-px h-10 bg-gradient-to-b from-[#71717a] to-transparent animate-pulse"
      ></div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HeroSection",
  setup() {
    const taglineRef = ref(null);
    const firstName = ref(null);
    const lastName = ref(null);
    const subtitleRef = ref(null);
    const ctaRef = ref(null);
    const scrollRef = ref(null);

    const scrollTo = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    onMounted(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(taglineRef.value, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 })
        .to(firstName.value, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
        .to(lastName.value, { opacity: 1, y: 0, duration: 0.9 }, "-=0.65")
        .to(subtitleRef.value, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(ctaRef.value, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(scrollRef.value, { opacity: 1, duration: 0.6 }, "-=0.2");
    });

    return {
      taglineRef,
      firstName,
      lastName,
      subtitleRef,
      ctaRef,
      scrollRef,
      scrollTo,
    };
  },
});
</script>
