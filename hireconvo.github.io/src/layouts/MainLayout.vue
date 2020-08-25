<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-avatar>
          <img alt="HireConvo logo" src="~assets/hireconvochat-nobg.png" />
        </q-avatar> -->
        <q-toolbar-title>
          <a href="/">HireConvo</a>
        </q-toolbar-title>
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab name="about" label="About" to="/" />
          <q-route-tab name="product" label="Product" to="/" />
          <q-route-tab name="team" label="Team" to="/" />
          <q-route-tab name="learnmore" label="Learn More" to="/" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(250, 250, 250);
}
</style>
