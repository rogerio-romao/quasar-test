<template>
  <section id="featured" ref="sectionRef" class="py-24 bg-[#0a0a0f]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16 reveal">
        <p
          class="font-mono text-[#6366f1] text-sm tracking-[0.2em] uppercase mb-3"
        >
          Selected Work
        </p>
        <h2
          class="font-alpha font-bold text-4xl md:text-5xl text-[#e4e4e7] tracking-wide"
        >
          Featured Projects
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in featured"
          :key="project.id"
          class="group relative overflow-hidden cursor-pointer bg-[#12121a] reveal"
          @click="selectedProject = enrichedProject(project)"
        >
          <!-- Image container -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-[#0a0a0f]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <div
                class="translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
              >
                <h3 class="font-mono font-bold text-lg text-[#e4e4e7] mb-2">
                  {{ project.name }}
                </h3>
                <p
                  class="font-manrope text-[#a1a1aa] text-sm mb-4 line-clamp-2"
                >
                  {{ project.shortDesc }}
                </p>
                <span
                  class="font-mono text-xs text-[#f0b429] border border-[#f0b429]/60 px-3 py-1"
                >
                  View Details →
                </span>
              </div>
            </div>

            <!-- Amber border glow on hover -->
            <div
              class="absolute inset-0 border-2 border-transparent group-hover:border-[#f0b429]/30 transition-all duration-300 pointer-events-none"
            ></div>
          </div>

          <!-- Card footer -->
          <div class="p-4 border-t border-[#1a1a2e]">
            <h3
              class="font-alpha font-semibold text-[#e4e4e7] text-sm truncate mb-2"
            >
              {{ project.name }}
            </h3>
            <div class="flex flex-wrap gap-x-2 gap-y-1">
              <span
                v-for="tech in getTechs(project)"
                :key="tech"
                class="font-mono text-xs text-[#71717a] group-hover:text-[#a1a1aa] transition-colors"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProjectDetail :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>

<script>
import ProjectDetail from "src/components/ProjectDetail.vue";
import { useReveal } from "src/composables/useReveal";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "FeaturedSection",
  components: { ProjectDetail },
  setup() {
    const sectionRef = ref(null);
    useReveal(sectionRef);

    const $store = useStore();
    const featured = computed(() => $store.state.featured.featured);
    const allProjects = computed(() => $store.state.projects.projects);
    const selectedProject = ref(null);

    const getTechs = (featuredItem) => {
      if (!featuredItem.projectRef) return [];
      const match = allProjects.value.find(
        (p) => p.id === featuredItem.projectRef
      );
      return match?.technologies?.slice(0, 4) ?? [];
    };

    // Merge featured data with matching project data (technologies etc.)
    const enrichedProject = (featuredItem) => {
      const match = allProjects.value.find(
        (p) => p.id === featuredItem.projectRef
      );
      return {
        ...featuredItem,
        type: match?.type,
        technologies: match?.technologies,
        details: match?.details,
      };
    };

    return {
      sectionRef,
      featured,
      selectedProject,
      getTechs,
      enrichedProject,
    };
  },
});
</script>
