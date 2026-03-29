<template>
  <div class="min-h-screen bg-base font-manrope">
    <HeaderBar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderBar from 'src/components/HeaderBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { HeaderBar },
})
</script>
