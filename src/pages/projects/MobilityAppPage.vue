<template>
  <ProjectLayout>
    <ProjectSection>
      <h1>{{ title }}</h1>

      <div class="flex gap-2">
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          {{ year }}
        </p>
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          Case Study
        </p>
        <p
          class="bg-section rounded px-2 py-1 text-xs font-medium text-muted-foreground/80"
        >
          {{ read }} min read
        </p>
      </div>

      <p>
        Cologne’s public transport app is essential for navigating the city, but
        unreliable data and unclear journeys have
        <InlineHighlight>eroded trust</InlineHighlight> — pushing many users to
        switch to Google&nbsp;Maps or avoid the app entirely.
      </p>
      <p>
        While transport data reliability depends largely on backend systems, I
        focused on restoring confidence through clearer, more trustworthy
        journey planning.
      </p>
      <p>
        <InlineHighlight tight>Goal.</InlineHighlight>
        Enable users to choose and follow a route with confidence.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="problem">Why users lost trust</h2>
      <p>
        <InlineHighlight tight>Objective.</InlineHighlight>
        Understand what breaks confidence — and what restores it.
      </p>
      <p>
        I reviewed user feedback, analyzed competitor apps, and spoke with
        commuters to understand where trust breaks down.
      </p>
      <p>
        <InlineHighlight tight>Findings.</InlineHighlight>
        Unreliable data, unclear route structure, and missing context made
        journeys hard to evaluate — pushing many users to switch to
        Google&nbsp;Maps or abandon the app entirely.
      </p>
      <p class="border-l-4 border-primary pl-4 text-foreground font-medium">
        This showed that the core issue wasn’t data accuracy — users lacked the
        confidence to decide, even when the data was correct.
      </p>
      <p>
        Instead of only fixing issues, I focused on why tools like
        Google&nbsp;Maps feel reliable and used those patterns to guide the
        redesign.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="trusted-alternatives">Lessons from trusted alternatives</h2>
      <p>Patterns that build trust.</p>
      <Stack
        as="ol"
        gap="xs"
        class="list-decimal list-outside pl-5 marker:font-medium"
      >
        <li>
          <p>
            <InlineHighlight tight>Easy comparison of routes</InlineHighlight>
            allows users to decide without digging into details.
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>Clear structure</InlineHighlight>
            makes departure, transfers, and next steps immediately obvious.
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>Continuous guidance</InlineHighlight>
            ensures users always know where they are and what comes next.
          </p>
        </li>
      </Stack>
      <p>
        I used these patterns to define the design direction: prioritize
        decision-making over completeness and reduce the need to interpret raw
        data.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="scenario">Moments where trust matters most</h2>
      <p>
        <InlineHighlight tight>Scenario.</InlineHighlight>
        A time-sensitive everyday journey to a dentist appointment.
      </p>
      <p>
        Rather than redesigning the entire app, I focused on
        <InlineHighlight>
          moments where users need to make decisions quickly and without
          doubt</InlineHighlight
        >.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="design-principles">Design principles for rebuilding trust</h2>
      <Stack
        as="ol"
        gap="xs"
        class="list-decimal list-outside pl-5 marker:font-medium"
      >
        <li>
          <p>
            <InlineHighlight tight>
              Make route options comparable at a glance.
            </InlineHighlight>
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>
              Surface key trip decisions before secondary details.
            </InlineHighlight>
          </p>
        </li>
        <li>
          <p>
            <InlineHighlight tight>
              Keep users oriented from planning to arrival.
            </InlineHighlight>
          </p>
        </li>
      </Stack>
      <p>
        To keep decisions fast and clear, I intentionally deprioritized less
        critical details and surfaced them only when needed.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="design-process">Designing a journey users can trust</h2>
      <p>
        I designed the journey around key moments where users need to choose,
        confirm, and act. At each step, the interface reduces guesswork and
        makes the next action clear.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h3>1. Comparing routes quickly</h3>
      <div>
        <p class="text-sm text-muted-foreground">User need</p>
        <p class="font-medium">Choose a route under time pressure.</p>
      </div>
      <p>
        I placed routes in a single expandable bottom sheet over the map,
        keeping spatial context visible. The fastest option is prioritized, with
        visual hierarchy highlighting travel time and transfers.
      </p>
      <p>
        Users can compare options in seconds without switching screens or losing
        context.
      </p>
      <p>
        This reduces hesitation at a critical decision point, especially under
        time pressure.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h3>2. Understanding route details</h3>
      <div>
        <p class="text-sm text-muted-foreground">User need</p>
        <p class="font-medium">Confirm the journey before committing.</p>
      </div>
      <p>
        I structured the route details to surface departure time, transfers, and
        next actions first, while the map reinforces where the journey takes
        place.
      </p>
      <p>This lets users verify that the route works before starting.</p>
    </ProjectSection>

    <ProjectSection>
      <h3>3. Feeling supported during the journey</h3>
      <div>
        <p class="text-sm text-muted-foreground">User need</p>
        <p class="font-medium">Stay oriented while moving.</p>
      </div>
      <p>
        I introduced a navigation arrow to highlight the current step in the
        bottom sheet, while a subtle map indicator shows the user’s position in
        real time.
      </p>
      <p>
        Users can follow the journey without reinterpreting the interface at
        each step.
      </p>
      <p>
        This reduces cognitive load during movement, when attention is limited.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h3>4. Searching and buying tickets</h3>
      <div>
        <p class="text-sm text-muted-foreground">User need</p>
        <p class="font-medium">Complete the journey without friction.</p>
      </div>
      <div>
        <p class="text-sm text-muted-foreground">Design principle</p>
        <p class="font-medium">Keep actions within the journey context.</p>
      </div>
      <p>
        I integrated search and ticket purchase directly into the route flow, so
        results, pricing, and confirmation don’t break the user’s context.
      </p>
      <p>
        Users can plan, confirm, and start their journey in one continuous flow.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="testing">Validating the design direction</h2>
      <p>
        I built a functional prototype and tested it with commuters using the
        dentist appointment scenario.
      </p>
      <p>
        Using Material Design components let me focus on validating flow and
        interaction, while relying on familiar patterns users already
        understand.
      </p>
      <p>
        <a href="https://www.figma.com/proto/..."> Try the prototype </a>
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="key-observations">Key observations</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Participants compared route options quickly without needing
            guidance, indicating that the hierarchy reduced cognitive effort at
            the decision point.
          </p>
        </li>
        <li>
          <p>
            Route details made transfers and timing easy to verify, helping
            users commit to a route with more confidence.
          </p>
        </li>
        <li>
          <p>
            Familiar patterns reduced hesitation, especially under time
            pressure, and made the flow immediately understandable.
          </p>
        </li>
      </Stack>
      <p>
        As a result, users moved from comparing options to committing to a route
        more quickly, with fewer moments of uncertainty.
      </p>
      <p class="border-l-4 border-primary pl-4 font-medium">
        Even without changes to the underlying data, clearer decisions and
        predictable interactions made the system feel more trustworthy.
      </p>
    </ProjectSection>

    <ProjectSection>
      <h2 id="takeaways">Takeaways</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Trust isn’t driven by data alone — it depends on how easily users
            can make decisions with that data.
          </p>
        </li>
        <li>
          <p>
            Prioritizing clarity over completeness reduces hesitation at
            critical moments.
          </p>
        </li>
        <li>
          <p>
            Small improvements at decision points can change how reliable a
            system feels.
          </p>
        </li>
      </Stack>
    </ProjectSection>

    <ProjectSection>
      <h2 id="next-steps">Next steps</h2>
      <Stack as="ul" gap="xs" class="list-disc list-outside pl-5">
        <li>
          <p>
            Validate the design with real-time data to understand how delays and
            uncertainty affect user decisions.
          </p>
        </li>
        <li>
          <p>
            Explore how proactive updates (e.g. delay alerts) can support users
            during disruptions.
          </p>
        </li>
        <li>
          <p>Test the approach across more complex, multi-step journeys.</p>
        </li>
      </Stack>
    </ProjectSection>
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectLayout from "@/components/project/ProjectLayout.vue";
import ImageWithFallback from "@/components/ImageWithFallback.vue";
import searchDestination from "@/assets/images/search-destination.png";
import routeListFull from "@/assets/images/route-list-full.png";
import routeDetailsWithTicket from "@/assets/images/route-details-with-ticket.png";
import routeDetailsTicketBottomSheet from "@/assets/images/route-details-ticket-bottom-sheet.png";
import onTheWay from "@/assets/images/on-the-way.png";
import ProjectSection from "@/components/project/ProjectSection.vue";
import Stack from "@/components/Stack.vue";
import InlineHighlight from "@/components/InlineHighlight.vue";
import { useCurrentProject } from "@/composables/useCurrentProject";
import { Icon } from "@iconify/vue";

const project = useCurrentProject();
const { title, year, read } = project.value;
</script>
