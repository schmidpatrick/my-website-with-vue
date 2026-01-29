import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ExampleProjectPage from "@/pages/projects/ExampleProjectPage.vue";
import MobilityAppPage from "@/pages/projects/MobilityAppPage.vue";
// import LegalNoticePage from "../pages/LegalNoticePage.vue";
// import PrivacyPage from "../pages/PrivacyPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/projects/mobility-app", component: MobilityAppPage },
  { path: "/projects/example", component: ExampleProjectPage },
  // { path: "/legal-notice", component: LegalNoticePage },
  // { path: "/privacy", component: PrivacyPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If browser saved scroll position (back/forward)
    if (savedPosition) return savedPosition;

    // If navigating to an anchor (e.g., #projects)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 0,
      };
    }

    // Default: scroll to top of page
    return { top: 0 };
  },
});
