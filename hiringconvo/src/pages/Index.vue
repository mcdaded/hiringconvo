<template>
  <q-page class="flex flex-center">
    <transition appear name="slide-fade">
      <!-- <img alt="HireConvo logo" src="~assets/hireconvologo.png" /> -->
      <iframe
        src="https://www.videoask.com/fy3mlf2rh"
        allow="camera; microphone; autoplay; encrypted-media;"
        width="100%"
        height="600px"
        style="border: none; border-radius: 24px"
      >
      </iframe>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>

<style scoped>
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
