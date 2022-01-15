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
            :src="getImgUrl('Tut_4uebung_ende.jpg')"
            class="lighten-2"
            height="350"
            width="auto"
            contain
        />


      </v-row>
      <p class="text">
        Nach Beendigung von Beobachten und Vorstellen können Sie zurück zur Übungsauswahl gelangen.
      </p>
    </div>
    <v-spacer></v-spacer>

    <div>
      <v-row align-content="space-between">
        <v-btn class="buttonProceed" v-on:click="navigate" color="green">
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
        this.$router.push("/Home")
    }
  }
}
</script>
