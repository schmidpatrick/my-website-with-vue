<template>
  <footer class="w-full border-t border-border/10 bg-background">
    <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col items-start gap-4 text-xs">
        <div class="text-muted-foreground">
          © {{ currentYear }} Patrick Schmid. All rights reserved.
        </div>
        <div class="flex flex-row flex-wrap items-start gap-4 sm:gap-8">
          <RouterLink
            to="/legal-notice"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Legal Notice
          </RouterLink>
          <RouterLink
            to="/privacy"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();
</script>
