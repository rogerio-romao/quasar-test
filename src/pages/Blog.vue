<template>
  <q-page padding>
    <!-- content -->
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey ">Blog</h4>
    <p class="q-pl-md text-subtitle1 q-mb-lg text-blue-grey">New addition to the site, decided to start blogging here and then when I learn something interesting.</p>
    <q-separator></q-separator>
    <q-list bordered class="q-mt-xl bg-dark q-px-sm">
      <q-expansion-item
        v-for="(post, index) in posts"
        group="somegroup"
        icon="description"
        :label="post.attributes.title"
        :default-opened="index === 0"
        header-class="text-primary"
        class="bg-light-blue-2 q-my-sm"
        :key="index"
      >
        <q-card dark class="my-card q-pa-lg q-mb-md">
          <q-card-section>
            <span class="text-h4">{{post.attributes.title}}</span>
            <span class="text-subtitle1 text-weight-bold float-right">{{post.attributes.date}}</span>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="post-content" v-html="post.html"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="pills">
              <q-chip v-for="tag in post.attributes.tags" :key="tag" outline color="lime" text-color="white">
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
import { useMeta } from 'quasar'

import welcome from '../blog/welcome.md'
import gsap from '../blog/gsap.md'
import googling from '../blog/googling.md'
export default {
  data() {
    return {
      posts: [welcome, gsap, googling].sort((a, b) => {
        return new Date(a.attributes.date) < new Date(b.attributes.date) ? 1 : -1
      }),
    }
  },
  setup() {
    const metadata = useMeta({
      title: 'Blog',
      titleTemplate: title => `${title} - Rogerio's Portfolio`,
    })

    return {
      metadata,
    }
  }
}
</script>

