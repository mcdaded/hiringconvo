<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-avatar>
          <img alt="HireConvo logo" src="~assets/hireconvochat-nobg.png" />
        </q-avatar>
        <q-toolbar-title>
          <a href="/">HireConvo</a>
        </q-toolbar-title>
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab name="dashboard" label="Dashboard" to="/" />
          <q-route-tab name="positions" label="Positions" to="/test" />
          <q-route-tab name="chat" label="Chat" to="/chat" />
          <q-route-tab name="analytics" label="Analytics" to="/test" />
        </q-tabs>
        <q-btn-dropdown
          auto-close
          stretch
          flat
          icon="account_circle"
          label="Account"
        >
          <q-list>
            <q-item clickable @click="tab = 'dashboard'">
              <q-item-section>Overview</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'chat'">
              <q-item-section>Settings</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      tab: ""
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(250, 250, 250);
}
</style>
