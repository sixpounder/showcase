<template>
  <section id="overview-section" :class="outerClassBindings">Overview</section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';

interface ComponentData {
  viewportObserver?: IntersectionObserver,
  onViewport: boolean
}

export default defineComponent({
  setup () {
    const onViewport = ref(false);
    const outerClassBindings = computed(() => {
      return {
        visible: onViewport.value
      }
    });

    return {
      onViewport,
      outerClassBindings
    };
  },
  data () {
    return {
      viewportObserver: undefined,
      onViewport: false
    } as ComponentData
  },
  mounted () {
    // this.viewportObserver = useElementViewportObserver(this.$el, this.onViewportStatusChange);
    this.viewportObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.onFirstVisible();
      }
    }, {
      threshold: 0.1
    });

    this.viewportObserver.observe(this.$el);
  },
  methods: {
    onFirstVisible () {
      this.onViewport = true;
      this.viewportObserver?.disconnect();
    }
  }
})
</script>
