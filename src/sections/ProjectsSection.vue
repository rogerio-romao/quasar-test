<template>
  <section id="projects" ref="sectionRef" class="py-24 bg-[#12121a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-12 reveal">
        <p
          class="font-mono text-[#6366f1] text-sm tracking-[0.2em] uppercase mb-3"
        >
          All Work
        </p>
        <h2 class="font-alpha font-bold text-4xl md:text-5xl text-[#e4e4e7]">
          Projects
        </h2>
      </div>

      <!-- Filter chips -->
      <div class="flex flex-wrap gap-3 mb-10 reveal">
        <button
          v-for="filter in filters"
          :key="filter"
          class="font-mono text-sm px-4 py-2 border transition-all duration-200"
          :class="
            activeFilter === filter
              ? 'border-[#f0b429] text-[#f0b429] bg-[#f0b429]/10'
              : 'border-[#1a1a2e] text-[#71717a] hover:border-[#a1a1aa] hover:text-[#a1a1aa]'
          "
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects grid -->
      <TransitionGroup
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        move-class="transition-all duration-300"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group cursor-pointer bg-[#0a0a0f] overflow-hidden"
          @click="selectedProject = project"
        >
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-[#f0b429]/0 group-hover:bg-[#f0b429]/10 transition-all duration-300"
            ></div>
          </div>
          <div class="p-3 border-t border-[#1a1a2e]">
            <div
              class="font-alpha font-semibold text-[#e4e4e7] text-sm truncate mb-1"
            >
              {{ project.name }}
            </div>
            <div class="font-mono text-xs text-[#71717a]">
              {{ project.type }}
            </div>
          </div>
        </div>
      </TransitionGroup>
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
  name: "ProjectsSection",
  components: { ProjectDetail },
  setup() {
    const sectionRef = ref(null);
    useReveal(sectionRef);

    const $store = useStore();
    const projects = computed(() => $store.state.projects.projects);
    const selectedProject = ref(null);
    const activeFilter = ref("All");

    const filters = ["All", "Front-End", "Full-Stack", "Back-End"];

    const filteredProjects = computed(() => {
      if (activeFilter.value === "All") return projects.value;
      return projects.value.filter((p) => p.type === activeFilter.value);
    });

    return {
      sectionRef,
      filteredProjects,
      selectedProject,
      activeFilter,
      filters,
    };
  },
});
</script>
