<template>
  <v-app>
    <v-app-bar
        color="green"
        app
        height="50px"
    >
      <v-img
          alt="App logo"
          src="@/assets/images/logo_min.png"
          class="logo"
          max-height="35px"
          max-width="35px"
      ></v-img>
      <v-spacer/>
      <v-toolbar-title class="flex text-left">{{ shared.title }}</v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon
          color="white"
          @click="drawer = true"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="toHome">
            <v-list-item-icon>
              <v-icon>
                mdi-home
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Übungsauswahl</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toTutorial">
            <v-list-item-icon>
              <v-icon>
                mdi-book-open-variant
                <!-- other icons that maybe fit better:
                  mdi-lightbulb-on-outline
                  mdi-lightbulb-outline
                  mdi-google-keep
                /-->
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Funktionalität der App</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toEducation">
            <v-list-item-icon>
              <v-icon>mdi-presentation</v-icon>
              <!-- other icons that maybe fit better:
                mdi-theater
                mdi-information-outline
                mdi-information-variant
                mdi-school
              /-->
            </v-list-item-icon>
            <v-list-item-title>Mentales Training</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
        drawer: false,
        shared: store.state
      }
    },
    methods: {
      toHome: function(){
        this.$router.push("/Home");
      },
      toTutorial: function(){
        this.$router.push("/tutorial");
      }
      ,
      toEducation: function(){
        this.$router.push("/");
      }
    },
  };
</script>

<style scoped>
  @import 'assets/css/style.css';
</style>