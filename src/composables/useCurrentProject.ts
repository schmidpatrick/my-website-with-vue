import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import { computed } from "vue";

export function useCurrentProject() {
  const route = useRoute();
  const project = computed(() => projects.find((p) => p.path === route.path));

  return project;
}
