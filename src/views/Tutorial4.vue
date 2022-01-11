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
            :src="getImgUrl('uebung_ende.jpg')"
            class="lighten-2"
            height="400"
            width="auto"
            contain
        />


      </v-row>
      <p class="text">
        Hier können Sie wieder zurück in die Übungsauswahl gelangen.
      </p>
    </div>
    <v-spacer></v-spacer>

    <div>
      <v-row align-content="space-between">
        <v-btn class="button" v-on:click="navigate">
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
  name: "Tutorial",
  data: function () {
    return {
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "Tutorial";},
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    navigate:function (){
        this.$router.push("/Home")
    },
    goToHome:function (){
      this.$router.push("/Home")
    }
  }
}
</script>
