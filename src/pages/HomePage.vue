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

    <!-- Projects Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 id="projects">Selected Projects</h2>
      <div class="grid grid-cols-1 gap-8">
        <RouterLink
          v-for="project in projects"
          :key="project.id"
          :to="project.path"
          class="block group"
        >
          <div
            class="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="flex flex-col sm:flex-row">
              <!-- Thumbnail - Top on mobile, Left on desktop -->
              <div
                class="w-full sm:w-64 h-48 sm:h-auto bg-accent flex-shrink-0"
              >
                <div
                  class="w-full h-full flex items-center justify-center text-muted-foreground"
                >
                  Thumbnail
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 p-8">
                <div class="space-y-4">
                  <div
                    class="flex flex-wrap gap-x-4 gap-y-2 mb-2 text-sm text-muted-foreground"
                  >
                    <span>{{ project.year }}</span>
                    <span>•</span>
                    <span>{{ project.role }}</span>
                  </div>
                  <h3 class="line-clamp-1">
                    {{ project.title }}
                  </h3>
                  <p class="text-muted-foreground line-clamp-2">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <section>
          <h2 id="about">About Me</h2>
          <p>
            I'm a product designer with a passion for creating meaningful
            digital experiences. My work combines user research, strategic
            thinking, and visual design to solve complex problems.
          </p>
          <p>
            Over the past few years, I've had the opportunity to work with
            startups and established companies, helping them design products
            that users love and businesses need.
          </p>
          <p>
            When I'm not designing, you can find me exploring new technologies,
            reading about design systems, or working on side projects.
          </p>
          <div class="inline-flex flex-col gap-6 mt-8">
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
          </div>
        </section>

        <div class="aspect-[4/5] bg-accent rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1652498196118-4577d5f6abd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NzQ1MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Workspace"
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
