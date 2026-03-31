<template>
  <span
    class="text-foreground font-medium"
    :class="{ 'tracking-tight': props.tight }"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tight?: boolean;
  }>(),
  {
    tight: false,
  },
);
</script>
