<template>
  <a
    href="https://www.linkedin.com/in/schmidpatrick1337/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open linkedin profile (opens in new tab)"
    class="hover:cursor-pointer"
  >
    <div class="p-12 bg-card rounded-3xl">
      <div class="flex flex-col gap-2 items-center">
        <h2>Let's connect!</h2>
        <Icon
          icon="fa7-brands:linkedin"
          width="48"
          aria-hidden="true"
          focusable="false"
        />
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
