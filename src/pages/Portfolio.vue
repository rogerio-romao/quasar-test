<template>
  <q-page class="flex column bg-light-blue-1">
    <q-layout view="hHh Lpr lff">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-light-blue-2 q-pt-xl"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="project in projects" :key="project.id">
              <q-item clickable v-ripple @click="selectedProject = project.id">
                <q-item-section>
                  {{ project.name }}
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page padding>
          <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Portfolio</h4>
          <q-layout view="hHh lpR fFf">
          <p>
            {{currentProject.longDesc}}
          </p>
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
