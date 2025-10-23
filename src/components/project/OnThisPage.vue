<template>
  <div v-if="headings.length" class="sticky top-24">
    <div class="space-y-4">
      <h4 class="text-muted-foreground">On this page</h4>

      <nav class="relative">
        <!-- Animated left bar -->
        <div
          v-show="activeId"
          class="absolute -left-4 w-[4px] bg-primary rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          :style="indicatorStyle"
        ></div>

        <ul ref="listRef" class="relative space-y-1 text-sm">
          <li v-for="h in headings" :key="h.id">
            <button
              :data-id="h.id"
              class="relative w-full text-left py-2 rounded-md transition-colors duration-200"
              :class="
                activeId === h.id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              "
              @click="scrollTo(h.id)"
            >
              {{ h.text }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

type Heading = { id: string; text: string };

const headings = ref<Heading[]>([]);
const activeId = ref("");
const listRef = ref<HTMLElement | null>(null);
const indicatorTop = ref(0);
const indicatorHeight = ref(0);

/** Smooth scroll */
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Detect all h2s with id */
function collectHeadings() {
  const els = Array.from(document.querySelectorAll("h2[id]")) as HTMLElement[];
  headings.value = els.map((el) => ({
    id: el.id,
    text: el.textContent?.trim() || el.id,
  }));
}

/** Find the heading closest to top */
function onScroll() {
  const scrollPos = window.scrollY + 112;
  let current = "";
  for (const h of headings.value) {
    const el = document.getElementById(h.id);
    if (el && el.offsetTop <= scrollPos) current = h.id;
  }
  activeId.value = current;
}

/** Update left indicator position */
function updateIndicator() {
  nextTick(() => {
    const container = listRef.value;
    if (!container) return;
    const activeEl = container.querySelector<HTMLElement>(
      `button[data-id="${activeId.value}"]`,
    );
    if (activeEl) {
      indicatorTop.value = activeEl.offsetTop + 8;
      indicatorHeight.value = activeEl.offsetHeight - 16;
    }
  });
}

onMounted(() => {
  collectHeadings();
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initial
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

watch(activeId, updateIndicator);

const indicatorStyle = ref<Record<string, string>>({});
watch([indicatorTop, indicatorHeight], () => {
  indicatorStyle.value = {
    top: `${indicatorTop.value}px`,
    height: `${indicatorHeight.value}px`,
  };
});
</script>
