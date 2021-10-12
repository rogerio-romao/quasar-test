<template>

  <q-page class="flex column bg-light-blue-1">
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Featured Projects</h4>

    <div class="flex wrap justify-center q-pa-md q-gutter-md">
      <q-card class="my-card" v-for="feature in featured" :key="feature.id">
        <q-img :src="feature.image"></q-img>

        <q-card-section>
          <div class="text-h6 text-light-blue-10 text-weight-bolder">{{feature.name}}</div>
          <div class="text-subtitle2">{{feature.shortDesc}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{feature.longDesc}}
        </q-card-section>

        <q-card-actions align="center" class="absolute-bottom">
          <q-btn-group push>
            <q-btn color="light-blue-12" class="source-btn" size="sm" push >Source Code</q-btn>
            <q-btn color="light-blue-10" size="sm" push>View Live</q-btn>
          </q-btn-group>
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
  flex: 1
  min-height: 550px
  min-width: 270px
  width: 100%
  max-width: 350px
  .source-btn
    margin-right: 2px
</style>
