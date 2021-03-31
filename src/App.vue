<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WelcomeToAnimateApp msg="beobachten. vorstellen. besser werden."/>
  </div>
</template>

<script>
import WelcomeToAnimateApp from './components/00_landingPage.vue'

export default {
  name: 'App',
  components: {
    WelcomeToAnimateApp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4e4e4e;
  margin-top: 60px;
}
</style>
