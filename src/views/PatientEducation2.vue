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
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div v-if="counter>0">

      <v-row>
        <v-img
            :src="getImgUrl('PatEd2.png')"
            class="lighten-2"
            height="250"
            width="auto"
            contain
        />


      </v-row>
      <p class="text3">
        Die Idee wie mentales Training im Sport
      </p>
    </div>

    <div>
      <v-row align-content="space-between">
        <v-btn class="buttonProceed" v-on:click="count" id="btnProceed">
          Weiter
        </v-btn>
        <v-btn class="buttonSkip" v-on:click="goToHome" x-small>
          Eine Übung starten
        </v-btn>
      </v-row>
    </div>

  </div>

</template>

<style scoped>
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
    this.shared.title = "Wissen: Mentales Trainieren";},
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    count:function (){
      this.counter++
      if (this.counter===1){
        document.getElementById("btnProceed").innerText ="Zum Handbuch"
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