<template>
  <div class="w-full">
    <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="md:flex md:gap-24">
        <!-- Main Article -->
        <article class="flex-1 md:max-w-3xl space-y-16">
          <slot />
        </article>

        <!-- Sidebar -->
        <aside class="hidden md:block w-48 flex-shrink-0">
          <OnThisPage />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OnThisPage from "./OnThisPage.vue";
</script>
