<script setup lang="ts">
import mask from './assets/mask.txt?raw'
import { Ref, ref } from "vue";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Development from "./components/Development.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Apps from "./components/Apps.vue";
// import Art from "./components/Art.vue";

const sectionAfterHeader: Ref<any> = ref(undefined);

const scrollToNext = ref(() => {
  if (sectionAfterHeader.value?.$el instanceof HTMLElement) {
    sectionAfterHeader.value?.$el.scrollIntoView({ behavior: 'smooth' })
  }
});

console.log(mask)
</script>

<template>
  <Layout>
    <Header @next="scrollToNext"/>
    <Development ref="sectionAfterHeader" />
    <!-- <Art ref="overviewElement" /> -->
    <Apps ref="appsElement" />
    <Contact />
    <Footer />
  </Layout>
</template>

<style scoped>
#head-section, #dev-section, #art-section {
  @apply min-h-screen;
}
</style>
