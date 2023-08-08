<template>
  <div ref="contentToReveal">
    <transition name="fade-in-zoom">
      <div v-if="visible">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { isUndefined } from "lodash-es";
import { computed, onMounted, Ref, ref } from "vue"
import { IntersectionStatus, observeVisibility } from "../../lib/scrolling";

const props = defineProps({
  once: {
    type: Boolean,
    required: false,
    default: true
  },
  delay: {
    type: Number,
    required: false,
    default: 0
  }
})

const state: Ref<IntersectionStatus> = ref(IntersectionStatus.Invisible);
const contentToReveal: Ref<HTMLElement | undefined> = ref(undefined);
const viewportObserver: Ref<IntersectionObserver | undefined> = ref(undefined);
const viewportObserverCb = ref((value: IntersectionStatus) => {
  if (value === IntersectionStatus.Visible && props.once) {
    viewportObserver.value?.disconnect();
  }
  setTimeout(() => {
    state.value = value;
  }, props.delay);
});

const visible = computed(() => {
  return state.value === IntersectionStatus.Visible
});

const mounted = onMounted(() => {
  if (!isUndefined(contentToReveal.value)) {
    viewportObserver.value = observeVisibility(contentToReveal.value, viewportObserverCb.value);
  }
});
</script>

<style lang="stylus" scoped>
.fade-in-zoom-enter-active, .fade-in-zoom-leave-active {
  animation fade-in-zoom .5s
}
.fade-in-zoom-enter, .fade-in-zoom-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation fade-in-zoom .3s reverse
}

@keyframes fade-in-zoom
  0%
    transform scale(1.5)
    opacity 0
  100%
    transform scale(1)
    opacity 1
</style>
