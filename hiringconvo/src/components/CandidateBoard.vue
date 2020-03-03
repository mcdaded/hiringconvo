<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col-12">
      <h4>Candidates</h4>
    </div>
    <transition-group
      appear
      duration="20s"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      mode="out-in"
    >
      <CandidateCard :key="1" />
      <CandidateCard :key="2" />
      <CandidateCard :key="3" />
    </transition-group>
  </div>
</template>

<script>
import CandidateCard from "components/CandidateCard.vue";

export default {
  name: "CandidateBoard",
  data() {
    return {};
  },
  components: {
    CandidateCard
  }
};
</script>
