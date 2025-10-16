<template>
  <ul class="space-y-4">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex gap-4 text-muted-foreground"
    >
      <span
        class="mt-[0.6em] w-1 h-1 rounded-full bg-foreground flex-shrink-0"
      />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ items: string[] }>();
</script>
