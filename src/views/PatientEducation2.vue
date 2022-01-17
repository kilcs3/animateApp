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
        <h3>Worum es in dieser App geht</h3>
        <div v-if="counter>0">
          <!--
           Image for Patient Education
               If you click on the button the counter will be set to 1
               /-->
          <v-row>
            <v-img
                :src="getImgUrl('PatEd2.png')"
                class="lighten-2"
                height="300"
                width="auto"
                contain
            />


          </v-row>
          <p class="text3">
            Die Idee: wie mentales Trainieren z.B. im Sport
          </p>
        </div>

        <div>
          <v-row align-content="space-between">
            <v-btn class="buttonProceed" v-on:click="count" id="btnProceed" color="green">
              Weiter
            </v-btn>
          </v-row>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div>
      <v-row>
        <v-btn class="buttonSkip" v-on:click="goToHome" x-small>
          Direkt zur <br> Übungsauswahl
        </v-btn>
      </v-row>
    </div>

  </div>

</template>

<style scoped>
.text3 {
  margin-top: 35px;
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
  margin-bottom: 25px;
}

</style>

<script>

import store from '@/store';
export default {
  name: "patientEducation2",
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
      if (this.counter===1){
        document.getElementById("btnProceed").innerText ="Handbuch"
      }
      else if (this.counter===2){
        this.$router.push("/tutorial1")
      }
    },
    goToHome:function (){
      this.$router.push("/Home")
    }
  }
}
</script>