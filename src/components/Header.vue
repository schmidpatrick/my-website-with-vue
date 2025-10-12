<template>
  <header class="fixed top-0 z-50 w-full backdrop-blur-xl bg-background/80">
    <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
      <nav>
        <div class="flex items-center justify-between h-12">
          <!-- Logo/Name - Always on the left -->
          <RouterLink
            to="/"
            class="hover:opacity-60 transition-opacity flex items-center gap-2 h-full"
            :class="{ 'sm:block invisible': isOpen }"
          >
            <ArrowLeft v-if="!isHomePage" :size="20" />
            <span class="font-bold">{{ name }}</span>
          </RouterLink>

          <!-- Desktop Navigation Links - Only on homepage -->
          <div v-if="isHomePage" class="hidden sm:flex h-full gap-8 text-sm">
            <button
              @click="scrollToSection('projects')"
              class="hover:opacity-60 transition-opacity flex items-center"
            >
              Projects
            </button>
            <button
              @click="scrollToSection('about')"
              class="hover:opacity-60 transition-opacity flex items-center"
            >
              About
            </button>
          </div>

          <!-- Mobile Menu Button - Only on homepage -->
          <button
            v-if="isHomePage"
            @click="toggleMenu"
            class="sm:hidden hover:opacity-60 transition-opacity p-2 -mr-2 z-[60]"
            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          >
            <MenuIcon :isOpen="isOpen" />
          </button>
        </div>
      </nav>
    </div>
  </header>
  <!-- Mobile Menu Overlay -->
  <div
    v-if="isHomePage"
    class="fixed inset-0 z-40 sm:hidden transition-all duration-500 ease-in-out"
    :class="{
      'opacity-100 pointer-events-auto': isOpen,
      'opacity-0 pointer-events-none': !isOpen,
    }"
  >
    <div class="absolute inset-0 bg-background/95 backdrop-blur-xl">
      <div
        class="flex flex-col h-full pt-16 transition-all duration-500 delay-200"
        :class="{
          'opacity-100 translate-y-0': isOpen,
          'opacity-0 -translate-y-4': !isOpen,
        }"
      >
        <nav class="flex flex-col w-full">
          <button
            @click="scrollToSection('projects')"
            class="w-full text-left px-8 py-4 hover:opacity-60 transition-opacity text-[32px] leading-tight"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('about')"
            class="w-full text-left px-8 py-4 hover:opacity-60 transition-opacity text-[32px] leading-tight"
          >
            About
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import MenuIcon from "./MenuIcon.vue";

interface Props {
  name?: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: "Your Name",
});

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const isHomePage = computed(() => route.path === "/");

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// Prevent body scroll when menu is open
watch(isOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});

function scrollToSection(sectionId: string) {
  if (!isHomePage.value) {
    router.push({ path: "/", state: { scrollTo: sectionId } });
  } else {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  isOpen.value = false;
}
</script>
