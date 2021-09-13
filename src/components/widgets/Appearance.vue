<template>
  <div ref="slot">
    <slot v-if="visible"/>
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
      state.value = value;
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
