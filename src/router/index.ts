import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
// import LegalNoticePage from "../pages/LegalNoticePage.vue";
// import PrivacyPage from "../pages/PrivacyPage.vue";

const routes = [
  { path: "/", component: HomePage },
  // { path: "/project/:projectId", component: ProjectDetailPage },
  // { path: "/legal-notice", component: LegalNoticePage },
  // { path: "/privacy", component: PrivacyPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
