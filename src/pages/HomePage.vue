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
    <section class="w-full bg-section">
      <div class="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <h2 id="projects" class="mb-8">Selected Projects</h2>
        <div class="grid grid-cols-1 gap-8">
          <RouterLink
            v-for="project in projects"
            :key="project.id"
            :to="project.path"
            class="block group"
          >
            <div
              class="bg-card rounded-3xl overflow-hidden hover:scale-[1.0161290323] transition-transform duration-300 ease-[cubic-bezier(0,0,.5,1)]"
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
      </div>
    </section>

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
