<template>
  <div class="typewriter">
    <span class="placeholder">|</span>
    <span class="text" ref="element"></span>
    <span v-show="started && (running || cursorOnHalt)" class="cursor"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isUndefined } from 'lodash-es'

interface TypewriterData {
  timer: number | undefined,
  textIndex: number
}

export default defineComponent({
  props: {
    text: {
      type: String,
      required: false,
      default: ""
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    duration: {
      type: Number,
      required: false,
      default: undefined
    },
    cursorOnHalt: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ['start', 'end'],
  computed: {
    step (): number {
      return isUndefined(this.duration) ? 100 : this.duration / this.text.length;
    },
    started (): boolean {
      return this.textIndex !== 0;
    },
    running (): boolean {
      return this.started && this.textIndex < this.text.length
    }
  },
  data () {
    return {
      timer: undefined,
      textIndex: 0,
    } as TypewriterData
  },
  mounted () {
    setTimeout(() => {
      this.$emit('start');
      this.timer = setInterval(() => {
        if (this.textIndex < this.text.length) {
          const el: HTMLSpanElement = this.$refs.element as HTMLSpanElement
          el.textContent += this.text.charAt(this.textIndex)
          this.textIndex ++;
        } else {
          this.$emit('end');
        }
      }, this.step);
    }, this.delay);
  },
})
</script>

<style lang="stylus" scoped>
.text
  @apply tracking-widest
.cursor
  @apply inline-block h-1 w-4 ml-1 bg-current
  animation cursor-pulse 1s infinite
  animation-timing-function ease-linear

.placeholder
  @apply opacity-0

@keyframes cursor-pulse
  0%
      opacity: 0
  50%
      opacity: 1
  100%
      opacity: 0
</style>
