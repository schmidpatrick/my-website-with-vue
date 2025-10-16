<script setup lang="ts">
import ImageWithFallback from "@/components/ImageWithFallback.vue";

defineProps<{
  src: string;
  alt: string;
  caption?: string;
}>();
</script>

<template>
  <figure class="space-y-4">
    <div class="overflow-hidden rounded-lg bg-accent">
      <ImageWithFallback :src="src" :alt="alt" class="w-full h-auto" />
    </div>
    <figcaption v-if="caption" class="text-muted-foreground text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>
