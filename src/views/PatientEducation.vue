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
        <v-btn to="/PatientEducation2"></v-btn>
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
  opacity: 0;
  transition: opacity 1s;
}
</style>

<script>
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
    this.shared.title = "Wissen";

    this.interval = setTimeout(
        function () {
          document.getElementById("descrTut").style.opacity = 1;
          console.log("done");
        },
        2000
    );
    this.interval = setTimeout(
        function () {
          this.$router.push({path: '/PatientEducation2'});
        }.bind(this),
        5000
    );

  },
  beforeDestroy() {
    clearTimeout(this.interval);
  },
}
</script>

