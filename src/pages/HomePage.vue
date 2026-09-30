<template>
  <div class="w-full">
    <Container>
      <div class="grid gap-8 items-end mt-12 sm:mt-24 sm:mb-12 sm:grid-cols-12">
        <div class="sm:col-span-7">
          <h1>
            Patrick Schmid&nbsp;—<br />a product engineer bridging code, design
            & business.
          </h1>
        </div>
        <div class="sm:col-span-5">
          <p class="max-w-prose">
            Welcome to my portfolio. Here I share my work and thoughts for you
            to explore. Get your favorite beverage and see what I did so far and
            what I'm up to next.
          </p>
        </div>
      </div>
    </Container>
    <Container>
      <SectionHeader> Projects </SectionHeader>
      <RouterLink :to="projects[0].path" class="hover:cursor-pointer">
        <FeatureCard />
      </RouterLink>
    </Container>
    <Container>
      <SectionHeader> About </SectionHeader>
      <div class="flex flex-col gap-6">
        <ImageWithFallback
          :src="patrick"
          alt="An image of myself."
          class="w-32 h-full rounded-3xl"
        />
        <p class="max-w-md">
          I've worn a few hats over the years — from running my own startup to
          working as a front-end developer and UX/UI designer. I enjoy working
          in the in-between, connecting different disciplines and getting into
          the nerdy details along the way. I like figuring things out, building
          things, and seeing where they can go.
        </p>
      </div>
    </Container>
    <Container>
      <SectionHeader> Contact </SectionHeader>
      <ul class="divide-y border-y">
        <li>
          <a href="https://github.com/schmidpatrick" class="group">
            <div class="flex flex-row justify-between items-center py-6">
              <span
                class="flex flex-row justify-between items-center w-full mr-2"
              >
                <span class="flex items-center gap-2 text-base">
                  <Icon
                    icon="mdi:github"
                    width="24"
                    height="24"
                    class="text-muted-foreground group-hover:text-foreground"
                  />
                  <span class="underline-offset-4 group-hover:underline"
                    >GitHub</span
                  >
                </span>
                <span class="text-xs text-muted-foreground"
                  >@schmidpatrick</span
                >
              </span>
              <span>
                <Icon
                  icon="lucide:arrow-up-right"
                  class="text-muted-foreground"
                />
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/schmidpatrick1337/"
            class="group"
          >
            <div class="flex flex-row justify-between items-center py-6">
              <span
                class="flex flex-row justify-between items-center w-full mr-2"
              >
                <span class="flex items-center gap-2 text-base">
                  <Icon
                    icon="mdi:linkedin"
                    width="24"
                    height="24"
                    class="text-muted-foreground group-hover:text-foreground"
                  />
                  <span class="underline-offset-4 group-hover:underline"
                    >Linkedin</span
                  >
                </span>
                <span class="text-xs text-muted-foreground"
                  >@schmidpatrick1337</span
                >
              </span>
              <span>
                <Icon
                  icon="lucide:arrow-up-right"
                  class="text-muted-foreground"
                />
              </span>
            </div>
          </a>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { projects } from "../data/projects";
import Container from "@/components/Container.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import ImageWithFallback from "@/components/ImageWithFallback.vue";
import patrick from "@/assets/images/patrick-square.png";
import { Icon } from "@iconify/vue";
</script>
