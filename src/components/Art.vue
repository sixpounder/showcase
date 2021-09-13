<template>
  <section
    id="art-section"
    :class="outerClassBindings"
    class="
      relative
      bg-gradient-to-r
      from-primary
      to-secondary
      min-h-screen
      overflow-hidden
      text-primary-content
      md:pt-40
    "
  >
    <img src="../assets/wave.svg" class="w-full absolute left-2 -top-1 hidden md:block"/>
    <div class="md:container md:mx-auto p-8 h-full">
      <h1 id="uiux-title">UI/UX Designer</h1>
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
        <OverviewCard title="15+ Years of experience">
          Senior software developer offering 15+ years of experience in
          demanding environments focused on producing cutting-edge systems for
          web platforms. Skilled in directing development with creative and
          performance-oriented approach. Well-organized and customer-focused
          with proven skills in software architecture design.
        </OverviewCard>
        <OverviewCard title="Software Design & Development">
          Developing software from ground up with measured, customer-focused
          approach to eliminate waste and streamline implementation cycle,
          working with a wide range of technologies, including back end analysis
          and development.
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

<style lang="stylus" scoped>
#uiux-title
  @apply text-4xl text-center mb-8
  text-shadow 0px 0px 20px #570df8

img
  image-rendering crisp-edges
</style>
