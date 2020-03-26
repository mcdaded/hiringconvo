<template>
  <q-page padding>
    <h4>Open Roles</h4>
    <div class="q-pa-xs">
      <div class="row">
        <div v-for="job in jobs" class="col-3" :key="job.index">
          <ComponentAnimator
            animationName="fadeInRight"
            :animationDuration="job.animationDuration"
            :animationDelay="job.animationDelay"
          >
            <JobRole :title="job.title" :route="job.route" />
          </ComponentAnimator>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import JobRole from "components/JobRole.vue";
import ComponentAnimator from "components/ComponentAnimator.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      jobs: [
        {
          title: "Systems Analyst",
          index: 1,
          animationDuration: 0.75,
          animationDelay: 0.25,
          route: ""
        },
        {
          title: "Systems Analyst",
          index: 2,
          animationDuration: 0.75,
          animationDelay: 0.5,
          route: ""
        },
        {
          title: "Operations Intern",
          index: 3,
          animationDuration: 0.75,
          animationDelay: 0.75,
          route: ""
        },
        {
          title: "Marketing Team Member",
          index: 4,
          animationDuration: 0.75,
          animationDelay: 1,
          route: ""
        },
        {
          title: "Sales Associate",
          index: 5,
          animationDuration: 0.75,
          animationDelay: 1,
          route: ""
        }
      ]
    };
  },
  components: {
    JobRole,
    ComponentAnimator
  }
};
</script>
