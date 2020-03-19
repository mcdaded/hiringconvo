<template>
  <div class="q-pa-md">
    <transition
      appear
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <slot></slot>
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
  name: "ComponentAnimator",
  props: {
    animationName: {
      type: String,
      required: false,
      default: "bounceIn"
      // Possible values bounceIn, fadeInRight, fadeInUp.. more on animate.css
    },
    animationDuration: {
      required: false,
      default: 0.4,
      type: Number
    },
    animationDelay: {
      required: false,
      default: 0.1,
      type: Number
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
      el.style.animationName = this.animationName;
      el.style.animationDuration = this.animationDuration + "s";
      el.style.animationDelay = this.animationDelay + "s";
    },
    leave(el, done) {
      addEventListener(el, done);
      el.style.animationName = this.animationName;
      el.style.animationDuration = this.animationDuration + "1.5s";
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
