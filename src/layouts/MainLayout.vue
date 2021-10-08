<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Rogerio's Portfolio
          <q-badge color="primary" align="top">v2.0</q-badge>
        </q-toolbar-title>
        

        <q-avatar size="lg">
          <img src="../statics/images/rogerio_avatar.jpeg" alt="avatar">
        </q-avatar>


      </q-toolbar>
      <q-banner class="bg-dark text-white" :inline-actions="$q.screen.gt.sm">
        Welcome to my online portfolio / CV. Check out some featured projects here or click the links to see full portfolio, and about / contact pages.
        <template v-slot:action>
          <q-btn-group rounded c>
            <q-btn rounded label="Portfolio" icon="folder" text-color="light-blue-11" to="/portfolio" />
            <q-btn rounded label="About" icon="info" text-color="light-blue-11" to="/about" />
          </q-btn-group>
        </template>
      </q-banner>
    </q-header>


    <q-page-container>
      
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

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
