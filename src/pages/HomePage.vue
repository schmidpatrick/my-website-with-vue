<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 py-20 sm:py-40">
      <div class="max-w-3xl">
        <h1 class="text-4xl sm:text-5xl md:text-6xl space-y-1">
          <span class="block">Thoughtful products.</span>
          <span class="block">Consistent design.</span>
          <span class="block font-semibold">Real impact.</span>
        </h1>
        <p class="max-w-xl text-lg leading-relaxed">
          I design digital products with a deep understanding of how they’re
          built — aligning research, systems thinking, and visual craft into
          intuitive, scalable experiences.
        </p>
      </div>
    </section>

    <!-- Feature Section -->
    <RouterLink :to="projects[0].path" class="block group">
      <section class="w-full bg-section scroll-mt-11">
        <div class="max-w-[1024px] mx-auto px-4 sm:px-6 py-14 sm:py-40">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <!-- Mockup -->
            <div class="flex justify-center">
              <ImageWithFallback
                :src="routeDetailsWithTicket"
                alt="Route details screen showing a map with the selected route and a bottom sheet with departure time, list of stops, travel duration and purchased ticket."
                class="w-4/5 object-contain drop-shadow-phone"
              />
            </div>
            <!-- Text + CTA -->
            <div class="space-y-10">
              <div class="space-y-6">
                <h2 id="projects">
                  {{ projects[0].title }}
                </h2>

                <p>
                  {{ projects[0].description }}
                </p>
              </div>

              <span
                class="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:underline"
              >
                Read the full case study
                <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </RouterLink>

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
          <!-- <div class="inline-flex flex-col gap-6 mt-8">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin class="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github class="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div> -->
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
import ImageWithFallback from "../components/ImageWithFallback.vue";
import routeDetailsWithTicket from "@/assets/images/route-details-with-ticket.png";
import patrickMedium from "@/assets/images/patrick-medium.png";
import { Linkedin, Github } from "lucide-vue-next"; // Vue version of lucide-react

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
</script>
