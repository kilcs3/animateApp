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
                :src="getImgUrl('Tut_1homeBildschirm.jpg')"
                class="lighten-2"
                height="360"
                width="auto"
                contain
            />


          </v-row>
          <p class="text">
            Das ist die Übungsauswahl. <br>
            Dort können Sie eine Übung auswählen, indem Sie auf ein Bild klicken.
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
  margin-top: 20px;
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
        this.$router.push("/Tutorial2")
    },
    goToHome:function (){
      this.$router.push("/Home")
    },
    // the tutorial plays automatically on pageload
    playInstruction:function (){
      this.audio = new Audio(require('@/assets/sounds/Tutorial1.mp3'));
      this.audio.play();
    },
    stopAudio:function (){
      this.audio.pause();
    }
  }
}
</script>
