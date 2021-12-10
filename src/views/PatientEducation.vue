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
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    <v-row>
      <v-btn to="/PatientEducation2">Zurück</v-btn>
      <v-btn to="/PatientEducation2">Pause</v-btn>
      <v-btn to="/PatientEducation2">Weiter</v-btn>
    </v-row>
    <div id="skipforward">
      <v-chip
          close
          close-icon="mdi-skip-forward"
          color="orange"
          to="/PatientEducation2"
          link
          outlined
      >weiter</v-chip>
    </div>
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
#skipforward {  /** the position (x,y,z) and size (heigth, with), as well as an initial opacity of 0.0, and the alignement of text
    are defined. The 'transition' feature defines how quickly the overlaying "title screen" vanishes.**/
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>

<script>
import store from '@/store';
export default {
  name: "patientEducation",
  data: function(){
    return {
      shared: store.state,
      interval: "",
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
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

