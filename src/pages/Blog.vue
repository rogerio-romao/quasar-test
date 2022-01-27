<template>
  <q-page padding>
    <!-- content -->
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-subtitle2">{{date}}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div v-html="content"></div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="pills">
          <q-chip v-for="tag in tags" :key="tag" outline color="primary" text-color="white">
            {{tag}}
          </q-chip>
        </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import test from '../blog/test.md'
export default {
  data() {
    return {
      title: test.attributes.title,
      date: test.attributes.date,
      tags: test.attributes.tags,
      content: test.html
    }
  }
}
</script>
