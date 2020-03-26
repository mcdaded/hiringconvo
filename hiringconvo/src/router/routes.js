const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Dashboard.vue") },
      {
        path: "/jobcandidates",
        component: () => import("pages/CandidateDashboard.vue")
      },
      { path: "/chat", component: () => import("pages/Chat.vue") },
      { path: "/candidate", component: () => import("pages/Candidate.vue") },
      { path: "/test", component: () => import("pages/Index.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
