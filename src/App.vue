<template>
  <router-view v-slot="{ Component }">
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
import { defineComponent, Component } from 'vue';
import { useMeta } from 'quasar'
export default defineComponent({
  name: 'App',
  setup() {
    const metadata = useMeta({
      link: {
        rel: 'icon',
        type: 'image/ico',
        href: 'favicon.ico',
      },
    })
    return {
      metadata
    }
  }
})
</script>
