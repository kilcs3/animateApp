<template>
  <!-- more icons may be found at: https://pictogrammers.github.io/@mdi/font/2.0.46/ /-->
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
                <!-- other icons that maybe fit better:
                  mdi-map
                /-->
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Übungsauswahl</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toTutorial">
            <v-list-item-icon>
              <v-icon>
                mdi-library
                <!-- other icons that maybe fit better:
                  mdi-book-open-variant
                  mdi-lightbulb-on-outline
                  mdi-lightbulb-outline
                  mdi-google-keep
                  mdi-comment-question-outline
                /-->
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>App-Handbuch</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toEducation">
            <v-list-item-icon>
              <v-icon>mdi-presentation</v-icon>
              <!-- other icons that maybe fit better:
                mdi-theater
                mdi-information-outline
                mdi-information-variant
                mdi-school
                mdi-contacts
                mdi-help-circle-outline
                mdi-sign-text
              /-->
            </v-list-item-icon>
            <v-list-item-title>Übungstechnik</v-list-item-title>
          </v-list-item>
          <v-list-item @click="toKVIQ">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>KVIQ Fragebogen</v-list-item-title>
          </v-list-item>
          <!-- Icons für mögliche weitere Menü-Punkte:
              Statistik: mdi-chart-line /-->
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
        this.$router.push("/tutorial1");
      },
      toEducation: function(){
        this.$router.push("/");
      },
      toKVIQ: function(){
        this.$router.push("/questionnaireKVIQ");
      }
    },
  };
</script>

<style scoped>
  @import 'assets/css/style.css';
</style>