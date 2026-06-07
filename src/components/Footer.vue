<template>
  <footer class="w-full px-4 sm:px-6 pt-24">
    <div
      class="max-w-5xl mx-auto py-6 flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-foreground/20"
    >
      <!-- Left side -->
      <div class="flex flex-col gap-2 items-center sm:items-start">
        <div class="text-xs text-muted-foreground">
          © {{ currentYear }} Patrick Schmid. All rights reserved.
        </div>
        <div class="flex flex-row flex-wrap items-start gap-4 sm:gap-8">
          <RouterLink
            to="/privacy-policy"
            class="text-xs text-foreground/80 hover:underline"
          >
            Privacy Policy
          </RouterLink>
        </div>
      </div>

      <!-- Right side -->
      <div class="flex sm:-mr-3">
        <a
          href="https://www.linkedin.com/in/schmidpatrick1337/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open linkedin profile (opens in new tab)"
          class="w-12 h-12 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
        >
          <Icon
            icon="fa7-brands:linkedin"
            width="24"
            aria-hidden="true"
            focusable="false"
          />
        </a>

        <a
          href="https://github.com/schmidpatrick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open github profile (opens in new tab)"
          class="w-12 h-12 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
        >
          <Icon
            icon="fa7-brands:github"
            width="24"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

const currentYear = new Date().getFullYear();
</script>
