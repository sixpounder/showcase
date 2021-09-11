<template>
  <div class="card shadow-xl image-full">
    <figure>
      <img :src="image"/>
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
      default: 'https://images.unsplash.com/photo-1630582520105-7ae990ebbda3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80'
    }
  }
});
</script>
