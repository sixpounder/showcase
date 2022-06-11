<template>
  <section
    id="art-section"
    :class="outerClassBindings"
  >
    <img alt="separator" id="wave-separator" src="../assets/wave.svg" class="w-full absolute left-2 -top-1 hidden md:block"/>
    <div class="md:container md:mx-auto p-8 h-full">
      <h1 id="uiux-title">UI/UX Designer</h1>
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        <OverviewCard class="md:col-span-2" title="Web application design">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </OverviewCard>
        <OverviewCard title="Custom component kits">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </OverviewCard>
        <OverviewCard title="Icon sets">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </OverviewCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Glass from "./widgets/Glass.vue";
import OverviewCard from "./widgets/OverviewCard.vue";

interface ComponentData {
  viewportObserver?: IntersectionObserver;
  onViewport: boolean;
}

export default defineComponent({
  components: {
    Glass,
    OverviewCard,
  },
  setup() {
    const onViewport = ref(false);
    const outerClassBindings = computed(() => {
      return {
        visible: onViewport.value,
      };
    });

    return {
      onViewport,
      outerClassBindings,
    };
  },
  data() {
    return {
      viewportObserver: undefined,
      onViewport: false,
    } as ComponentData;
  },
  mounted() {
    // this.viewportObserver = useElementViewportObserver(this.$el, this.onViewportStatusChange);
    this.viewportObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.onFirstVisible();
        }
      }, {
        threshold: 0.1,
      }
    );

    this.viewportObserver.observe(this.$el);
  },
  methods: {
    onFirstVisible() {
      this.onViewport = true;
      this.viewportObserver?.disconnect();
    },
  },
});
</script>

<style scoped>
#art-section {
  @apply relative bg-gradient-to-r from-primary to-secondary overflow-hidden text-primary-content md:pt-40 pb-14;
}
#wave-separator {
  filter: drop-shadow(10px 10px 10px #00000060);
}

#uiux-title {
  @apply text-4xl text-center mb-8;
  text-shadow: 0px 0px 40px #006fd0;
}

img {
  image-rendering: crisp-edges;
}
</style>
