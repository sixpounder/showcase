<template>
  <section id="dev-section" class="bg-base-300 pt-14 pb-14 relative z-10">
    <div class="md:container md:mx-auto">
      <h1 class="text-center text-4xl">Software Architect & Developer</h1>
      <div class="mockup-code mt-8">
        <pre data-prefix="$">
<code><Typewriter
    class="inline"
    text="cat web-development"
    :delay="0"
    :duration="1000"
    :cursor-on-halt="false"
    :placeholder="false"
  />
</code>
        </pre>
        <Delayer :ms="2100">
          <pre data-prefix=">" class="text-warning">
<code>Javascript / Typescript Specialist</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>API Design Specialist</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>Modern Front End Web Development (Vue, React, Angular...)</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>NodeJS Expert</code>
        </pre>
          <pre data-prefix=">" class="text-info">
<code>Passionate, hardworking coder with penchant for developing
      customized interfaces that factor in unique demands for accessibility,
      reachability, performance and security.
      Organized approach on meeting multiple, concurrent deadlines.
      Pulls from active knowledge of current technology landscape
      to promote best practices in web design.
</code>
        </pre>
        </Delayer>
        <Delayer :ms="3000">
          <pre data-prefix="$">
<code><Typewriter
    class="inline"
    text="cat sys-development"
    :delay="0"
    :duration="1000"
    :cursor-on-halt="false"
    :placeholder="false"
  /></code>
        </pre>
        </Delayer>
        <Delayer :ms="4500">
          <pre data-prefix=">" class="text-warning">
<code>Rust</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>Ruby</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>C/C++</code>
        </pre>
          <pre data-prefix=">" class="text-warning">
<code>Python</code>
        </pre>
          <pre data-prefix=">" class="text-info">
<code>Developed software from ground up with measured,
      customer-focused approach to eliminate waste and streamline
      implementation cycle. Worked with a wide range of technologies,
      including back end analysis and development 
</code>
        </pre>
        </Delayer>
        <Delayer :ms="5000">
          <pre data-prefix="$">
<code><Typewriter
    class="inline"
    text="cat open-source"
    :delay="0"
    :duration="1000"
    :cursor-on-halt="false"
    :placeholder="false"
  /></code>
        </pre>
        </Delayer>
        <Delayer :ms="6500">
          <pre data-prefix=">" class="text-info">
<code>Involved in numerous open source projects of different kinds,
      including system utilities like <u>Seagul</u> and free and open writing
      applications like <u>Manuscript</u> (soon to be published)
</code>
        </pre>
        </Delayer>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Typewriter from "./widgets/Typewriter.vue";
import Delayer from "./widgets/Delayer.vue";

export default defineComponent({
  components: {
    Typewriter,
    Delayer,
  },
});
</script>