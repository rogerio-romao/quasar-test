<template>
  <q-page padding>
    <!-- content -->
    <h4 class="q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey">
      Blog
    </h4>
    <p class="q-pl-md text-subtitle1 q-mb-lg text-blue-grey">
      New addition to the site, decided to start blogging here and then when I
      learn something interesting.
    </p>
    <div class="pills q-pl-md text-blue-grey q-mb-md">
      Filter:
      <q-badge
        label="all"
        outline
        rounded
        color="red"
        text-color="dark"
        class="q-mr-sm q-px-md q-py-xs tags shadow-1 text-weight-bold"
        @click="tagFilter = 'all'"
      />
      <q-badge
        v-for="(tag, i) in allTags"
        :key="tag"
        :label="tag"
        outline
        rounded
        :color="pillColors[i]"
        text-color="dark"
        class="q-mr-sm q-px-sm q-py-xs tags shadow-1 text-weight-bold"
        @click="tagFilter = tag"
      />
    </div>
    <q-separator></q-separator>
    <q-list bordered class="q-mt-xl bg-dark q-px-sm">
      <q-expansion-item
        v-for="(post, index) in filteredPosts"
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
            <span class="text-h4">{{ post.attributes.title }}</span>
            <span class="text-subtitle1 text-weight-bold float-right">{{
              post.attributes.date
            }}</span>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="post-content" v-html="post.html"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="pills">
              <q-chip
                v-for="tag in post.attributes.tags"
                :key="tag"
                outline
                color="lime"
                text-color="white"
                >{{ tag }}</q-chip
              >
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";
import { computed, ref } from "vue";

import welcome from "../blog/welcome.md";
import gsap from "../blog/gsap.md";
import googling from "../blog/googling.md";
import learning from "../blog/learning.md";

export default {
  setup() {
    const metadata = useMeta({
      title: "Blog",
      titleTemplate: (title) => `${title} - Rogerio's Portfolio`,
    });

    const posts = [welcome, gsap, googling, learning].sort((a, b) => {
      return new Date(a.attributes.date) < new Date(b.attributes.date) ? 1 : -1;
    });

    const tagFilter = ref("all");

    const filteredPosts = computed(() => {
      if (tagFilter.value === "all") {
        return posts;
      }

      return posts.filter((post) => {
        return post.attributes.tags.some((tag) =>
          tag.includes(tagFilter.value)
        );
      });
    });

    const allTags = computed(() => {
      return [
        ...new Set(
          posts.reduce((acc, post) => {
            return acc.concat(post.attributes.tags);
          }, [])
        ),
      ];
    });

    const pillColors = [
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deep-orange",
      "brown",
      "grey",
      "blue-grey",
    ];

    return {
      metadata,
      posts,
      tagFilter,
      filteredPosts,
      allTags,
      pillColors,
    };
  },
};
</script>

<style scoped>
.tags {
  text-transform: capitalize;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
}
.tags:hover {
  font-weight: 900;
  box-shadow: none;
}
</style>
