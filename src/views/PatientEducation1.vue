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
        <div v-if="counter>0">
          <!--
          Images for Patient Education
          If you click on the button the counter will be set to 1
          /-->
          <v-row>
            <v-img
                :src="getImgUrl('PatEd1_CartoonBeobachten.jpg')"
                class="lighten-2"
                height="90"
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

          <!--
          Images for Patient Education
          If you click on the button the counter will be set to 2
          /-->
          <v-row>
            <v-img
                :src="getImgUrl('PatEd_1CartoonVorstellen.jpg')"
                class="lighten-2"
                height="90"
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
          <!--
        Images for Patient Education
        If you click on the button the counter will be set to 3
        /-->
          <v-row>
            <v-img
                :src="getImgUrl('PatEd_1CartoonWalk.png')"
                class="lighten-2"
                height="90"
                width="auto"
                contain
            />


          </v-row>
          <p class="text3">
            3. Irgendwann: Fähigkeit selber wieder erlangen
          </p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div>
      <v-row align-content="space-between">
      <v-btn class="buttonProceed" v-on:click="count" color="green">
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
  margin-bottom: 35px;
}
.text3 {
  margin-top: 20px;
  margin-bottom: 20px;
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
h3{
  margin-bottom: 15px;
}


</style>

<script>

import store from '@/store';
export default {
  name: "patientEducation1",
  data: function () {
    return {
      counter:0,
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "Übungstechnik";},
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

