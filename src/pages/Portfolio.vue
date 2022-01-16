<template>
  <q-page class="flex column bg-light-blue-1">

    <q-layout view="hHh Lpr lff">
      
      <q-page-container class="scroll overflow-hidden">

        <q-drawer
          v-model="drawer"
          :mini="mini"
          width="280"
          @mouseover="mini = false"
          @mouseout="mini = true"
          :mini-width="100"
          :breakpoint="320"
          class="bg-light-blue-5 text-white q-pt-xl q-mt-xl shadow-4"
        >

          <q-scroll-area class="fit q-mt-lg">

            <q-list class="q-pt-md" >

              <template v-for="project in projects" :key="project.id">

                <q-item clickable v-ripple @click="() => changeProject(project.id)">

                  <q-item-section>

                    <q-item v-show="!mini" class="text-subtitle1 text-weight-medium">
                      {{ project.name }}
                    </q-item>

                    <q-item dense>
                      <q-img :src="project.image" :height="mini ? '50px' :  '200px'" :width="mini ? '50px' :  '100%'" class="rounded-borders shadow-6"></q-img>
                    </q-item>

                  </q-item-section>

                </q-item>

              </template>

            </q-list>

          </q-scroll-area>

        </q-drawer>

        <q-page padding>

          <h4 class="q-pl-md text-h3 text-weight-light text-uppercase text-blue-grey">Portfolio</h4>
          <p class="q-pl-md text-subtitle1 text-blue-grey">Click the images on the sidebar to view that project's details.</p>
          <q-separator />

          <q-layout view="hHh lpR fFf" class="q-mt-lg text-center q-px-lg" >

            <h4 class="text-h4  text-uppercase" id="project-scroll">
              {{currentProject.name}}
            </h4>

            <q-btn-group class="q-mb-lg">
              <q-btn type="a" target="_blank" :href="currentProject.source" color="light-blue-12" class="source-btn" size="sm">Source Code</q-btn>
              <q-btn type="a" target="_blank" :href="currentProject.live" color="light-blue-10" size="sm">View Live</q-btn>
            </q-btn-group>

            <p class="text-subtitle1 text-primary">
              <span class="text-weight-medium">Type:</span> {{currentProject.type}}
            </p>

            <div>
              <q-badge v-for="(tech, i) in currentProject.technologies" :color="pillColors[i]" :key="tech" :label="tech" class="q-mr-sm q-mt-sm q-pa-sm text-weight-bold shadow-2" />
            </div>

            <p class="text-subtitle1 font-weight-medium q-mt-lg">
              {{currentProject.shortDesc}}
            </p>

            <q-img :src="currentProject.image" width="100%" class="q-my-lg shadow-8"></q-img>

            <p class="text-subtitle project-description">
              {{currentProject.longDesc}}
            </p>

            <div v-if="currentProject.showDetails">

              <h5 class="text-h6 text-blue-grey text-uppercase">
                Project Details
              </h5>

              <p class="text-left q-mb-lg">
                {{ currentProject.details.head }}
              </p>

              <div class="q-gutter-md q-mb-lg">

                  <img
                    v-for="(image, i) in currentProject.details.images1"
                    :key="i"
                    :src="image"
                    class="shadow-4 detail-image"
                    alt="details from this project"
                  />

              </div>

              <div v-if="currentProject.details.body">

                <p class="text-left q-mb-lg">{{ currentProject.details.body }}</p>

                <div class="q-gutter-sm q-mb-lg">

                  <img
                    v-for="(image, i) in currentProject.details.images2"
                    :key="i"
                    :src="image"
                    class="shadow-4 detail-image"
                    alt="details from this project"
                  />

                </div>

              </div>

              <div v-if="currentProject.details.footer">

                <p class="text-left q-mb-lg">{{ currentProject.details.footer }}</p>

                <div class="q-gutter-sm">

                  <img
                    v-for="(image, i) in currentProject.details.images3"
                    :key="i"
                    :src="image"
                    class="shadow-4 detail-image"
                    alt="details from this project"
                  />

                </div>

              </div>

            </div>

          </q-layout>

        </q-page>

      </q-page-container>

    </q-layout>

  </q-page>
  
</template>

<script>
import {computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { scroll, useMeta } from 'quasar'
import { useRoute } from 'vue-router'

export default {
  name: 'Portfolio',
  setup() {
    const metadata = useMeta({
      title: 'Portfolio',
      titleTemplate: title => `${title} - Rogerio's Portfolio`,
    })

    const route = useRoute()

    let id 
    onMounted(() => {
      id = route.query.project
      if (id) {
        mini.value = true
        selectedProject.value = +id
        changeProject(id)
      }
    })

    const $store = useStore()

    const drawer = ref(true)
    const mini = ref(false)

    const { getScrollTarget, setVerticalScrollPosition } = scroll

    const changeProject = (pos) => {
      selectedProject.value = pos 
      const target = getScrollTarget()
      setVerticalScrollPosition(target, 230, 300)
    }

    const selectedProject = ref(1)

    const projects = computed({
      get: () => $store.state.projects.projects,
    })

    const currentProject = computed({
      get: () => $store.state.projects.projects[selectedProject.value - 1],
    })

    const pillColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']

    return {
      projects,
      drawer,
      selectedProject,
      currentProject,
      pillColors,
      changeProject,
      metadata,
      mini,
    }
  }
}
</script>

<style scoped>
.project-description {
  max-width: 800px;
  margin: 0 auto;
}
.detail-image {
  max-width: 100%;
}
</style>
