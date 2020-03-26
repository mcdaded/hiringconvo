<template>
  <div>
    <q-card class="my-card">
      <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
      <q-card-section>
        <div class="text-h6">Work To Do</div>
        <div class="text-subtitle2">Work To Do</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "FollowUpsCard",
  data() {
    return {};
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 450px;
}
</style>
