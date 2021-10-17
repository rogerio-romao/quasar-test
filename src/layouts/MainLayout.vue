<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Rogerio's Portfolio
          <q-badge color="primary" align="top">v2.0</q-badge>
        </q-toolbar-title>
        
        <q-badge color="primary">&copy; 2021</q-badge>

        <q-avatar size="lg">
          <img src="../statics/images/rogerio_avatar.jpeg" alt="avatar">
        </q-avatar>


      </q-toolbar>
      <q-banner class="bg-dark text-white" :inline-actions="$q.screen.gt.sm">
        Welcome to my online portfolio / CV. Check out some featured projects here or click the links to see full portfolio, and about / contact pages.
        <template v-slot:action>
          <q-btn-group rounded>
            <q-btn rounded label="Portfolio" icon="folder" text-color="light-blue-11" to="/portfolio" />
            <q-btn rounded label="About" icon="info" text-color="light-blue-11" to="/about" />
          </q-btn-group>
        </template>
      </q-banner>
    </q-header>


    <q-page-container>
      
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {
    }
  }
})
</script>
