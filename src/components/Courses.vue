<template>
  <div>
    <q-list bordered separator class="rounded-borders">
      <q-expansion-item v-for="(school, index) in schools" :key="index" :label="school.title" caption="click to open" header-class="bg-primary text-white">
            <q-item
              dense
              v-for="(course, index) in school.courses"
              :key="index"
            >
              <a :href="course.link" target="_blank">
                {{ course.title }} by {{ course.author }}
              </a>
            </q-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "Courses",
  setup() {
    const $store = useStore();
    const schools = computed({
      get: () => $store.state.courses.schools,
    })
    return {
      schools,
    };
  },
};
</script>

<style>

</style>
