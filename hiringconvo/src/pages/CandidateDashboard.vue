<template>
  <q-page padding>
    <div class="q-pa-xs q-gutter-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Candidates" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-xs">
      <div class="row">
        <div class="col-9">
          <CandidateBoard />
        </div>
        <div class="col-3">
          <FollowUps />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CandidateBoard from "components/CandidateBoard.vue";
import FollowUps from "components/FollowUps.vue";

export default {
  name: "CandidateDashboard",
  components: {
    CandidateBoard,
    FollowUps
  }
};
</script>
