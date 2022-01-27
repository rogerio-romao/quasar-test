<template>
  <q-page padding>
    <!-- content -->
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Blog</h4>
    <p class="q-pl-md text-subtitle1 q-mb-lg text-blue-grey">New addition to the site, decided to start blogging here and then when I learn something interesting.</p>
    <q-separator></q-separator>
    <q-list bordered class="q-mt-xl">
      <q-expansion-item
        group="somegroup"
        icon="explore"
        :label="title"
        default-opened
        header-class="text-primary"
      >
        <q-card dark class="my-card q-pa-lg q-mb-md">
          <q-card-section>
            <span class="text-h6">{{title}}</span>
            <span class="text-subtitle2 float-right">{{date}}</span>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div v-html="content"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="pills">
              <q-chip v-for="tag in tags" :key="tag" outline color="lime" text-color="white">
                {{tag}}
              </q-chip>
            </div>
          </q-card-section>

        </q-card>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="explore"
        :label="title2"
        header-class="text-primary"
      >
        <q-card dark class="my-card q-pa-lg">
          <q-card-section>
            <span class="text-h6">{{title2}}</span>
            <span class="text-subtitle2 float-right">{{date2}}</span>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div v-html="content2"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="pills">
              <q-chip v-for="tag in tags" :key="tag" outline color="lime" text-color="white">
                {{tag}}
              </q-chip>
            </div>
          </q-card-section>

        </q-card>
      </q-expansion-item>
    </q-list>
    
  </q-page>
</template>

<script>
import test from '../blog/test.md'
import welcome from '../blog/welcome.md'
export default {
  data() {
    return {
      title: test.attributes.title,
      date: test.attributes.date,
      tags: test.attributes.tags,
      content: test.html,
      title2: welcome.attributes.title,
      date2: welcome.attributes.date,
      tags2: welcome.attributes.tags,
      content2: welcome.html
    }
  }
}
</script>
