<script setup lang="ts">
import { Ref, ref } from "vue";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Art from "./components/Art.vue";
import Development from "./components/Development.vue";

const sectionAfterHeader: Ref<any> = ref(undefined);

const watchingForScroll = ref(false);

const scrollToNext = ref(() => {
  if (sectionAfterHeader.value?.$el instanceof HTMLElement) {
    sectionAfterHeader.value?.$el.scrollIntoView({ behavior: 'smooth' })
  }
});
</script>

<template>
  <Layout>
    <Header @next="scrollToNext"/>
    <Development ref="sectionAfterHeader" />
    <Art ref="overviewElement" />
  </Layout>
</template>

<style lang="stylus" scoped>
#head-section, #dev-section, #art-section {
  @apply min-h-screen;
}
</style>
