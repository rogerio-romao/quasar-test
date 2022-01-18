<template>

  <q-page class="flex column bg-light-blue-1">
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Featured Projects</h4>
    <p class="q-pl-md text-subtitle1 q-mb-lg text-blue-grey">A selection of some of my best projects. See the portfolio page for a bigger collection of works, and the about page to learn more about me and contact details.</p>
    <q-separator></q-separator>
    <div class="flex wrap justify-center q-pa-md q-gutter-md q-mt-lg card-parent">
      <q-card class="my-card non-selectable" v-for="feature in featured" :key="feature.id">
        <q-img :src="feature.image" @click="setBigImage(feature.name, feature.image)" class="cursor-pointer" >
          <q-tooltip 
            class="bg-red-13 shadow-4"  
            :delay="1000"
            transition-show="scale"
            transition-hide="scale" 
            anchor="center middle"
            self="center middle">
              Click for big image
          </q-tooltip>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-light-blue-10 text-weight-bolder cursor-pointer title-link" @click="gotoProject(feature.projectRef)">{{feature.name}}</div>
          <div class="text-subtitle2 text-info">{{feature.shortDesc}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none feature-longDesc">
          {{feature.longDesc}}
        </q-card-section>

        <q-card-actions align="center" class="absolute-bottom q-mb-sm">
          <q-btn-group>
            <q-btn type="a" target="_blank" :href="feature.source" color="light-blue-12" class="source-btn" size="sm">Source Code</q-btn>
            <q-btn type="a" target="_blank" :href="feature.live" color="light-blue-10" size="sm">View Live</q-btn>
            <q-btn type="a" :to="{path: '/portfolio', query: {project: feature.projectRef} }" color="light-blue-12" class="more-btn" size="sm">More Info</q-btn>
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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useMeta } from 'quasar'

export default {
  setup() {
    const metadata = useMeta({
      title: 'Featured Projects',
      titleTemplate: title => `${title} - Rogerio's Portfolio`,
    })
    const $store = useStore()
    const $router = useRouter()
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
    const gotoProject = (projectRef) => {
      $router.push({
        path: '/portfolio',
        query: {
          project: projectRef
        }
      })
    }

    return {
      indexComponent,
      featured,
      showBigImage,
      currentImage,
      currentProject,
      setBigImage,
      metadata,
      gotoProject
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
  .more-btn
    margin-left: 2px
  &:hover
    box-shadow: 0px 0px 7px 2px #2278cf45
    animation: 0.19s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s 1 shake
.feature-longDesc
  max-height: calc( 100% - 347px )
  overflow-y: auto
.title-link
  &:hover
    text-decoration: underline
    color: #0a6064 !important
@keyframes shake
  from
    transform: translate(0px, 0px)
  25%
    transform: translate(-1px, 1px)
  75%
    transform: translate(1px, -1px)
  to
    transform: translate(0px, 0px)
</style>
