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
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div>

      <v-row>
        <v-img
            :src="getImgUrl('Tut_3vorstellung_uebung.jpg')"
            class="lighten-2"
            height="400"
            width="auto"
            contain
        />


      </v-row>
      <p class="text">
        Versuchen Sie sich vorzustellen, sie würden die Bewegung machen. <br>
        Dafür können Sie gerne die Augen schliessen. Nach Ablauf der Übung ertönt ein Signal.
      </p>
    </div>
    <v-spacer></v-spacer>

    <div>
      <v-row align-content="space-between">
        <v-btn class="buttonProceed" v-on:click="navigate" color="green">
          Weiter
        </v-btn>
        <v-btn class="buttonSkip" v-on:click="goToHome" x-small>
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
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "App-Handbuch";},
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    navigate:function (){
        this.$router.push("/Tutorial4")
    },
    goToHome:function (){
      this.$router.push("/Home")
    }
  }
}
</script>
