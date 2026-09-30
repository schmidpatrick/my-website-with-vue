<template>
  <footer class="w-full px-6 mt-40 text-muted-foreground">
    <div class="mx-auto max-w-4xl">
      <div
        class="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between sm:gap-16"
      >
        <RouterLink to="/" class="text-2xl text-foreground font-bold">
          Patrick Schmid
        </RouterLink>

        <div class="grid grid-cols-2 gap-8 sm:gap-16">
          <nav class="flex flex-col gap-3 text-sm">
            <span class="text-xs uppercase">Extern</span>
            <a
              href="https://github.com/schmidpatrick"
              class="underline-offset-4 hover:underline hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/schmidpatrick1337/"
              class="underline-offset-4 hover:underline hover:text-foreground"
            >
              Linkedin
            </a>
          </nav>
          <nav class="flex flex-col gap-3 text-sm">
            <span class="text-xs uppercase">Site</span>
            <RouterLink
              to="/privacy-policy"
              class="underline-offset-4 hover:underline hover:text-foreground"
            >
              Privacy Policy
            </RouterLink>
          </nav>
        </div>
      </div>

      <div class="py-6 text-sm border-t mt-12">
        <span> © {{ currentYear }} Patrick Schmid. All rights reserved. </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

const currentYear = new Date().getFullYear();
</script>
