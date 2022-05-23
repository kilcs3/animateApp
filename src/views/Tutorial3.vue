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
                :src="getImgUrl('Tut_3vorstellung_uebung.jpg')"
                class="lighten-2"
                height="360"
                width="auto"
                contain
            />


          </v-row>
          <p class="text">
            Versuchen Sie sich vorzustellen, <i>Sie</i> würden die Bewegung machen.
          </p>
          <p class="textSmall">
              Sie können dafür die Augen schliessen. Nach Ablauf der Übung ertönt ein Signal.
          </p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-spacer></v-spacer>

    <div>
      <v-row align-content="space-between">
        <v-btn class="buttonProceed" v-on:click="navigate(); stopAudio()" color="green">
          Weiter
        </v-btn>
        <v-btn class="buttonSkip" v-on:click="goToHome(); stopAudio()" x-small>
          Direkt zur <br> Übungsauswahl
        </v-btn>
      </v-row>
    </div>

  </div>

</template>

<style scoped>
.text {
  margin-top: 30px;
  margin-bottom: 0.2em;
  font-size: 0.95em;
}
.textSmall {
  margin-top: 0.2em;
  margin-bottom: 50px;
  font-size: 0.8em;
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
.buttonSkip{
  position: absolute;
  left: 30px;
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
        this.$router.push("/Tutorial4")
    },
    goToHome:function (){
      this.$router.push("/Home")
    },
    // the tutorial plays automatically on pageload
    playInstruction:function (){
      this.audio = new Audio(require('@/assets/sounds/Tutorial3.mp3'));
      this.audio.play();
    },
    stopAudio:function (){
      this.audio.pause();
    }
  }
}
</script>
