<template>
  <ProjectLayout>
    <ProjectHeader />
    <!-- Overview -->
    <section>
      <h2 id="overview">Overview</h2>
      <p>
        This project involved reimagining the user experience from the ground
        up. Through extensive user research and iterative design, we created a
        solution that not only met business objectives but exceeded user
        expectations.
      </p>
    </section>

    <!-- The Challenge -->
    <section>
      <h2 id="challenge">The Challenge</h2>
      <p>
        The existing app faced several usability issues that impacted retention:
      </p>
      <ProjectBulletList
        :items="[
          'Complex navigation structure causing user confusion',
          'Outdated visuals not aligned with modern expectations',
          'No personalization or adaptive content',
          'Limited mobile optimization',
        ]"
      />
    </section>

    <!-- Research Image -->
    <ProjectImage
      src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzU5NzYwNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      alt="Early wireframes and sketches"
      caption="Early wireframes and user flow diagrams"
    />

    <!-- Design Process -->
    <section class="space-y-8">
      <h2 id="process">Design Process</h2>
      <section>
        <h3>Research & Discovery</h3>
        <p>
          We conducted interviews with 25 participants and analyzed behavioral
          data to identify key friction points and opportunities for
          improvement.
        </p>
        <p>
          We conducted interviews with 25 participants and analyzed behavioral
          data to identify key friction points and opportunities for
          improvement.
        </p>
        <p>
          We conducted interviews with 25 participants and analyzed behavioral
          data to identify key friction points and opportunities for
          improvement.
        </p>
      </section>

      <section>
        <h3>Ideation & Iteration</h3>
        <p>
          Through multiple design sprints, we refined our approach with regular
          usability tests and feedback sessions.
        </p>
        <p>
          Through multiple design sprints, we refined our approach with regular
          usability tests and feedback sessions.
        </p>
        <p>
          Through multiple design sprints, we refined our approach with regular
          usability tests and feedback sessions.
        </p>
        <p>
          Through multiple design sprints, we refined our approach with regular
          usability tests and feedback sessions.
        </p>
      </section>
    </section>

    <!-- Final UI -->
    <ProjectImage
      src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NzU1Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      alt="Final app UI design"
      caption="Final design system and high-fidelity mockups"
    />

    <!-- The Solution -->
    <section>
      <h2 id="solution">The Solution</h2>
      <p>The redesigned app focused on three key pillars:</p>
      <ProjectBulletList
        :items="[
          'Simplified navigation with clear hierarchy',
          'Accessible design system for scalability',
          'Personalized experience powered by smart defaults',
        ]"
      />
    </section>

    <!-- Results -->
    <section>
      <h2 id="results">Results & Impact</h2>
      <p>
        The new design launched successfully and delivered measurable outcomes:
      </p>
      <ProjectBulletList
        :items="[
          '45% increase in engagement within first month',
          'User satisfaction improved from 3.2 → 4.7 / 5',
          '30% fewer support tickets related to navigation',
        ]"
      />
    </section>
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "@/components/project/ProjectLayout.vue";
import ProjectHeader from "@/components/project/ProjectHeader.vue";
import ProjectBulletList from "@/components/project/ProjectBulletList.vue";
import ProjectImage from "@/components/project/ProjectImage.vue";
</script>
