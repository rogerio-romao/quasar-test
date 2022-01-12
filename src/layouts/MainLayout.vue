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
          <img src="../statics/images/rogerio_avatar.jpeg" alt="avatar" class="avatar">
        </q-avatar>

      </q-toolbar>
      <q-banner class="bg-dark text-white" :inline-actions="$q.screen.gt.sm">
        Welcome to my online portfolio / CV. Check out some featured projects here or click the links to see full portfolio, and about / contact pages.
        <template v-slot:action>
          <q-tabs inline-label dense shrink class="text-light-blue-11" active-color="light-blue-13" >
            <q-route-tab
              icon="home"
              to="/"
              :label="$q.screen.gt.xs ? 'Home' : ''"
              exact
            />
            <q-route-tab
              icon="folder"
              to="/portfolio"
              :label="$q.screen.gt.xs ? 'Portfolio' : ''"
              exact
            />
            <q-route-tab
              icon="info"
              to="/about"
              :label="$q.screen.gt.xs ? 'About' : ''"
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>

<style scoped>
.avatar:hover {
  animation: rotate 500ms cubic-bezier( 0.6, -0.28, 0.735, 0.045 );
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
