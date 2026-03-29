<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-[0.97]"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-[0.97]"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-[100] bg-[#0a0a0f] overflow-y-auto"
      >
        <!-- Close -->
        <button
          class="fixed top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-[#a1a1aa] hover:text-white border border-[#1a1a2e] hover:border-[#a1a1aa] transition-all"
          aria-label="Close"
          @click="$emit('close')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="max-w-5xl mx-auto px-6 py-24">
          <!-- Header -->
          <div class="mb-10">
            <span
              v-if="project.type"
              class="font-mono text-xs text-[#6366f1] tracking-widest uppercase"
            >
              {{ project.type }}
            </span>
            <h2
              class="font-alpha font-bold text-4xl md:text-6xl text-[#e4e4e7] mt-2 mb-6"
            >
              {{ project.name }}
            </h2>

            <!-- Tech badges -->
            <div
              v-if="project.technologies?.length"
              class="flex flex-wrap gap-2 mb-8"
            >
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="font-mono text-xs text-[#a1a1aa] border border-[#1a1a2e] px-3 py-1 hover:text-[#f0b429] hover:border-[#f0b429]/50 transition-colors"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex flex-wrap gap-3">
              <a
                v-if="project.source && project.source !== '#'"
                :href="project.source"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-sm text-[#f0b429] border border-[#f0b429] px-5 py-2 hover:bg-[#f0b429] hover:text-[#0a0a0f] transition-all duration-200"
              >
                Source Code
              </a>
              <a
                v-if="project.live && project.live !== '#'"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-sm text-[#a1a1aa] border border-[#1a1a2e] px-5 py-2 hover:border-[#a1a1aa] hover:text-[#e4e4e7] transition-all duration-200"
              >
                View Live
              </a>
            </div>
          </div>

          <!-- Main image -->
          <div class="mb-10 overflow-hidden bg-[#12121a]">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full object-cover max-h-[480px]"
            />
          </div>

          <!-- Description -->
          <div class="mb-10 max-w-3xl">
            <p class="font-manrope text-[#a1a1aa] text-lg leading-relaxed">
              {{ project.longDesc || project.shortDesc }}
            </p>
          </div>

          <!-- Detail head text -->
          <div v-if="project.details?.head" class="mb-10 max-w-3xl">
            <p class="font-manrope text-[#71717a] leading-relaxed">
              {{ project.details.head }}
            </p>
          </div>

          <!-- Detail image gallery -->
          <div
            v-if="project.details?.images1?.length"
            class="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            <div
              v-for="(img, i) in project.details.images1"
              :key="i"
              class="overflow-hidden bg-[#12121a] aspect-square"
            >
              <img
                :src="img"
                :alt="`${project.name} detail ${i + 1}`"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectDetail",
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  emits: ["close"],
});
</script>
