<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col-12">
      <h4>Candidates</h4>
    </div>
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
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
