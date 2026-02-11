<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div class="max-w-3xl">
        <h1>Thoughtful products. Consistent design. Real impact.</h1>
        <p class="max-w-2xl">
          I’m a product designer with a background in frontend development —
          combining research, design systems, and visual craft to create
          intuitive experiences that make a difference.
        </p>
      </div>
    </section>

    <RouterLink :to="projects[0].path" class="block group">
      <section class="w-full bg-section">
        <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <!-- Left: Text + CTA -->
            <div class="space-y-6">
              <h2 class="text-xl font-medium leading-snug">
                {{ projects[0].title }}
              </h2>

              <p class="text-muted-foreground leading-relaxed">
                {{ projects[0].description }}
              </p>

              <span
                class="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:underline"
              >
                Read the full case study
                <span aria-hidden>→</span>
              </span>
            </div>

            <!-- Right: Mockup -->
            <div
              class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-accent"
            >
              <!-- Replace with real mockup image -->
              <ImageWithFallback
                src="/path/to/mockup.png"
                alt="App mockup of {{ projects[0].title }}"
                class="w-full h-full object-contain"
              />
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
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <section>
          <h2 id="about">Behind the Pixels</h2>
          <p>A closer look at what shapes my approach to design.</p>
          <p>
            Since 2016, I’ve been working with startups and small teams to turn
            ideas into digital products — tackling complex challenges through
            clarity, structure, and thoughtful detail.
          </p>
          <p>
            My background in frontend development informs how I design. It’s
            where I learned to value systems, precision, and the small decisions
            that shape how something feels — guiding me to create experiences
            that are intuitive, consistent, and built to last.
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
            src="/src/assets/images/patrick-medium.png"
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
import ProjectCard from "@/components/project/ProjectCard.vue";
import ImageWithFallback from "../components/ImageWithFallback.vue";
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
