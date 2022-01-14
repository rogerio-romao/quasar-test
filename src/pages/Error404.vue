<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing to see here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

export default defineComponent({
  name: 'Error404',
  setup() {
    const metadata = useMeta({
      title: '404 - Not Found',
      titleTemplate: title => `${title} - Rogerio's Portfolio`,
    })

    return {
      metadata,
    }
  }
})
</script>
