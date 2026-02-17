<script setup lang="ts">
import { Quote } from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps<{
  author?: string;
  variant?: "quote" | "highlight";
}>();

const isQuote = computed(() => props.variant === "quote");
</script>

<template>
  <div>
    <div
      class="my-12 rounded-3xl bg-accent/40"
      :class="isQuote ? 'p-8 md:p-10' : 'p-6 md:p-8'"
    >
      <!-- Quote icon -->
      <Quote
        v-if="isQuote"
        class="text-muted-foreground mb-6"
        :size="28"
        :stroke-width="1.5"
      />

      <!-- Callout text -->
      <div
        :class="[
          'text-lg leading-relaxed',
          isQuote ? 'italic' : 'text-muted-foreground font-medium',
        ]"
      >
        <slot />
      </div>

      <!-- Author (only for quote variant) -->
      <div v-if="author" class="mt-6 text-sm text-muted-foreground">
        — {{ author }}
      </div>
    </div>
  </div>
</template>
