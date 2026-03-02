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
      <p>
        These findings revealed that rebuilding trust wasn’t a technical
        challenge — it was a communication and clarity problem.
      </p>
    </section>

    <!-- Design Challenge -->
    <section>
      <h2 id="design-challenge">Design Challenge</h2>
      <p>These insights reframed the problem into a clear design challenge:</p>
      <ProjectCallout variant="highlight">
        How might I restore trust at critical journey moments through clearer
        communication and reduced cognitive load?
      </ProjectCallout>
    </section>

    <!-- Framing -->
    <section>
      <h2 id="framing">User Scenario</h2>
      <p>
        For the bootcamp pitch, I structured the redesign around a simple,
        relatable story:
      </p>
      <ProjectCallout variant="highlight">
        Getting to a dentist appointment on time.
      </ProjectCallout>
      <p>
        It’s an everyday journey — familiar, time-bound, and subtly stressful.
        This narrative helped ground the user flow and communicate design
        decisions clearly to both designers and non-designers.
      </p>
    </section>

    <!-- Design Strategy -->
    <section>
      <h2 id="design-strategy">Design Strategy</h2>
      <p>
        Rather than redesigning the entire app, I focused on the moments where
        trust is most fragile.
      </p>
      <ProjectBulletList>
        <ProjectBulletListItem>
          <strong>Looking up routes:</strong> A clearer hierarchy helps users
          compare options quickly and decide with confidence.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>Buying a ticket:</strong> Streamlined steps and transparent
          system feedback reduce hesitation at the point of commitment.
        </ProjectBulletListItem>
        <ProjectBulletListItem>
          <strong>Assistance while on the way:</strong> Contextual guidance and
          timely updates reinforce reliability when plans change.
        </ProjectBulletListItem>
      </ProjectBulletList>
    </section>

    <!-- Interaction & Interface Design -->
    <section>
      <h2 id="interaction-interface-design">Interaction & Interface Design</h2>
      <p>
        The redesign focused on
        <strong>clarity, hierarchy, and a calmer tone</strong>, using deliberate
        interface states and feedback to ensure each step of the journey
        communicates what happens next — without hesitation.
      </p>
      <section>
        <h3 class="pt-4">Immediate Feedback During Search</h3>
        <p>
          In time-sensitive situations, even small delays create uncertainty. As
          soon as users begin typing, contextual suggestions appear — helping
          them find their destination quickly and without second-guessing.
        </p>
        <p>
          Frequently used destinations remain accessible through recent searches
          and favorites, supporting habitual travel patterns.
        </p>
        <figure class="space-y-4">
          <div
            class="aspect-[1/1] sm:aspect-[5/3] flex justify-center items-start pt-12 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/search-destination.png"
              alt="alt"
              class="w-4/5 sm:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>
          The result is a search experience that feels immediate and
          predictable.
        </p>
      </section>
      <section>
        <h3 class="pt-4">Route Comparison & Dynamic States</h3>
        <p>
          Route comparison centers on what matters most:
          <strong>duration and transfers</strong>. The fastest connection
          appears first, while visual hierarchy emphasizes total travel time and
          required changes.
        </p>
        <p>
          Routes and filters are accessed through a single expandable bottom
          sheet layered over the map. The sheet can be expanded for deeper
          comparison or collapsed to maintain spatial context — keeping
          orientation intact while exploring alternatives.
        </p>
        <figure class="space-y-4">
          <div
            class="aspect-[1/1] sm:aspect-[5/3] flex justify-center items-center pb-36 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/route-list-full.png"
              alt="alt"
              class="w-4/5 sm:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>
          Users can scan, compare, and decide without losing their sense of
          place.
        </p>
      </section>
      <section>
        <h3 class="pt-4">Route Details & Contextual Hierarchy</h3>
        <p>
          The route details screen brings structure to the full journey.
          Departure time, transfers, and the next required action are clearly
          prioritized, while the map provides spatial reassurance.
        </p>
        <p>
          Information is grouped to reduce cognitive load and highlight what
          needs attention now — not everything at once.
        </p>
        <figure class="space-y-4">
          <div
            class="flex justify-center items-start py-12 my-16 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/route-details-with-ticket.png"
              alt="alt"
              class="w-4/5 sm:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>Clarity here turns planning into confident action.</p>
      </section>
      <section>
        <h3 class="pt-4">Seamless Ticket Interaction</h3>
        <p>
          Ticket purchase happens directly within the route details view. The
          ticket matching the selected route is preselected, allowing users to
          complete the purchase with a single tap.
        </p>
        <p>
          During processing, a subtle loading state appears in place — keeping
          context intact. Once successful, the purchased ticket is displayed
          inside the same bottom sheet and can be collapsed to refocus on the
          journey.
        </p>
        <figure class="space-y-4">
          <div
            class="aspect-[1/1] sm:aspect-[5/3] flex justify-center items-start py-12 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/route-details-ticket-bottom-sheet.png"
              alt="alt"
              class="w-4/5 sm:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>
          The transition from planning to purchase feels seamless and
          uninterrupted.
        </p>
      </section>
      <section>
        <h3 class="pt-4">Dynamic Guidance & Location Feedback</h3>
        <p>
          During the journey, the current step is highlighted within the bottom
          sheet. As progress continues, the interface automatically scrolls to
          the relevant instruction, keeping users oriented without manual
          adjustment.
        </p>
        <p>
          A corresponding arrow on the map subtly pulsates to indicate the
          current location and reinforce spatial awareness.
        </p>
        <figure class="space-y-4">
          <div
            class="aspect-[1/1] sm:aspect-[5/3] flex justify-center items-center pt-14 overflow-hidden rounded-3xl bg-accent/40"
          >
            <ImageWithFallback
              src="/src/assets/images/on-the-way.png"
              alt="alt"
              class="w-4/5 sm:w-1/2 object-cover drop-shadow-phone"
            />
          </div>
        </figure>
        <p>Guidance stays visible. The journey stays predictable.</p>
      </section>
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
      <h2 id="design-perspective">Design Perspective</h2>
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
      <p>
        That belief continues to guide how I approach complex systems today.
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
