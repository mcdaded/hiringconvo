<template>
  <div class="q-pa-sm q-gutter-sm">
    <div class="column items-center">
      <div class="col">
        <h4>Follow Ups</h4>
      </div>
      <div class="col">
        <transition
          appear
          enter-active-class="animated slideInRight slow"
          leave-active-class="animated slideOutLeft"
          mode="out-in"
        >
          <FollowUpCard />
        </transition>
      </div>
      <div class="col q-pa-md">
        <transition
          appear
          enter-active-class="animated slideInRight my-slow"
          leave-active-class="animated slideOutLeft"
          mode="out-in"
        >
          <FollowUpCard />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import FollowUpCard from "components/FollowUpCard.vue";

export default {
  name: "FollowUps",
  data() {
    return {};
  },
  components: {
    FollowUpCard
  }
};
</script>

<style scoped>
.my-slow {
  animation-duration: 1s;
}
</style>
