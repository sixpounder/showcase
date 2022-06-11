<template>
  <section id="apps-section" aria-labelledby="apps-section-title">
    <h2 id="apps-section-title" class="font-mono">Apps & Libraries</h2>
    <small class="mt-4 text-gray-400">(some of them)</small>
    <div role="presentation" class="apps flex flex-row flex-wrap my-20">
      <a
        class="app"
        href="https://github.com/sixpounder/manuscript"
        target="noopener"
        title="Manuscript"
      >
        <img src="../assets/com.github.sixpounder.manuscript.svg" />
      </a>
      <a
        class="app"
        href="https://github.com/sixpounder/rustnum"
        target="noopener"
        title="Rustnum"
      >
        <img src="../assets/com.github.sixpounder.rustnum.svg" />
      </a>
      <a
        class="app"
        href="https://crates.io/crates/seagul"
        target="noopener"
        title="Seagul"
      >
        <img src="../assets/com.github.sixpounder.seagul.svg" />
      </a>
    </div>

    <div role="presentation" class="my-20 text-center font-mono">
      ...plus many things I cannot show here, like the web components library that lies at the foundation of my company's software.
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#apps-section {
  @apply bg-base-300 px-8 py-20;
}

#apps-section-title {
  @apply text-4xl text-center;
}

small {
  @apply text-center text-sm italic block;
}

.apps .app {
  @apply w-full md:w-1/3;
}

.apps .app img {
  @apply w-full;
}
</style>
