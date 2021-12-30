<template>

  <div class="container">
    <div v-if="isImageVisible">
      <v-img
          :src="getImgUrl('walk.jpg')"
          :aspect-ratio="1.5"
          class="grey lighten-2"
      >
      </v-img>
    </div>

    <p class="description">Hier ist das Tutorial.</p>
    <button v-on:click="count">
      click
    </button>
    <v-btn v-on:click="goToHome">
      goToHomeScreen
    </v-btn>
    <v-btn v-on:click="showImage">
      Bild
    </v-btn>
    <p>
      {{counter}}
    </p>
    <p v-if="counter===0">
      ersterText
    </p>
    <p v-if="counter===1">
      zweiterText
    </p>
    <p v-else>
      dritterText
    </p>
  </div>

</template>

<script>
import store from '@/store';
export default {
  name: "tutorial",
  data: function(){
    return {
      shared: store.state,
      counter:0,
      isImageVisible:false,
    }
  },
  methods:{
    count:function (event){
      this.counter++
      console.log(event)
    },
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic)
    },
    goToHome:function (){
      console.log(this.$router)
      this.$router.push("/home")
    },
    showImage:function (){
      this.isImageVisible=!this.isImageVisible
    },
  },
  created: function () {
    this.shared.title = "Wie funktioniert die App?";
  }
}
</script>

<style scoped>

.container{
  background-color:#E8F1D5;
  width: 100%;
  height: 100%;
}

</style>