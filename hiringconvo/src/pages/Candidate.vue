<template>
  <q-page padding>
    <q-btn color="secondary" icon="mail" label="Email" @click="show = !show" />
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      appear-active-class="fade-enter-active"
      @before-appear="beforeAppear"
      @appear="appear"
      @after-appear="afterAppear"
    >
      <!-- Wrapping only one DOM element, defined by QBtn -->
      <p v-if="show">hello</p>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: "Candidate",
  data() {
    return {
      show: true
    };
  }
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
