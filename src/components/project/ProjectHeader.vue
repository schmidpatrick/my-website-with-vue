<template>
  <div class="mb-16 sm:mb-24">
    <div class="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-muted-foreground">
      <span>{{ year }}</span>
      <span>•</span>
      <span>{{ role }}</span>
    </div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCurrentProject } from "@/composables/useCurrentProject";

const project = useCurrentProject();
const { title, description, year, role } = project.value;
</script>
