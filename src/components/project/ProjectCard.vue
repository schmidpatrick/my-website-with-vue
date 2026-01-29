<template>
  <div
    class="bg-card rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.0161290323] ease-[cubic-bezier(0,0,.5,1)] active:scale-[1.008] h-full"
  >
    <!-- Layout container -->
    <div class="flex gap-3 p-4 sm:flex-col sm:gap-0 sm:p-0 h-full">
      <!-- Illustration -->
      <div
        class="w-14 h-14 flex-shrink-0 rounded-lg bg-accent flex items-center justify-center sm:w-full sm:h-auto sm:rounded-none sm:aspect-[4/3]"
      >
        <span class="text-xs text-muted-foreground">Illustration</span>
      </div>

      <!-- Content -->
      <div
        class="flex-1 flex flex-col justify-center space-y-0.5 sm:p-6 sm:space-y-2"
      >
        <h3 class="line-clamp-1">
          {{ project.title }}
        </h3>
        <p
          class="text-muted-foreground line-clamp-1 sm:line-clamp-2 text-sm sm:text-base"
        >
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/data/projects";

defineProps<{
  project: Project;
}>();
</script>
