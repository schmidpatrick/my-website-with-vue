<template>
  <article class="mx-auto w-full max-w-prose px-6 py-8 sm:py-24">
    <header>
      <h1>{{ project?.title }}</h1>
      <p class="text-xl sm:text-2xl mt-6">
        With or without an app, we would ride trams and buses probably just
        fine. So why would I care about redesigning yet another public transport
        app?
      </p>
      <p class="text-sm text-muted-foreground mt-6">{{ project?.year }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-6 py-4 border-y">
        <div>
          <p class="text-xs uppercase">Role</p>
          <p class="text-sm mt-1">{{ project?.role }}</p>
        </div>
        <div>
          <p class="text-xs uppercase">Focus</p>
          <p class="text-sm mt-1">{{ project?.focus }}</p>
        </div>
        <div>
          <p class="text-xs uppercase">Scope</p>
          <p class="text-sm mt-1">{{ project?.scope }}</p>
        </div>
        <div>
          <p class="text-xs uppercase">Tools</p>
          <p class="text-sm mt-1">{{ project?.tools }}</p>
        </div>
      </div>
      <ImageWithFallback
        class="mx-auto max-w-64 my-6"
        :src="onTheWay"
        alt="A mockup of the redesigned public transport app, showing the map view with the bottom sheet overlapping the map to the half."
      />
      <div>
        <a
          href="https://www.figma.com/proto/xvhkr0dvPQf5HpMKwczw9C/Public-Transport-App--Prototype-?node-id=551-8485&p=f&viewport=333%2C498%2C0.06&t=x6vMR0EqVHYonJtS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=551%3A8485&show-proto-sidebar=0&page-id=225%3A2"
          target="_blank"
          class="group mt-16"
        >
          <div class="flex items-center justify-between py-4 border-y">
            <span class="text-base">
              <p class="underline-offset-4 group-hover:underline">
                Explore the prototype
              </p>
              <p class="text-xs text-muted-foreground">No login required.</p>
            </span>
            <Icon
              icon="lucide:arrow-up-right"
              width="24"
              height="24"
              class="text-muted-foreground group-hover:text-foreground"
            />
          </div>
        </a>
      </div>
    </header>
    <div class="blog-article mt-16">
      <h2>Observation</h2>
      <p>
        Besides the obvious, the 2012-ish design and lots of one-star reviews in
        the app stores, I noticed that users seem to have lost trust in
        Cologne’s official public transport app. Reviews mention inaccurate
        data, complicated and unreliable ticket purchases, and unstable features
        in general.
      </p>

      <h2>Research</h2>
      <p>
        Interviews with commuters and a survey about travel habits revealed that
        users rely on apps they believe are accurate. But only a few use the
        official app, and even then, they double-check with Google Maps.
      </p>
      <p>
        The interesting part was that users weren't necessarily getting
        different information elsewhere. I wanted to understand what made Google
        Maps feel more dependable, so I put the two interfaces next to each
        other. The difference wasn't just that Google Maps looked more modern.
        It was much easier to see what actually mattered when choosing a route.
        Could presentation influence how trustworthy the information feels?
      </p>

      <h2>Design decision</h2>
      <p>
        Comparing routes requires users to answer a few basic questions: When
        does it leave? How long does it take? Where do I have to change?
      </p>
      <p>
        I therefore prioritised departure, duration and transfers and pushed
        secondary information back. I noticed that transfers were particularly
        difficult to parse, so I tried connecting the details of each line
        visually. I also added the option to purchase the appropriate ticket
        directly from the selected route.
      </p>

      <ImageWithFallback
        class="mx-auto max-w-64 my-6"
        :src="routeDetails"
        alt="A mockup of the redesigned public transport app, showing the extended bottom sheet with route details of a selected route."
      />

      <h2>Prototyping</h2>
      <p>
        I started with low-fi wireframes, but quickly realised I didn't need to
        spend much time inventing a visual language for this concept. I switched
        to the Material Design Kit for Figma so I could spend that time on the
        information hierarchy and interactions instead.
      </p>

      <ImageWithFallback
        class="mx-auto max-w-64 my-6"
        :src="routeList"
        alt="A mockup of the redesigned public transport app, showing the extended bottom sheet with a list of possible routes."
      />

      <h2>Testing</h2>
      <p>
        I tested my prototype using a think-aloud test, asking participants to
        plan a route to a dentist appointment. I chose this scenario because
        it's familiar, time-sensitive and slightly stressful.
      </p>
      <p>
        Participants easily navigated through each step, compared routes,
        understood route details and purchased a ticket. One participant
        described the experience afterwards as: “It felt like something I would
        trust.”
      </p>

      <div>
        <a
          href="https://www.figma.com/proto/xvhkr0dvPQf5HpMKwczw9C/Public-Transport-App--Prototype-?node-id=551-8485&p=f&viewport=333%2C498%2C0.06&t=x6vMR0EqVHYonJtS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=551%3A8485&show-proto-sidebar=0&page-id=225%3A2"
          target="_blank"
          class="group mt-16"
        >
          <div class="flex items-center justify-between py-4 border-y">
            <span class="text-base">
              <p class="underline-offset-4 group-hover:underline">
                Try the prototype yourself
              </p>
              <p class="text-xs text-muted-foreground">No login required.</p>
            </span>
            <Icon
              icon="lucide:arrow-up-right"
              width="24"
              height="24"
              class="text-muted-foreground group-hover:text-foreground"
            />
          </div>
        </a>
      </div>

      <h2>Takeaways</h2>
      <p>
        I can't say that the redesign actually increased trust in real-world
        journeys, because the prototype used fictional data. What I did observe
        was that participants could understand and act on the information
        without hesitation. That made me more confident that the clearer
        information hierarchy was reducing the effort needed to make decisions.
        But real-world data would be essential to validate whether that also
        affects trust.
      </p>

      <h2>Business discussion</h2>
      <p>
        The research — and the fact that I had basically rebuilt Google Maps —
        made me question the value proposition of the app itself. If users
        already rely on Google Maps for journey planning, what is the role of
        the local app beyond providing the underlying data?
      </p>
      <p>
        Independence could be one argument for keeping a local app: it allows
        the operator to respond to local needs, integrate local services and
        control the experience end-to-end. But that also raises a prioritisation
        question: does the product need to compete with Google Maps
        feature-for-feature? I'd start with a smaller set of stable, high-value
        features such as journey planning and ticket purchase.
      </p>

      <h2>Next Steps</h2>
      <p>
        Before I think about next features, I'd first validate journey planning
        and ticket purchase with real users and real-time data. Then add
        departure boards and disruption handling. If these features perform as
        expected, then I would start thinking about multimodal travel,
        integrating ridesharing like bikes and scooters.
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCurrentProject } from "@/composables/useCurrentProject";
import ImageWithFallback from "@/components/ImageWithFallback.vue";
import onTheWay from "@/assets/images/on-the-way.png";
import routeDetails from "@/assets/images/route-details-with-ticket-full.png";
import routeList from "@/assets/images/route-list-full.png";
import { Icon } from "@iconify/vue";

const project = useCurrentProject();
</script>

<style>
.blog-article h2 {
  margin-top: 5rem;
}

.blog-article > * + * {
  margin-top: 1.5rem;
}

.blog-article :is(h2, h3) + * {
  margin-top: 0.75rem;
}
</style>
