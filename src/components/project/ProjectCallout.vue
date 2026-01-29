<script setup lang="ts">
import { Quote } from "lucide-vue-next"; // Vue version of lucide-react
import { computed } from "vue";

const props = defineProps<{
  author?: string;
  variant?: "quote" | "highlight";
}>();

// default variant
const isQuote = computed(() => props.variant === "quote");
</script>

<template>
  <div class="rounded-3xl bg-accent/50 p-6 md:p-8">
    <!-- Quote icon -->
    <Quote
      v-if="isQuote"
      class="text-muted-foreground mb-4"
      :size="24"
      :stroke-width="1.5"
    />

    <!-- Callout text -->
    <div :class="{ italic: isQuote }">
      <slot />
    </div>

    <!-- Author -->
    <div v-if="author" class="text-muted-foreground mt-4">— {{ author }}</div>
  </div>
</template>
