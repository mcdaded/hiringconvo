<template>
  <q-page padding>
    <h4>Open Roles</h4>
    <div class="q-pa-sm">
      <div class="row">
        <div v-for="(job, index) in jobs" class="col-3" :key="index">
          <JobRole
            :title="job.title"
            :loadDuration="job.index"
            :route="job.route"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import JobRole from "components/JobRole.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      jobs: [
        {
          title: "Systems Analyst",
          index: 1,
          route: ""
        },
        {
          title: "Systems Analyst",
          index: 2,
          route: ""
        },
        {
          title: "Operations Intern",
          index: 3,
          route: ""
        },
        {
          title: "Marketing Team Member",
          index: 4,
          route: ""
        },
        {
          title: "Sales Associate",
          index: 5,
          route: ""
        }
      ]
    };
  },
  components: {
    JobRole
  },
  computed: {
    cardAnimationDuraion() {
      return {
        "animation-duration": "'5.3s'"
      };
    }
  }
};
</script>
