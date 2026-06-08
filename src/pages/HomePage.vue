<template>
  <div class="w-full">
    <Container>
      <h1 class="text-center pt-4 sm:pt-14 sm:pb-8">
        Digital Product Professional
      </h1>
    </Container>
    <Container>
      <RouterLink :to="projects[0].path" class="hover:cursor-pointer">
        <FeatureCard />
      </RouterLink>
    </Container>
    <SectionHeader>My approach</SectionHeader>
    <Container>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-12">
        <p>
          <InlineHighlight tight>Connect perspectives.</InlineHighlight>
          Bringing together user needs, business goals, and technical realities.
        </p>
        <p>
          <InlineHighlight tight>Create clarity.</InlineHighlight>
          Designing intuitive experiences grounded in real problems.
        </p>
        <p>
          <InlineHighlight tight>Drive delivery.</InlineHighlight>
          Collaborating across disciplines to move ideas into production.
        </p>
      </div>
    </Container>
    <Container>
      <LinkedInCard />
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { projects } from "../data/projects";
import Container from "@/components/Container.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LinkedInCard from "@/components/LinkedInCard.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import InlineHighlight from "@/components/InlineHighlight.vue";
</script>
