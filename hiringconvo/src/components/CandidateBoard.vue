<template>
  <div class="q-pa-xs row items-start q-gutter-xs">
    <div class="col-12">
      <h4>Candidates</h4>
    </div>
    <div v-for="candidate in candidates" :key="candidate.index">
      <ComponentAnimator
        animationName="fadeInLeft"
        :animationDuration="candidate.animationDuration"
        :animationDelay="candidate.animationDelay"
      >
        <CandidateCard :key="1" />
      </ComponentAnimator>
    </div>
  </div>
</template>

<script>
import CandidateCard from "components/CandidateCard.vue";
import ComponentAnimator from "components/ComponentAnimator.vue";

export default {
  name: "CandidateBoard",
  data() {
    return {
      candidates: [
        {
          index: 1,
          name: "John Smith",
          yearsExperiences: 3,
          rating: 78,
          animationDuration: 0.5,
          animationDelay: 0.1
        },
        {
          index: 2,
          name: "John Smith",
          yearsExperiences: 3,
          rating: 78,
          animationDuration: 0.5,
          animationDelay: 0.5
        },
        {
          index: 3,
          name: "John Smith",
          yearsExperiences: 3,
          rating: 78,
          animationDuration: 0.5,
          animationDelay: 0.75
        },
        {
          index: 4,
          name: "John Smith",
          yearsExperiences: 3,
          rating: 78,
          animationDuration: 0.5,
          animationDelay: 0.8
        },
        {
          index: 5,
          name: "John Smith",
          yearsExperiences: 3,
          rating: 78,
          animationDuration: 0.5,
          animationDelay: 0.9
        }
      ]
    };
  },
  components: {
    CandidateCard,
    ComponentAnimator
  }
};
</script>
