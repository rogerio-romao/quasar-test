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
          <q-tabs inline-label dense shrink class="text-light-blue-11" active-color="light-blue-13">
            <q-route-tab
              icon="home"
              to="/"
              label="Home"
              exact
            />
            <q-route-tab
              icon="folder"
              to="/portfolio"
              label="Portfolio"
              exact
            />
            <q-route-tab
              icon="info"
              to="/about"
              label="About"
              exact
            />
          </q-tabs>
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
