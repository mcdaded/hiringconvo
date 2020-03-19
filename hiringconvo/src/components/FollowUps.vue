<template>
  <div class="q-pa-sm">
    <div class="column">
      <div class="col-12">
        <h4 style="text-align: center;">Follow Ups</h4>
      </div>
      <div class="col-5" v-for="followUp in followUps" :key="followUp.index">
        <ComponentAnimator
          :animationDuration="followUp.animationDuration"
          :animationDelay="followUp.animationDelay"
          animationName="fadeInRight"
        >
          <FollowUpCard />
        </ComponentAnimator>
      </div>
    </div>
  </div>
</template>

<script>
import FollowUpCard from "components/FollowUpCard.vue";
import ComponentAnimator from "components/ComponentAnimator.vue";

export default {
  name: "FollowUps",
  data() {
    return {
      followUps: [
        {
          index: 1,
          summary: "Questions about Culture",
          requests: 54,
          animationDuration: 0.7,
          animationDelay: 0.1
        },
        {
          index: 2,
          summary: "Questions about tools for the job",
          requests: 15,
          animationDuration: 0.7,
          animationDelay: 0.5
        }
      ]
    };
  },
  components: {
    FollowUpCard,
    ComponentAnimator
  }
};
</script>
