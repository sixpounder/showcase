<template>
  <slot v-if="elapsed" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    ms: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      elapsed: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.elapsed = true;
    }, this.ms)
  }
})
</script>
