<template>
  <div class="min-h-screen flex flex-col">
    <Header name="Patrick Schmid" />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
