<template>
  <div
    class="grid grid-cols-1 sm:min-h-[300px] sm:grid-cols-2 bg-card rounded-3xl"
  >
    <div
      class="order-2 sm:order-1 p-8 sm:pl-16 flex items-center justify-center"
    >
      <div class="flex flex-col gap-4 items-center sm:items-start">
        <div class="flex flex-col gap-1">
          <h2 class="text-center sm:text-start">Public transport app</h2>
          <p class="text-xs text-center sm:text-start">
            2025 • Case study • Product Design
          </p>
        </div>
        <p class="text-foreground text-center sm:text-start">
          How to rebuild trust and confidence in a public transport app.
        </p>
        <div
          class="h-12 w-fit inline-flex items-center justify-center px-6 text-sm text-primary-foreground font-semibold rounded-full bg-primary"
        >
          View case study
        </div>
      </div>
    </div>
    <div
      class="order-1 h-[300px] pt-8 relative overflow-hidden flex items-start sm:items-end justify-center sm:order-2 sm:h-auto sm:p-0"
    >
      <ImageWithFallback
        :src="onTheWay"
        class="w-[200px] absolute sm:translate-y-44"
      />
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent via-card/60 to-card sm:hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import onTheWay from "@/assets/images/on-the-way.png";
import ImageWithFallback from "./ImageWithFallback.vue";
</script>
