<template>
  <div class="mb-16 sm:mb-24">
    <div class="flex flex-wrap gap-4 mb-6 text-muted-foreground">
      <span>{{ year }}</span>
      <!-- <span>•</span>
      <span>{{ project.role }}</span> -->
    </div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCurrentProject } from "@/composables/useCurrentProject";

const { title, description, year } = useCurrentProject().value;
</script>
