<template>
 
  <q-page class="flex column bg-light-blue-1">
     <h5 class="q-pl-md text-h5 text-weight-light text-uppercase text-blue-grey ">Featured Projects</h5>

    <div class="flex q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt maxime pariatur. Excepturi necessitatibus dolor dolorum, dicta libero blanditiis? Nostrum minima unde asperiores dignissimos ducimus architecto quas tempore sunt quos?
        </q-card-section>

        <q-card-actions>
          <q-btn flat>Source Code</q-btn>
          <q-btn flat>View Live</q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt maxime pariatur. Excepturi necessitatibus dolor dolorum, dicta libero blanditiis? Nostrum minima unde asperiores dignissimos ducimus architecto quas tempore sunt quos?
        </q-card-section>

        <q-card-actions>
          <q-btn flat>Source Code</q-btn>
          <q-btn flat>View Live</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
