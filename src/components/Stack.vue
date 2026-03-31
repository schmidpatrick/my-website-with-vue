<!-- Stack.vue -->
<template>
  <component :is="as" :class="stackClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Gap = "xs" | "sm" | "md" | "lg";
type ElementTag = keyof HTMLElementTagNameMap;

const props = withDefaults(
  defineProps<{
    as?: ElementTag;
    gap?: Gap;
  }>(),
  {
    as: "div" as ElementTag,
    gap: "md" as Gap,
  },
);

const stackClass = computed(() => {
  const gap = props.gap;

  return [
    "flex flex-col",
    {
      "gap-3 md:gap-4": gap === "xs",
      "gap-4 md:gap-6": gap === "sm",
      "gap-6 md:gap-8": gap === "md",
      "gap-10 md:gap-12": gap === "lg",
    },
  ];
});
</script>
