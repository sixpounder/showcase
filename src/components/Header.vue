<template>
  <header
    id="head-section"
    class="flex flex-col justify-center items-center relative mx-4 md:container md:mx-auto"
  >
    <Ufo
      :appear-delay="0"
      :appear-duration="500"
    >
      <Avatar class="justify-center align-middle" />
    </Ufo>
    <Typewriter
      class="font-mono text-3xl md:text-5xl font-bold text-center"
      text="Hello, I am Andrea"
      :delay="0"
      :duration="1000"
      :cursor-on-halt="false"
    />
    <Typewriter
      class="font-mono text-xl md:text-2xl text-center"
      text="Software Architect & Developer - UI/UX Designer"
      :delay="1000"
      :duration="2000"
    />
    <div class="btn-bottom-outer flex flex-col justify-center align-middle">
      <button class="" @click="next">&#8595;</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Avatar from "./widgets/Avatar.vue";
import Typewriter from "./widgets/Typewriter.vue";
import Ufo from "./widgets/Ufo.vue";

export default defineComponent({
  name: "Header",
  emits: ["next"],
  components: {
    Typewriter,
    Ufo,
    Avatar,
  },
  setup () {
    const scrollHandler = ref(() => {
      console.log('Scrolled');
    });
    return {
      scrollHandler
    }
  },
  methods: {
    next () {
      this.$emit("next");
    }
  }
});
</script>

<style lang="stylus" scoped>
.btn-bottom-outer {
  @apply absolute rounded-full bg-base-300 h-48 w-48 -bottom-32;
  box-shadow 0 -10px 13px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow 0 -10px 13px rgba(0, 0, 0, 0.1);
	-moz-box-shadow 0 -10px 13px rgba(0, 0, 0, 0.1);
  button {
    transform-origin: center;
    @apply text-gray-400 h-48 w-48 text-4xl text-center transition-all;
    margin-top: -8rem;
  }

  &:hover button {
    @apply text-gray-200 text-5xl
  }
}
</style>
