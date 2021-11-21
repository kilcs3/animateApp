<template>
  <v-app>
    <v-app-bar
        color="green"
        app
        height="100px"
    >
      <v-img
          alt="Reha logo"
          src="@/assets/images/logo_min.png"
          class="logo"
          max-height="70px"
          max-width="70px"
      ></v-img>
      <v-spacer/>
      <v-toolbar-title class="flex text-left">{{ shared.title }}</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import store from '@/store';

  export default {
    name: 'App',
    data: function() {
      return {
        shared: store.state
      }
    }
  };
</script>

<style scoped>
  @import 'assets/css/style.css';
</style>