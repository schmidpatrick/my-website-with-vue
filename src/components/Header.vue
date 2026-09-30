<template>
  <header
    class="fixed top-0 z-50 w-full px-6 backdrop-blur-xl bg-background/80"
  >
    <nav class="mx-auto max-w-4xl h-12 flex items-center justify-between">
      <!-- Logo/Name - Always on the left -->
      <RouterLink to="/" class="h-full flex items-center gap-2">
        <span class="font-bold text-foreground">{{ name }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: "Your Name",
});
</script>
