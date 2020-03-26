<template>
  <q-page padding>
    <q-btn color="secondary" icon="mail" label="Email" @click="show = !show" />
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated zoomOut"
      appear-active-class="animated fadeIn"
      animation-duration="20000"
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
