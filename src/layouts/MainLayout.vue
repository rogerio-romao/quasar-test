<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderBar />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, Component } from 'vue'
import HeaderBar from 'src/components/HeaderBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { HeaderBar },
})
</script>

<style scoped>
</style>
