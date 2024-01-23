<template>
  <section id="apps-section" aria-labelledby="apps-section-title">
    <h2 id="apps-section-title" class="font-mono">Apps & Libraries</h2>
    <small class="mt-4 text-gray-400">(some of them)</small>
    <div role="presentation" class="apps">
      <a
        class="app"
        href="https://flathub.org/apps/details/com.github.sixpounder.GameOfLife"
        target="noopener"
        title="Game of Life"
      >
        <img src="../assets/com.github.sixpounder.GameOfLife.svg" />
      </a>
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
        href="https://github.com/sixpounder/jql"
        target="noopener"
        title="Jql"
      >
        <img src="../assets/com.github.sixpounder.jql.svg" />
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
      <h3 class="text-2xl mb-2">...plus many things I cannot show here, like:</h3>
      <ul id="other-apps-list">
        <li>
          The web components library that lies at the foundation of my ex company's web stack.
        </li>
        <li>
          A framework for microfrontend implementations developed when microfrontends weren't a thing
        </li>
      </ul>
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

.apps {
  @apply my-20 grid grid-flow-row grid-cols-2 justify-items-center align-middle gap-6 md:grid-cols-3 lg:grid-cols-5;
}

.apps .app {
  @apply block w-full;
}

.apps .app img {
  @apply w-full;
}
</style>
