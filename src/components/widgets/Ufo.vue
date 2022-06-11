<template>
  <div :style="outerStyleBinding" :class="outerClassBindings">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from "vue"

const props = defineProps({
  appear: {
    type: Boolean,
    required: false,
    default: true
  },
  appearDuration: {
    type: Number,
    required: false,
    default: 1000
  },
  appearDelay: {
    type: Number,
    required: false,
    default: 0
  }
})

const ready = ref(false)

onMounted(() => {
  setTimeout(() => {
    ready.value = true;
  }, props.appearDelay);
})

const outerStyleBinding = computed(() => {
  return {
    opacity: ready.value ? 'unset' : '0'
  }
})

const outerClassBindings = computed(() => {
  return {
    'fade-in-zoom': props.appear && ready.value
  }
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ufo'
})
</script>

<style lang="stylus" scoped>
@import '../../styles/animations.styl'
</style>
