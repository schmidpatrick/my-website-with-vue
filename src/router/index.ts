import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import MobilityAppPage from "@/pages/projects/MobilityAppPage.vue";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/projects/mobility-app", component: MobilityAppPage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/:pathMatch(.*)*", component: HomePage }, // TODO: add not found page
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
