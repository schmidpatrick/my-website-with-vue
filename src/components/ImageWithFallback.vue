<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :class="className"
    @error="handleError"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

// Props with sensible default for fallback
const props = defineProps<Props>();

const currentSrc = ref(props.src);

function handleError() {
  // If fallbackSrc exists and isn't already used, swap it in
  if (props.fallbackSrc && currentSrc.value !== props.fallbackSrc) {
    currentSrc.value = props.fallbackSrc;
  } else {
    // Otherwise show a simple gray placeholder (optional)
    currentSrc.value =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#f0f0f0'/><text x='50%' y='50%' font-size='20' text-anchor='middle' fill='#aaa' dy='.3em'>Image not found</text></svg>`
      );
  }
}
</script>
