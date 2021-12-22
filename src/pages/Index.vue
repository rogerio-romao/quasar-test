<template>

  <q-page class="flex column bg-light-blue-1">
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Featured Projects</h4>
    
    <div class="flex wrap justify-center q-pa-md q-gutter-md">
      <q-card class="my-card" v-for="feature in featured" :key="feature.id">
        <q-img :src="feature.image" @click="setBigImage(feature.name, feature.image)" class="cursor-pointer" >
          <q-tooltip 
            class="bg-light-blue-10 shadow-4"  
            transition-show="scale"
            transition-hide="rotate" 
            anchor="center middle"
            self="center middle">
              Click for big image
          </q-tooltip>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-light-blue-10 text-weight-bolder">{{feature.name}}</div>
          <div class="text-subtitle2 text-info">{{feature.shortDesc}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{feature.longDesc}}
        </q-card-section>

        <q-card-actions align="center" class="absolute-bottom q-mb-sm">
          <q-btn-group>
            <q-btn type="a" target="_blank" :href="feature.source" color="light-blue-12" class="source-btn" size="sm">Source Code</q-btn>
            <q-btn type="a" target="_blank" :href="feature.live" color="light-blue-10" size="sm">View Live</q-btn>
          </q-btn-group>
        </q-card-actions>
        
      </q-card>
    </div>
      <q-dialog v-model="showBigImage">
          <q-card style="width: 800px; max-width: 80vw;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6 text-uppercase text-light-blue-10">{{currentProject}}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-img :src="currentImage"></q-img>
          </q-card>
        </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const $store = useStore()
    const showBigImage = ref(false)
    const currentImage = ref('')
    const currentProject = ref('')
    const setBigImage = (name, img) => {
      showBigImage.value = true
      currentProject.value = name 
      currentImage.value = img
    }
    const featured = computed({
      get: () => $store.state.featured.featured,
    })
    const indexComponent = defineComponent({
      name: 'PageIndex'
    })

    return {
      indexComponent,
      featured,
      showBigImage,
      currentImage,
      currentProject,
      setBigImage
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  flex: 1
  min-height: 550px
  min-width: 250px
  width: 100%
  max-width: 420px
  .source-btn
    margin-right: 2px
</style>
