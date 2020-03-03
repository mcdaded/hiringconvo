<template>
  <div class="q-pa-sm q-gutter-sm">
    <div class="column items-center">
      <div class="col">
        <h4>Follow Ups</h4>
      </div>
      <div class="col q-pa-sm">
        <transition
          appear
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutLeft"
          mode="out-in"
        >
          <FollowUpCard />
        </transition>
      </div>
      <div class="col q-pa-sm">
        <transition
          appear
          enter-active-class="animated slideInRight my-slow"
          leave-active-class="animated slideOutLeft"
          mode="out-in"
        >
          <FollowUpCard />
        </transition>
      </div>
      <div class="col q-pa-sm">
        <transition
          appear
          enter-active-class="animated slideInRight my-slow-2"
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
  animation-duration: 1.3s;
}
.my-slow-2 {
  animation-duration: 1.6s;
}
</style>
