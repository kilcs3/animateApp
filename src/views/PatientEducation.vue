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
        <h3>Trainingstechniken erlernen</h3>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div v-if="counter>0">

      <v-row>
        <v-img
            :src="getImgUrl('Beobachten.jpg')"
            class="lighten-2"
            height="100"
            width="auto"
            contain
        />


      </v-row>
      <p class="text">
        1. Übung beobachten
      </p>
    </div>
    <v-spacer></v-spacer>
    <div v-if="counter>1">

      <v-row>
        <v-img
            :src="getImgUrl('Vorstellen.jpg')"
            class="lighten-2"
            height="100"
            width="auto"
            contain
        />


      </v-row>
      <p class="text">
        2. Übung sich vorstellen
      </p>
    </div>
    <v-spacer></v-spacer>
    <div v-if="counter>2">

      <v-row>
        <v-img
            :src="getImgUrl('walkPicto.png')"
            class="lighten-2"
            height="100"
            width="auto"
            contain
        />


      </v-row>
      <p class="text3">
        3. Irgendwann Fähigkeit selber wieder erlangen
      </p>
    </div>
    <div>
      <v-row align-content="space-between">
      <v-btn class="button" v-on:click="count">
        Weiter
      </v-btn>
        <v-btn class="button2" v-on:click="goToHome">
          Überspringen
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
.text3 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.container{
  height: 87vh;
  position: relative;
}
.button{
  position: absolute;
  right: 30px;
  bottom: 0;
}
.button2{
  position: absolute;
  left: 30px;
  bottom: 0;
}


</style>

<script>

import store from '@/store';
export default {
  name: "patientEducation",
  data: function () {
    return {
      counter:0,
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "Mentales Training";},
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    count:function (){
      this.counter++
      if (this.counter===4){
        this.$router.push("/PatientEducation2")
      }
    },
    goToHome:function (){
      this.$router.push("/Home")
    }
  }
}
</script>

