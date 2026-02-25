<template>
  <ProjectLayout>
    <ProjectHeader />
    <!-- Overview -->
    <section>
      <h2 id="overview">Overview</h2>
      <p>
        The KVB app helps people navigate public transport in Cologne — yet over
        time, it has lost the trust of its users. Reviews mention unreliable
        data, confusing navigation, and an outdated interface.
      </p>
      <p>
        As a frequent commuter, I felt that frustration myself. That's why I
        decided to explore how design could rebuild
        <strong>trust and confidence</strong> in such an essential everyday
        tool.
      </p>
    </section>

    <!-- The Problem -->
    <section>
      <h2 id="problem">The Problem</h2>
      <p>
        While the app's technical reliability (like real-time data) depends on
        the backend, the
        <strong>visual design and interaction patterns</strong> play a crucial
        role in how trustworthy the app feels. If users struggle to understand
        what's happening, even accurate data can feel unreliable.
      </p>
      <ProjectCallout
        variant="quote"
        author="User review from the Google Play Store"
      >
        I never know if I can rely on it — I always double-check with Google
        Maps.
      </ProjectCallout>
      <p>The app didn't just look outdated — it made people feel uncertain.</p>
    </section>

    <!-- Research -->
    <section>
      <h2 id="research">Research</h2>
      <p>To understand where that uncertainty came from, I conducted:</p>
      <ProjectBulletList>
        <ProjectBulletListItem>
          <strong>3 user interviews</strong> with regular commuters
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>A short online survey</strong> about travel habits
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>Analysis of Google Play Store reviews</strong> for authentic
          feedback from real users
        </ProjectBulletListItem>
      </ProjectBulletList>
      <p>Key insights:</p>
      <ProjectBulletList>
        <ProjectBulletListItem>
          Users frequently <strong>switch between multiple apps</strong> for
          route planning, ticketing, and delay updates.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          Trust issues arise not only from technical errors but from
          <strong>poor communication and feedback</strong> in the interface.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          The visual design feels <strong>dense and outdated</strong>,
          increasing cognitive load in time-sensitive situations.
        </ProjectBulletListItem>
      </ProjectBulletList>
    </section>

    <!-- Design Challenge -->
    <section>
      <h2 id="design-challenge">Design Challenge</h2>
      <p>Based on these findings, I defined my challenge:</p>
      <ProjectCallout variant="highlight">
        How might I make the KVB app feel more reliable, intuitive, and visually
        clear — even within the limits of real-time data accuracy?
      </ProjectCallout>
    </section>

    <!-- Framing -->
    <section>
      <h2 id="framing">Framing the Experience</h2>
      <p>
        For the bootcamp pitch, I structured the redesign around a simple,
        relatable story:
      </p>
      <ProjectCallout variant="highlight">
        Getting to a dentist appointment on time.
      </ProjectCallout>
      <p>
        It's an everyday journey — familiar, time-bound, and slightly
        stressfull. This narrative helped ground the user flow and communicate
        design decisions clearly to both designers and non-designers.
      </p>
    </section>

    <!-- Design Focus -->
    <section>
      <h2 id="design-focus">Design Focus</h2>
      <p>I focused on three key touchpoints of the user journey:</p>
      <ProjectBulletList>
        <ProjectBulletListItem>
          <strong>Looking up routes:</strong> A cleaner search interface and
          stronger hierarchy help users make quick, confident decisions.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>Buying a ticket:</strong> Simplified flows and clearer system
          feedback reduce friction and hesitation.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>Assistance while on the way:</strong> Contextual guidance and
          micro-interactions reassure users when plans change.
        </ProjectBulletListItem>
      </ProjectBulletList>
    </section>

    <!-- Visual Redesign -->
    <section>
      <h2 id="visual-redesign">Visual Redesign</h2>
      <p>
        The redesign focused on
        <strong>clarity, hierarchy, and a calmer tone</strong> — ensuring that
        every screen communicates the next step with confidence.
      </p>
      <section class="space-y-4">
        <h3>Immediate Clarity from the First Tap</h3>
        <p>
          In time-sensitive situations, even small delays can create
          uncertainty. As soon as users begin typing, contextual suggestions
          appear — helping them quickly find their destination without
          second-guessing. The cleaner layout and clearer hierarchy create a
          sense of immediacy and control.
        </p>
        <figure class="space-y-4">
          <div
            class="aspect-[1/1] md:aspect-[5/3] flex justify-center items-start pt-16 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/search-destination.png"
              alt="alt"
              class="w-4/5 md:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>
          Frequently used destinations remain easily accessible through recent
          searches and favorites, supporting habitual travel patterns.
        </p>
      </section>
      <ProjectBulletList>
        <ProjectBulletListItem
          >Dynamic color system, with strong contrasts for accessibility and a
          personalized UI, makes the app feel baked into the system
        </ProjectBulletListItem>
        <ProjectBulletListItem
          >Updated typography for improved legibility
        </ProjectBulletListItem>
        <ProjectBulletListItem
          >Visual hierarchy that emphasizes the "next step" in the journey
        </ProjectBulletListItem>
        <ProjectBulletListItem
          >Calmer tone and more breathing space to convey reliability
        </ProjectBulletListItem>
      </ProjectBulletList>
      <p>
        High-fidelity screens illustrate a unified experience — one that looks
        current and feels trustworthy.
      </p>
    </section>

    <!-- Outcome -->
    <section>
      <h2 id="outcome">Outcome</h2>
      <p>
        Testing with peers and presenting during the bootcamp pitch confirmed
        that the new design
        <strong>improves perceived reliability.</strong> Users described it as
        "cleaner", "more intuitive", and even "something I'd actually trust to
        get me there on time."
      </p>
      <p>
        While backend improvements remain crucial, this redesign demonstrates
        how <strong>frontend design can actively support trust</strong> through
        visual clarity and predictable interaction patterns.
      </p>
    </section>

    <!-- Reflection -->
    <section>
      <h2 id="reflection">Reflection</h2>
      <p>
        This project changed how I think about design for public services. Trust
        isn't just built with data — it's built through
        <strong>transparency, clarity, and tone</strong>.
      </p>
      <p>
        By translating technical complexity into a calm, confident interface, I
        learned how design can make technology feel human again.
      </p>
      <p>
        Most importantly, this project reminded me that
        <strong>design stories are about people</strong> — not features. Whether
        it's a commute or a dentist appointment, every journey deserves to feel
        reliable.
      </p>
    </section>
  </ProjectLayout>
</template>

<script setup>
import ProjectLayout from "@/components/project/ProjectLayout.vue";
import ProjectHeader from "@/components/project/ProjectHeader.vue";
import ProjectBulletList from "@/components/project/ProjectBulletList.vue";
import ImageWithFallback from "@/components/ImageWithFallback.vue";
import ProjectCallout from "@/components/project/ProjectCallout.vue";
import ProjectBulletListItem from "@/components/project/ProjectBulletListItem.vue";
</script>
