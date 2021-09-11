<template>
  <section
    id="overview-section"
    :class="outerClassBindings"
    class="
      bg-gradient-to-r
      from-primary
      to-secondary
      min-h-screen
      overflow-hidden
      hero
      text-primary-content
      py-8
    "
  >
    <div class="md:container md:mx-auto px-8 h-full">
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
        <OverviewCard title="15+ Years of experience">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </OverviewCard>
        <OverviewCard title="Software Design & Development">
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </OverviewCard>
        <OverviewCard title="Illustrations">
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
import { computed, defineComponent, onMounted, ref } from "vue";
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
      },
      {
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
