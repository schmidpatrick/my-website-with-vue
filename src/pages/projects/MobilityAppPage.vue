<template>
  <ProjectLayout>
    <ProjectSection>
      <h1>{{ project?.title }}</h1>

      <div class="flex gap-2">
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          {{ project?.year }}
        </p>
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          Case Study
        </p>
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          {{ project?.read }} min read
        </p>
      </div>

      <p>
        Cologne’s public transport app is essential for navigating the city, but
        unreliable data and unclear journeys have
        <InlineHighlight>eroded trust</InlineHighlight> — pushing many users to
        switch to Google&nbsp;Maps or avoid the app entirely.
      </p>
      <p>
        While transport data reliability depends largely on backend systems, I
        focused on restoring confidence through clearer, more trustworthy
        journey planning.
      </p>
      <p>
        <InlineHighlight tight>Goal.</InlineHighlight>
        Enable users to choose and follow a route with confidence.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="problem">Why users lost trust</h2>
      <p>
        <InlineHighlight tight>Objective.</InlineHighlight>
        Understand what breaks confidence — and what restores it.
      </p>
      <p>
        I reviewed user feedback, analyzed competitor apps, and spoke with
        commuters to understand where trust breaks down.
      </p>
      <p>
        <InlineHighlight tight>Findings.</InlineHighlight>
        Unreliable data, unclear route structure, and missing context made
        journeys hard to evaluate — pushing many users to switch to
        Google&nbsp;Maps or abandon the app entirely.
      </p>
      <p class="border-l-4 border-primary pl-4 text-foreground font-medium">
        This showed that the core issue wasn’t data accuracy — users lacked the
        confidence to decide, even when the data was correct.
      </p>
      <p>
        Instead of only fixing issues, I focused on why tools like
        Google&nbsp;Maps feel reliable and used those patterns to guide the
        redesign.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="trusted-alternatives">Lessons from trusted alternatives</h2>
      <p>Patterns that build trust.</p>
      <Stack
        as="ol"
        gap="xs"
        class="list-decimal list-outside pl-5 marker:font-medium"
      >
        <li>
          <p>
            <InlineHighlight tight>Easy comparison of routes</InlineHighlight>
            allows users to decide without digging into details.
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>Clear structure</InlineHighlight>
            makes departure, transfers, and next steps immediately obvious.
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>Continuous guidance</InlineHighlight>
            ensures users always know where they are and what comes next.
          </p>
        </li>
      </Stack>
      <p>
        I used these patterns to define the design direction: prioritize
        decision-making over completeness and reduce the need to interpret raw
        data.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="scenario">Moments where trust matters most</h2>
      <p>
        <InlineHighlight tight>Scenario.</InlineHighlight>
        A time-sensitive everyday journey to a dentist appointment.
      </p>
      <p>
        Rather than redesigning the entire app, I focused on
        <InlineHighlight>
          moments where users need to make decisions quickly and without
          doubt</InlineHighlight
        >.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="design-principles">Design principles for rebuilding trust</h2>
      <Stack
        as="ol"
        gap="xs"
        class="list-decimal list-outside pl-5 marker:font-medium"
      >
        <li>
          <p>
            <InlineHighlight tight>
              Make route options comparable at a glance.
            </InlineHighlight>
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>
              Surface key trip decisions before secondary details.
            </InlineHighlight>
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>
              Keep users oriented from planning to arrival.
            </InlineHighlight>
          </p>
        </li>
      </Stack>
      <p>
        To keep decisions fast and clear, I intentionally deprioritized less
        critical details and surfaced them only when needed.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="design-process">Designing a journey users can trust</h2>
      <p>
        I designed the journey around key moments where users need to choose,
        confirm, and act. At each step, the interface reduces guesswork and
        makes the next action clear.
      </p>

      <div class="w-full max-w-sm mx-auto pt-12">
        <div class="relative aspect-[9/18.5]">
          <!-- NEXT (underneath) -->
          <img
            :src="steps[current].image"
            class="absolute inset-0 w-full h-full object-contain z-0"
          />

          <!-- CURRENT (on top, fading out) -->
          <img
            v-if="previous"
            :src="previous"
            class="absolute inset-0 w-full h-full object-contain z-10 fade-out"
            @animationend="previous = null"
          />
        </div>

        <div class="flex justify-center my-6">
          <div
            ref="wrapperRef"
            class="relative bg-muted rounded-full p-1 overflow-hidden"
          >
            <!-- PILL -->
            <div
              class="absolute top-1 bottom-1 rounded-full bg-foreground pointer-events-none transition-[left,width] duration-[280ms] ease-[cubic-bezier(0,0,0.58,1)]"
              :style="pillStyle"
            />

            <!-- STEPPER -->
            <div class="overflow-hidden">
              <ul
                ref="containerRef"
                class="relative flex overflow-x-auto scrollbar-none"
                :style="maskStyle"
              >
                <li
                  v-for="(step, index) in steps"
                  :key="step.id"
                  class="flex-shrink-0"
                >
                  <button
                    :ref="(el) => setStepRef(el, index)"
                    :class="[
                      index === current
                        ? 'text-white transition-colors duration-[140ms] delay-[140ms] ease-[cubic-bezier(0.42,0,1.0,1.0)]'
                        : 'text-foreground opacity-80 hover:opacity-100 transition-opacity duration-[120ms] ease-[cubic-bezier(0,0,0.58,1)]',
                    ]"
                    class="whitespace-nowrap px-4 py-2 text-sm rounded-full"
                    @click="setCurrent(index)"
                  >
                    {{ step.label }}
                  </button>
                </li>
              </ul>
            </div>

            <!-- LEFT ARROW -->
            <button
              v-if="hasOverflow && canScrollLeft"
              class="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-10 items-center justify-center bg-transparent transition"
              @click="prev"
            >
              <Icon
                icon="material-symbols:chevron-left-rounded"
                width="24"
                class="text-base text-muted-foreground"
              />
            </button>
            <!-- RIGHT ARROW -->
            <button
              v-if="hasOverflow && canScrollRight"
              class="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-10 items-center justify-center bg-transparent transition"
              @click="next"
            >
              <Icon
                icon="material-symbols:chevron-right-rounded"
                width="24"
                class="text-base text-muted-foreground"
              />
            </button>
          </div>
        </div>

        <div class="min-h-28">
          <Transition name="fade" mode="out-in">
            <p :key="steps[current].id" class="text-center px-5">
              <InlineHighlight> {{ steps[current].title }}. </InlineHighlight>
              {{ steps[current].description }}
            </p>
          </Transition>
        </div>
      </div>
    </ProjectSection>

    <ProjectSection>
      <h2 id="testing">Validating the design direction</h2>
      <p>
        I built a functional prototype and tested it with commuters using the
        dentist appointment scenario.
      </p>
      <p>
        Using Material Design components let me focus on validating flow and
        interaction, while relying on familiar patterns users already
        understand.
      </p>
      <p>
        <a href="https://www.figma.com/proto/..."> Try the prototype </a>
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="key-observations">Key observations</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Participants compared route options quickly without needing
            guidance, indicating that the hierarchy reduced cognitive effort at
            the decision point.
          </p>
        </li>
        <li>
          <p>
            Route details made transfers and timing easy to verify, helping
            users commit to a route with more confidence.
          </p>
        </li>
        <li>
          <p>
            Familiar patterns reduced hesitation, especially under time
            pressure, and made the flow immediately understandable.
          </p>
        </li>
      </Stack>
      <p>
        As a result, users moved from comparing options to committing to a route
        more quickly, with fewer moments of uncertainty.
      </p>
      <p class="border-l-4 border-primary pl-4 font-medium">
        Even without changes to the underlying data, clearer decisions and
        predictable interactions made the system feel more trustworthy.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="takeaways">Takeaways</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Trust isn’t driven by data alone — it depends on how easily users
            can make decisions with that data.
          </p>
        </li>
        <li>
          <p>
            Prioritizing clarity over completeness reduces hesitation at
            critical moments.
          </p>
        </li>
        <li>
          <p>
            Small improvements at decision points can change how reliable a
            system feels.
          </p>
        </li>
      </Stack>
    </ProjectSection>

    <ProjectSection>
      <h2 id="next-steps">Next steps</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Validate the design with real-time data to understand how delays and
            uncertainty affect user decisions.
          </p>
        </li>
        <li>
          <p>
            Explore how proactive updates (e.g. delay alerts) can support users
            during disruptions.
          </p>
        </li>
        <li>
          <p>Test the approach across more complex, multi-step journeys.</p>
        </li>
      </Stack>
    </ProjectSection>
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectLayout from "@/components/project/ProjectLayout.vue";
import ImageWithFallback from "@/components/ImageWithFallback.vue";
import routeListFull from "@/assets/images/route-list-full.png";
import routeDetailsWithTicket from "@/assets/images/route-details-with-ticket.png";
import routeDetailsWithTicketFull from "@/assets/images/route-details-with-ticket-full.png";
import routeDetailsTicketBottomSheet from "@/assets/images/route-details-ticket-bottom-sheet.png";
import onTheWay from "@/assets/images/on-the-way.png";
import ProjectSection from "@/components/project/ProjectSection.vue";
import Stack from "@/components/Stack.vue";
import InlineHighlight from "@/components/InlineHighlight.vue";
import { useCurrentProject } from "@/composables/useCurrentProject";
import { Icon } from "@iconify/vue";
import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
  ComponentPublicInstance,
  computed,
} from "vue";

const project = useCurrentProject();

// Mockup stepper
const current = ref(0);
const previous = ref(null);
const containerRef = ref<HTMLElement | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);
const hasOverflow = ref(false);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);
const stepRefs = ref<(HTMLElement | null)[]>([]);
const pillStyle = ref({
  width: "0px",
  left: "0px",
});

let resizeObserver: ResizeObserver | null = null;

const steps = [
  {
    id: 1,
    label: "Overview",
    title: "Understand your journey at a glance",
    description:
      "The map and route details work together to show where you are, where you’re going, and how everything connects.",
    image: routeDetailsWithTicket,
  },
  {
    id: 2,
    label: "Journey",
    title: "Know exactly when and how you travel",
    description:
      "Clear departure times and structured transfers make each step of the journey easy to follow.",
    image: routeDetailsWithTicketFull,
  },
  {
    id: 3,
    label: "Navigation",
    title: "Stay oriented at every step",
    description:
      "Live guidance on the map and in the details keeps you on track throughout the journey.",
    image: onTheWay,
  },
  {
    id: 4,
    label: "Compare",
    title: "Choose with confidence",
    description:
      "Compare routes by duration and complexity to quickly find the option that fits your needs.",
    image: routeListFull,
  },
  {
    id: 5,
    label: "Ticket",
    title: "Get clear confirmation and peace of mind",
    description:
      "Your ticket and journey details are easy to access, so you always know you’re covered.",
    image: routeDetailsTicketBottomSheet,
  },
];

function checkOverflow() {
  const el = containerRef.value;
  if (!el) return;

  hasOverflow.value = el.scrollWidth > el.clientWidth;

  updateScrollState();
}

function updateScrollState() {
  const el = containerRef.value;
  if (!el) return;

  canScrollLeft.value = el.scrollLeft > 0;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
}

function getTargetMetrics(index: number) {
  const wrapper = wrapperRef.value;
  const container = containerRef.value;
  const el = stepRefs.value[index];

  if (!wrapper || !container || !el) return null;

  const wrapperRect = wrapper.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // ideal center
  const idealScrollLeft =
    el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;

  // clamp to bounds
  const maxScroll = container.scrollWidth - container.clientWidth;
  const targetScrollLeft = Math.max(0, Math.min(idealScrollLeft, maxScroll));

  // scroll delta
  const scrollDelta = targetScrollLeft - container.scrollLeft;

  // pill position
  const pillLeft =
    el.offsetLeft - targetScrollLeft + (containerRect.left - wrapperRect.left);

  return {
    targetScrollLeft,
    scrollDelta,
    pillLeft,
    width: el.offsetWidth,
  };
}

function setPill(width: number, left: number) {
  pillStyle.value = {
    width: `${width}px`,
    left: `${left}px`,
  };
}

function setCurrent(index: number) {
  if (index === current.value) return;

  const clamped = Math.max(0, Math.min(index, steps.length - 1));
  const metrics = getTargetMetrics(clamped);
  const el = containerRef.value;

  if (!metrics || !el) return;

  previous.value = steps[current.value].image;
  current.value = clamped;

  requestAnimationFrame(() => {
    setPill(metrics.width, metrics.pillLeft);
    animateScroll(el, metrics.scrollDelta, 320);
  });
}

function next() {
  setCurrent(current.value + 1);
}

function prev() {
  setCurrent(current.value - 1);
}

function preventWheel(e: WheelEvent) {
  e.preventDefault();
}

function preventTouchMove(e: TouchEvent) {
  e.preventDefault();
}

function setStepRef(
  el: Element | ComponentPublicInstance | null,
  index: number,
) {
  if (el instanceof HTMLElement) {
    stepRefs.value[index] = el;
  } else {
    stepRefs.value[index] = null;
  }
}

function syncToCurrent() {
  const metrics = getTargetMetrics(current.value);
  const el = containerRef.value;
  if (!metrics || !el) return;

  setPill(metrics.width, metrics.pillLeft);

  // also fix scroll position
  el.scrollLeft = metrics.targetScrollLeft;
}

function animateScroll(el: HTMLElement, delta: number, duration: number) {
  const start = el.scrollLeft;
  const target = start + delta;
  const startTime = performance.now();

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.2); // cubic ease-out

  // animation loop
  function frame(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const eased = easeOut(progress);

    el.scrollLeft = start + (target - start) * eased;

    if (progress >= 1) {
      el.scrollLeft = target;
      return; // stop animation
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function handleScroll() {
  updateScrollState();
}

const maskStyle = computed(() => {
  const left = hasOverflow.value && canScrollLeft.value;
  const right = hasOverflow.value && canScrollRight.value;

  const ARROW = 40;
  const PADDING = 4;
  const OFFSET = ARROW - PADDING;
  const FADE = 24;

  if (left && right) {
    return {
      WebkitMaskImage: `linear-gradient(
        to right,
        transparent ${OFFSET}px,
        black ${OFFSET + FADE}px,
        black calc(100% - ${OFFSET + FADE}px),
        transparent calc(100% - ${OFFSET}px)
      )`,
      maskImage: `linear-gradient(
        to right,
        transparent ${OFFSET}px,
        black ${OFFSET + FADE}px,
        black calc(100% - ${OFFSET + FADE}px),
        transparent calc(100% - ${OFFSET}px)
      )`,
    };
  }

  // left only
  if (left) {
    return {
      WebkitMaskImage: `linear-gradient(
        to right,
        transparent ${OFFSET}px,
        black ${OFFSET + FADE}px,
        black 100%
      )`,
      maskImage: `linear-gradient(
        to right,
        transparent ${OFFSET}px,
        black ${OFFSET + FADE}px,
        black 100%
      )`,
    };
  }

  // right only
  if (right) {
    return {
      WebkitMaskImage: `linear-gradient(
        to right,
        black 0,
        black calc(100% - ${OFFSET + FADE}px),
        transparent calc(100% - ${OFFSET}px)
      )`,
      maskImage: `linear-gradient(
        to right,
        black 0,
        black calc(100% - ${OFFSET + FADE}px),
        transparent calc(100% - ${OFFSET}px)
      )`,
    };
  }

  return {};
});

watch(current, async () => {
  await nextTick();
  checkOverflow();
});

onMounted(async () => {
  await nextTick();

  const el = containerRef.value;
  const metrics = getTargetMetrics(current.value);
  if (!el || !metrics) return;

  el.addEventListener("wheel", preventWheel, { passive: false });
  el.addEventListener("touchmove", preventTouchMove, { passive: false });

  // init
  checkOverflow();
  setPill(metrics.width, metrics.pillLeft);

  // listen to scroll
  el.addEventListener("scroll", handleScroll);

  // observe size changes
  let frame: number | null = null;
  resizeObserver = new ResizeObserver(() => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      checkOverflow();
      syncToCurrent();
    });
  });

  resizeObserver.observe(el);
});

onBeforeUnmount(() => {
  const el = containerRef.value;

  if (el) {
    el.removeEventListener("scroll", handleScroll);
    el.removeEventListener("wheel", preventWheel);
    el.removeEventListener("touchmove", preventTouchMove);
  }

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});
</script>

<style>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Text animation */
.fade-enter-active {
  transition: opacity 200ms ease;
  transition-delay: 140ms;
}

.fade-leave-active {
  transition: opacity 120ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mockup animation */
.fade-out {
  animation: fadeOut 400ms cubic-bezier(0.3, 0, 0.2, 1);
  animation-delay: 80ms;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
