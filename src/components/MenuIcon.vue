<template>
  <div class="w-[18px] h-[11px] relative flex items-center justify-center">
    <span
      class="absolute block h-[1px] w-full bg-foreground transition-all duration-400 ease-in-out"
      :class="isOpen ? 'rotate-45' : '-translate-y-[5px]'"
    />
    <span
      class="absolute block h-[1px] w-full bg-foreground transition-all duration-400 ease-in-out"
      :class="isOpen ? '-rotate-45' : 'translate-y-[5px]'"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>
