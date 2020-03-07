<template>
  <div class="q-pa-md">
    <transition appear @beforeEnter="beforeEnter" @enter="enter" @leave="leave">
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
function addEventListener(el, done) {
  el.addEventListener("animationend", function() {
    el.style = "";
    done();
  });
}

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
  methods: {
    beforeEnter(el, done) {
      addEventListener(el, done);
      el.style.opacity = 0;
    },
    enter(el, done) {
      addEventListener(el, done);
      el.style.animationName = "fadeInRight";
      el.style.animationDuration = this.loadDuration + "s";
      el.style.animationDelay = this.loadDuration + "s";
    },
    leave(el, done) {
      addEventListener(el, done);
      el.style.animationName = "fadeInRight";
      el.style.animationDuration = this.loadDuration + "1.5s";
      el.style.animationDirection = "reverse";
    }
    // afterEnter(el) {
    //   console.log("after enter");
    // },
    // enterCancelled(el) {
    //   console.log("enter cancelled");
    // },
    // beforeLeave(el) {
    //   console.log("before leave");
    // },
    // afterLeave(el) {
    //   console.log("after leave");
    // },
    // leaveCancelled(el) {
    //   console.log("leave cancelled");
    // }
  }
};
</script>

<style scoped>
.job-role {
  width: 100%;
  max-width: 250px;
}
</style>
