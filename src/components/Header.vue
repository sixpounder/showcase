<template>
  <header
    id="head-section"
    class="flex flex-col justify-center items-center relative mx-8 md:container md:mx-auto"
  >
    <Ufo
      :appear-delay="0"
      :appear-duration="500"
    >
      <Avatar class="justify-center align-middle" />
    </Ufo>
    <Typewriter
      class="font-mono text-2xl font-bold text-center"
      text="Hello, I am Andrea"
      :delay="0"
      :duration="1000"
      :cursor-on-halt="false"
    />
    <Typewriter
      class="font-mono text-lg text-center"
      text="Software Architect & Developer - UI/UX Designer"
      :delay="1000"
      :duration="2000"
    />
    <!-- <Ufo
      :appear-delay="3200"
      :appear-duration="1000"
      class="btn-bottom-outer flex flex-col justify-center align-middle"
    >
      <button class="" @click="next">&#8595;</button>
    </Ufo> -->
    <div class="btn-bottom-outer flex flex-col justify-center align-middle">
      <button class="" @click="next">&#8595;</button>
    </div>
    <!-- <Ufo
      :position="['15%', '15%']"
      :appear-delay="1000"
      :appear-duration="1000"
      class="text-yellow-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-2x feather feather-terminal"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    </Ufo>

    <Ufo
      :position="['85%', '75%']"
      :appear-delay="1500"
      :appear-duration="1000"
      class="text-indigo-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-2x feather feather-pen-tool"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    </Ufo>

    <Ufo
      :position="['15%', '75%']"
      :appear-delay="2000"
      :appear-duration="1000"
      class="text-green-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-2x feather feather-coffee"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    </Ufo> -->
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
