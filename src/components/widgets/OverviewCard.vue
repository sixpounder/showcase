<template>
  <div class="card shadow-xl bg-neutral">
    <figure>
      <img alt="Random image" :src="image"/>
    </figure>
    <div class="justify-end card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>
        <slot />
      </p>
      <div class="card-actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false,
      default: 'https://source.unsplash.com/random/600x400'
    }
  }
});
</script>
