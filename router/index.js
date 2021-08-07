import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Your routes here
];

// Add this to your hooks.py file
// website_route_rules = [
// {"from_route": "/dashboard/<path:app_path>", "to_route": "dashboard"},
// ]
const router = createRouter({
  base: "/dashboard/",
  history: createWebHistory(),
  routes,
});

export default router;
