<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section
      class="min-h-[60vh] md:min-h-[75vh] flex flex-col gap-14 items-center justify-center mx-auto px-4 sm:px-6"
    >
      <h1
        class="text-[clamp(2rem,4.5vw,4rem)] text-center font-semibold leading-none my-0"
      >
        <span class="block"
          >I design
          <span class="text-primary">digital&nbsp;products.</span></span
        >
        <span class="block">With code in mind.</span>
      </h1>
      <!-- <button
        class="inline-flex items-center justify-center gap-3 px-8 py-4 text-primary font-medium hover:opacity-80 transition-opacity"
        @click="scrollToSection('featured-project')"
      >
        View my latest project
        <Icon
          icon="material-symbols:arrow-downward-rounded"
          width="24"
          class="animate-nudge-down motion-reduce:animate-none"
        />
      </button> -->
      <button
        class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary/10 text-primary font-medium hover:opacity-80 transition-opacity"
        @click="scrollToSection('featured-project')"
      >
        View my latest project
        <Icon icon="material-symbols:arrow-downward-rounded" width="24" />
      </button>
    </section>

    <!-- Feature Section -->
    <section class="w-full px-4 sm:px-6 py-14 sm:py-40 bg-section">
      <div id="featured-project" class="w-full max-w-sm mx-auto scroll-mt-24">
        <!-- Phone -->
        <RouterLink :to="projects[0].path" class="w-full aspect-[9/18.5]">
          <ImageWithFallback
            :src="routeDetailsWithTicket"
            alt="Route details screen showing a map with the selected route and a bottom sheet with departure time, list of stops, travel duration and purchased ticket."
          />
        </RouterLink>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col gap-7 items-center mt-8 sm:mt-20 text-center">
          <div class="text-sm text-muted-foreground">
            <span>{{ projects[0].year }}</span>
            <span> • </span>
            <span>Case study</span>
          </div>
          <h2 class="max-w-sm">{{ projects[0].title }}</h2>
          <p class="max-w-sm">{{ projects[0].description }}</p>
        </div>
        <RouterLink
          :to="projects[0].path"
          class="inline-flex items-center justify-center gap-2 px-7 py-4 mt-10 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-80 transition-opacity"
        >
          View case study
          <Icon icon="material-symbols:arrow-forward-rounded" width="24" />
        </RouterLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 py-14 sm:py-40">
      <!-- Intro -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 id="about">
          How I design <span class="text-primary">digital products</span>
        </h2>
        <p class="mt-7">
          I collaborate with startups and small teams to turn ideas into digital
          products — bringing clarity and structure to complex challenges.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 rounded-3xl bg-section">
          <p class="text-xs text-muted-foreground mb-2">01</p>
          <p class="font-semibold text-foreground tracking-tight">
            Clarity over complexity
          </p>
          <p class="mt-2">
            <span class="text-foreground">
              If users have to think too hard, the design isn’t done.
            </span>
            I turn complex requirements into clear flows that make decisions
            feel obvious.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-section">
          <p class="text-xs text-muted-foreground mb-2">02</p>
          <p class="font-semibold text-foreground tracking-tight">
            Design grounded in real implementation
          </p>
          <p class="mt-2">
            <span class="text-foreground">
              Good ideas fail if they don’t hold up in code.
            </span>
            I design with constraints in mind — so ideas don’t break in
            development.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-section">
          <p class="text-xs text-muted-foreground mb-2">03</p>
          <p class="font-semibold text-foreground tracking-tight">
            Systems, not screens
          </p>
          <p class="mt-2">
            <span class="text-foreground"> Products don’t stay small. </span>
            I build systems that stay consistent, scale, and make future
            decisions faster.
          </p>
        </div>
      </div>

      <!-- <div class="aspect-[4/5] bg-accent rounded-3xl overflow-hidden">
        <ImageWithFallback
          :src="patrickMedium"
          alt="An image of myself"
          class="w-full h-full object-cover"
        />
      </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { projects } from "../data/projects";
import { Icon } from "@iconify/vue";
import ImageWithFallback from "../components/ImageWithFallback.vue";
import routeDetailsWithTicket from "@/assets/images/route-details-with-ticket.png";
import patrickMedium from "@/assets/images/patrick-medium.png";

const route = useRoute();

// Handle scrolling when navigating from another page
onMounted(() => {
  const scrollTo = route?.state?.scrollTo as string | undefined;
  if (scrollTo) {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
});

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}
</script>
