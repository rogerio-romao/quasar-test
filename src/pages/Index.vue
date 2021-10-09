<template>

  <q-page class="flex column bg-light-blue-1">
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Featured Projects</h4>

    <div class="flex q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="feature in featured" :key="feature.id">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">{{feature.name}}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt maxime pariatur. Excepturi necessitatibus dolor dolorum, dicta libero blanditiis? Nostrum minima unde asperiores dignissimos ducimus architecto quas tempore sunt quos?
        </q-card-section>

        <q-card-actions>
          <q-btn outline color="info">Source Code</q-btn>
          <q-btn outline color="info">View Live</q-btn>
        </q-card-actions>
      </q-card>
      
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const $store = useStore()
    const featured = computed({
      get: () => $store.state.featured.featured,
    })
    const indexComponent = defineComponent({
      name: 'PageIndex'
    })

    return {
      indexComponent,
      featured
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
