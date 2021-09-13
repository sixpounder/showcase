<template>
  <div ref="slot">
    <transition name="fade-in-zoom" ref="slot">
      <div v-if="visible">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { isUndefined } from "lodash-es";
import { computed, defineComponent, onMounted, Ref, ref } from "vue"
import { IntersectionStatus, observeVisibility } from "../../lib/scrolling";

export default defineComponent({
  props: {
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
  },
  setup(props) {
    const state: Ref<IntersectionStatus> = ref(IntersectionStatus.Invisible);
    const slot: Ref<HTMLElement | undefined> = ref(undefined);
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
      if (!isUndefined(slot.value)) {
        viewportObserver.value = observeVisibility(slot.value, viewportObserverCb.value);
      }
    });

    return {
      mounted,
      state,
      slot,
      visible,
      viewportObserver,
      viewportObserverCb
    }
  },
})
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
