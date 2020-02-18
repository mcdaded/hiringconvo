<template>
  <div>
    <transition appear name="slide-fade">
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
    </transition>
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
  max-width: 250px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
