<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section
      class="min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-center mx-auto px-4 sm:px-6 space-y-14"
    >
      <h1
        class="text-[clamp(2rem,5vw,4rem)] text-center text-balance font-semibold leading-none my-0"
      >
        <span class="block"
          >I design
          <span class="text-primary">digital&nbsp;products</span></span
        >
        <span class="block">with a deep understanding</span>
        <span class="block">of how they're built</span>
      </h1>
      <button
        class="inline-flex items-center justify-center gap-2 px-8 py-4 text-primary font-medium hover:opacity-80 transition-opacity"
        @click="scrollToSection('featured-project')"
      >
        View my latest project
        <Icon
          icon="material-symbols:arrow-downward-rounded"
          width="24"
          class="animate-nudge-down motion-reduce:animate-none"
        />
      </button>
    </section>

    <!-- Feature Section -->
    <section class="w-full px-4 sm:px-6 py-14 sm:py-40 bg-section">
      <div
        id="featured-project"
        class="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center scroll-mt-24"
      >
        <!-- Phone -->
        <RouterLink
          :to="projects[0].path"
          class="mx-auto max-w-xs sm:col-start-2 drop-shadow-phone"
        >
          <ImageWithFallback
            :src="routeDetailsWithTicket"
            alt="Route details screen showing a map with the selected route and a bottom sheet with departure time, list of stops, travel duration and purchased ticket."
          />
        </RouterLink>

        <!-- Metadata -->
        <div
          class="mx-auto max-w-xs grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 sm:gap-y-10 sm:col-start-3 mt-16 sm:mt-0 sm:ml-9 sm:-translate-y-4"
        >
          <div>
            <p class="text-sm font-semibold">Role</p>
            <p class="text-sm">{{ projects[0].role }}</p>
          </div>

          <div>
            <p class="text-sm font-semibold">Focus</p>
            <p class="text-sm">{{ projects[0].focus }}</p>
          </div>

          <div>
            <p class="text-sm font-semibold">Scope</p>
            <p class="text-sm">{{ projects[0].scope }}</p>
          </div>

          <div>
            <p class="text-sm font-semibold">Year</p>
            <p class="text-sm">{{ projects[0].year }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="flex flex-col items-center mt-8 sm:mt-20 text-center space-y-7"
        >
          <h2 class="max-w-md text-balance">{{ projects[0].title }}</h2>
          <p class="max-w-sm text-balance">{{ projects[0].description }}</p>
        </div>
        <RouterLink
          :to="projects[0].path"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 mt-10 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-80 transition-opacity"
        >
          View case study
          <Icon icon="material-symbols:arrow-forward-rounded" width="24" />
        </RouterLink>
      </div>
    </section>

    <!-- Projects Section -->
    <!-- <section class="w-full bg-section">
      <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <h2 id="projects" class="mb-8">Selected Projects</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="project in projects.slice(0, 3)"
            :key="project.id"
            :to="project.path"
            class="group"
          >
            <ProjectCard :project="project" />
          </RouterLink>
        </div>
      </div>
    </section> -->

    <!-- About Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 py-14 sm:py-40">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <section>
          <h2 id="about">Behind the Pixels</h2>
          <p>How I think, create, and bring digital products to life.</p>
          <p>
            I collaborate with startups and small teams to transform ideas into
            digital products — tackling complex challenges with clarity,
            structure, and thoughtful detail.
          </p>
          <p>
            I approach design holistically, thinking in systems while staying
            grounded in practical implementation. This enables me to create
            experiences that are intuitive, consistent, and built to scale.
          </p>
          <p>
            Beyond the screen, you’ll likely find me longboarding along the
            Rhine, refining latte art, or getting lost in music.
          </p>
        </section>

        <div class="aspect-[4/5] bg-accent rounded-3xl overflow-hidden">
          <ImageWithFallback
            :src="patrickMedium"
            alt="An image of myself"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
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
