<template>
  <div class="mb-16 sm:mb-24">
    <div
      class="flex flex-col gap-1 mb-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2"
    >
      <span>{{ year }}</span>
      <span class="hidden sm:inline">•</span>
      <span>{{ role }}</span>
      <span class="hidden sm:inline">•</span>
      <span>{{ timeToRead }} min read</span>
    </div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCurrentProject } from "@/composables/useCurrentProject";

const project = useCurrentProject();
const { title, description, year, role, timeToRead } = project.value;
</script>
