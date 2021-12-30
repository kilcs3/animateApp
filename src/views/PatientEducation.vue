<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <p class="description" id="descrEdu">Worum es geht <br>
          in dieser App</p>
        <p class="description" id="descrTut">Wie die App funktioniert</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<style scoped>
.description {
  margin-top: 25%;
}
#descrTut {  /** the initial opacity of 0.0. The 'transition' feature defines how quickly the overlaying "title screen" vanishes.**/
  opacity: 1;
  transition: opacity 1s;
}
</style>

<script>
const descrTut = document.getElementById("descrTut");
import store from '@/store';
export default {
  name: "patientEducation",
  data: function(){
    return {
      shared: store.state,
      interval: ""
    }
  },
  created: function () {
    this.shared.title = "Motorisches Training";

    /** After 1s, the second paragraph, descrTut, fades in.**/
    setTimeout(function() {
      descrTut.style.opacity = 1;
    }, 1000);

    /** After 3s, move to the next screen.**/
    setTimeout(function() {
      this.$router.push("/PatientEducation2");
    }, 3000);

  },
  beforeDestroy() {
    clearTimeout(this.interval);
  }
}
</script>

