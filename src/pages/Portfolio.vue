<template>
  <q-page class="flex column bg-light-blue-1">

    <q-layout view="hHh Lpr lff">
      
      <q-page-container>

        <q-drawer
          v-model="drawer"
          show-if-above
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

          <q-layout view="hHh lpR fFf" class="q-mt-lg">

            <h4 class="text-h4">
              {{currentProject.name}}
            </h4>

            <p class="text-subtitle2">
              Type: {{currentProject.type}}
            </p>

            <div>
              <q-badge  color="primary" v-for="tech in currentProject.technologies" :key="tech" :label="tech" class="q-mr-sm" />
            </div>

            <p class="text-subtitle2">
              {{currentProject.shortDesc}}
            </p>

            <q-img :src="currentProject.image" width="800px"></q-img>

            <p class="text-subtitle1">
              {{currentProject.longDesc}}
            </p>

            <div v-if="currentProject.showDetails">

              <h3>
                Project Details
              </h3>

              <p>
                {{ currentProject.details.head }}
              </p>

              <div>

                <img
                  v-for="(image, i) in currentProject.details.images1"
                  :key="i"
                  :src="image"
                  alt="details from this project"
                />

              </div>

              <div v-if="currentProject.details.body">

                <p>{{ currentProject.details.body }}</p>

                <div>

                  <img
                    v-for="(image, i) in currentProject.details.images2"
                    :key="i"
                    :src="image"
                    alt="details from this project"
                  />

                </div>

              </div>

              <div v-if="currentProject.details.footer">

                <p>{{ currentProject.details.footer }}</p>

                <div>

                  <img
                    v-for="(image, i) in currentProject.details.images3"
                    :key="i"
                    :src="image"
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

    return {
      projects,
      drawer,
      selectedProject,
      currentProject
    }
  }
}
</script>
