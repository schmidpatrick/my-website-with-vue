<template>
  <footer class="w-full bg-section">
    <div class="max-w-[1024px] mx-auto px-4 sm:px-6 py-12">
      <div
        class="flex flex-col-reverse gap-10 sm:flex-row sm:items-center sm:justify-between text-xs"
      >
        <!-- Left side -->
        <div class="flex flex-col items-start gap-2">
          <div class="text-muted-foreground/80">
            © {{ currentYear }} Patrick Schmid. All rights reserved.
          </div>
          <div class="flex flex-row flex-wrap items-start gap-4 sm:gap-8">
            <RouterLink
              to="/privacy-policy"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </RouterLink>
          </div>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/schmidpatrick1337/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/schmidpatrick"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();
</script>
