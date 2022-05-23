<template>
  <div class="margin container">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <div>

          <v-row>
            <v-img
                :src="getImgUrl('Tut_4uebung_ende.jpg')"
                class="lighten-2"
                height="320"
                width="auto"
                contain
            />


          </v-row>
          <p class="text">
            Nach Beendigung von Beobachten und Vorstellen können Sie zurück zur Übungsauswahl gelangen.
          </p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-spacer></v-spacer>

    <div>
      <v-row align-content="space-between">
        <v-btn class="buttonProceed" v-on:click="navigate(); stopAudio()" color="green">
          Zur Übungsauswahl
        </v-btn>
      </v-row>
    </div>

  </div>

</template>

<style scoped>
.text {
  margin-top: 35px;
  margin-bottom: 50px;
}
.container{
  height: 87vh;
  position: relative;
}
.buttonProceed{
  position: absolute;
  right: 30px;
  bottom: 0;
}

</style>

<script>

import store from '@/store';
export default {
  name: "Tutorial",
  data: function () {
    return {
      audio:"",
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "App-Handbuch";
    this.playInstruction()},
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    navigate:function (){
        this.$router.push("/Home")
    },
    // the tutorial plays automatically on pageload
    playInstruction:function (){
      this.audio = new Audio(require('@/assets/sounds/Tutorial4.mp3'));
      this.audio.play();
    },
    stopAudio:function (){
      this.audio.pause();
    }
  }
}
</script>
