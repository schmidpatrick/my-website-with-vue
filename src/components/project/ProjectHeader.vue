<template>
  <Stack>
    <!-- Metadata grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
      <div>
        <span class="text-muted-foreground">Focus</span>
        <p class="font-medium">{{ focus }}</p>
      </div>
      <div>
        <span class="text-muted-foreground">Scope</span>
        <p class="font-medium">{{ scope }}</p>
      </div>
      <div>
        <span class="text-muted-foreground">Role</span>
        <p class="font-medium">{{ role }}</p>
      </div>
      <div>
        <span class="text-muted-foreground">Tools</span>
        <p class="font-medium">{{ tools }}</p>
      </div>
      <div>
        <span class="text-muted-foreground">Year</span>
        <p class="font-medium">{{ year }}</p>
      </div>
      <div>
        <span class="text-muted-foreground">Read time</span>
        <p class="font-medium">{{ read }} min</p>
      </div>
    </div>

    <!-- Title -->
    <h1>{{ title }}</h1>
  </Stack>
</template>

<script setup lang="ts">
import { useCurrentProject } from "@/composables/useCurrentProject";
import Stack from "@/components/Stack.vue";

const project = useCurrentProject();
const { title, year, role, focus, scope, tools, read } = project.value;
</script>
