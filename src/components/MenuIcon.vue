<template>
  <div class="w-[18px] h-[18px] relative flex items-center justify-center">
    <span
      class="absolute block h-[1px] w-[16px] bg-foreground transition-all duration-400 ease-in-out"
      :class="isOpen ? 'rotate-45 w-[18px]' : '-translate-y-1'"
    />
    <span
      class="absolute block h-[1px] w-[16px] bg-foreground transition-all duration-400 ease-in-out"
      :class="isOpen ? '-rotate-45 w-[18px]' : 'translate-y-1'"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>
