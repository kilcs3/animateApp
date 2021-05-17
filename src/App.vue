<template>
  <v-app>
    <v-app-bar
        color="green"
    >
      <v-img
          alt="Reha logo"
          src="assets/logo_text.png"
          max-height="100px"
          max-width="100px"
      ></v-img>
      <v-toolbar-title>&Uuml;bung ausw&auml;hlen</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style scoped>
  @import 'assets/css/style.css';
</style>