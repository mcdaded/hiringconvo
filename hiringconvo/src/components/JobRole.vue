<template>
  <div class="q-pa-md">
    <transition
      appear
      enter-active-class="animated slideInRight custom-animation-duration"
      leave-active-class="animated slideOutLeft"
      mode="out-in"
      :style="cardAnimationDuration"
    >
      <q-card class="job-role">
        <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
        <q-card-section>
          <div class="text-h6">John Doe Candidate</div>
          <div class="text-subtitle2">Marketing Analyst</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ this.title }}
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat :to="'/jobcandidates'">Applicants</q-btn>
        </q-card-actions>
      </q-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: "JobRole",
  props: {
    title: {
      required: true
    },
    route: {
      required: true
    },
    loadDuration: {
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    cardAnimationDuration() {
      return {
        "--duration": this.loadDuration
      };
    }
  }
};
</script>

<style scoped>
.job-role {
  width: 100%;
  max-width: 250px;
}
.custom-animation-duration {
  animation-duration: 1s;
}
</style>
