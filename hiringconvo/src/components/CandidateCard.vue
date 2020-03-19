<template>
  <div>
    <q-card class="my-card">
      <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
      <q-card-section>
        <div class="text-h6">John Doe Candidate</div>
        <div class="text-subtitle2">Marketing Analyst</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "CandidateCard",
  data() {
    return {
      lorem: "No data"
    };
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
</style>
