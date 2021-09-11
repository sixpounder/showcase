<script setup lang="ts">
import { Ref, ref } from "vue";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Overview from "./components/Overview.vue";

const overviewElement: Ref<any> = ref(undefined);

const watchingForScroll = ref(false);

const scrollToOverview = ref(() => {
  if (overviewElement.value?.$el instanceof HTMLElement) {
    overviewElement.value?.$el.scrollIntoView({ behavior: 'smooth' })
  }
});
</script>

<template>
  <Layout>
    <Header @next="scrollToOverview"/>
    <Overview ref="overviewElement" />
  </Layout>
</template>

<style lang="stylus" scoped>
#head-section, #overview-section {
  @apply min-h-screen;
}
</style>
