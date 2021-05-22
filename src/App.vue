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
          max-height="80px"
          max-width="80px"
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: function() {
      return {
        title: "Übung auswählen"
      }
    }/*,
    methods: {
      getImgUrl(pic) {
        return require('@/assets/images/'+pic);
      },
      getVideoUrl(vid){
        return require('@/assets/videos/'+vid);
      }
    }*/
  };
</script>

<style scoped>
  @import 'assets/css/style.css';
</style>