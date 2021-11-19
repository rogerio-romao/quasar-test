<template>
  <q-page class="flex column bg-light-blue-1">

    <q-layout view="hHh Lpr lff">
      
      <q-page-container>

        <q-drawer
          v-model="drawer"
          :width="300"
          :breakpoint="500"
          bordered
          class="bg-blue text-white q-pt-xl q-mt-xl"
        >

          <q-scroll-area class="fit q-mt-lg">

            <q-list class="q-pt-md">

              <template v-for="project in projects" :key="project.id">

                <q-item clickable v-ripple @click="selectedProject = project.id">

                  <q-item-section>

                    <q-item class="text-subtitle1 text-weight-medium">
                      {{ project.name }}
                    </q-item>

                    <q-item>
                      <q-img :src="project.image" height="200px"></q-img>
                    </q-item>

                  </q-item-section>

                </q-item>

              </template>

            </q-list>

          </q-scroll-area>

        </q-drawer>

        <q-page padding>

          <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Portfolio</h4>

          <q-separator />

          <q-layout view="hHh lpR fFf" class="q-mt-lg text-center q-px-lg">

            <h4 class="text-h4">
              {{currentProject.name}}
            </h4>

            <p class="text-subtitle2">
              Type: {{currentProject.type}}
            </p>

            <p class="text-subtitle2">
              {{currentProject.shortDesc}}
            </p>

            <div>
              <q-badge v-for="(tech, i) in currentProject.technologies" :color="pillColors[i]" :key="tech" :label="tech" class="q-mr-sm q-pa-xs" />
            </div>

            <q-img :src="currentProject.image" width="800px" class="q-my-lg shadow-8"></q-img>

            <p class="text-subtitle project-description">
              {{currentProject.longDesc}}
            </p>

            <div v-if="currentProject.showDetails">

              <h5>
                Project Details
              </h5>

              <p class="text-left q-mb-lg">
                {{ currentProject.details.head }}
              </p>

              <div class="q-gutter-sm q-mb-lg">

                  <img
                    v-for="(image, i) in currentProject.details.images1"
                    :key="i"
                    :src="image"
                    class="shadow-4"
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
                    class="shadow-4"
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
                    class="shadow-4"
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
import {computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Portfolio',
  setup() {
    const $store = useStore()
    const drawer = ref(true)
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
    }
  }
}
</script>

<style scoped>
.project-description {
  max-width: 800px;
  margin: 0 auto;
}
</style>
