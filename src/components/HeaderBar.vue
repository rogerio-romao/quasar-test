<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>
        Rogerio's Portfolio
        <q-badge color="primary" align="top">v2.0</q-badge>
      </q-toolbar-title>

      <q-badge color="primary">&copy; 2022</q-badge>

      <q-avatar size="lg">
        <img
          src="../statics/images/rogerio_avatar.jpeg"
          alt="avatar"
          class="avatar"
        />
      </q-avatar>
    </q-toolbar>
    <q-banner class="bg-dark text-white" inline-actions>
      Welcome to my online portfolio / CV / blog.
      <template v-slot:action>
        <q-tabs
          inline-label
          dense
          shrink
          class="text-cyan-13"
          active-color="light-green"
        >
          <q-route-tab
            icon="home"
            to="/"
            :label="$q.screen.gt.sm ? 'Featured' : ''"
            exact
          />
          <q-route-tab
            icon="folder"
            to="/portfolio"
            :label="$q.screen.gt.sm ? 'Portfolio' : ''"
            exact
          />
          <q-route-tab
            icon="info"
            to="/about"
            :label="$q.screen.gt.sm ? 'About' : ''"
            exact
          />
          <q-route-tab
            icon="work"
            to="/cv"
            :label="$q.screen.gt.sm ? 'CV' : ''"
            exact
          />
          <!-- <q-route-tab
            icon="article"
            to="/blog"
            :label="$q.screen.gt.sm ? 'Blog' : ''"
            exact
          /> -->
        </q-tabs>
      </template>
    </q-banner>
  </q-header>
</template>

<script>
export default {
  name: "HeaderBar",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.avatar:hover {
  animation: rotate 500ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
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
