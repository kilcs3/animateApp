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
        <exercise-image :imgSource="exercise.imageFinished" :aspectRatio="1.5"></exercise-image>
        <p class="description">Sie haben die &Uuml;bung erfolgreich beendet!</p>
        <fieldset class="bewertung">
          <legend><b>Bewerten Sie Ihr visuelles Vorstellungsvermögen</b></legend>

          <div align="left" style="margin-top:15px">
            <input type="radio" id="option1" name="Vorstellungsvermögen" value="1">
            <label for="option1" style="margin-left: 10px">kein Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option2" name="Vorstellungsvermögen" value="2">
            <label for="option2" style="margin-left: 10px">verschwommenes Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option3" name="Vorstellungsvermögen" value="3">
            <label for="option3" style="margin-left: 10px">einigermassen klares Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option4" name="Vorstellungsvermögen" value="4">
            <label for="option4" style="margin-left: 10px">Bild fast so klar wie beim Sehen</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option5" name="Vorstellungsvermögen" value="5">
            <label for="option5" style="margin-left: 10px">Bild so klar wie beim Sehen</label>
          </div>
        </fieldset>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <v-btn
            width="100%"
            x-large
            @click="back"
        >
          <v-icon>mdi-arrow-left-bold</v-icon>
          <div class="margin text-transform-none">Übungsauswahl</div>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseImage from "@/components/ExerciseImage";

  export default {
    name: "ExerciseFinished",
    data: function(){
      return {
        shared: store.state
      }
    },
    methods: {
      back: function(){
        this.$router.push("/Home");
      }
    },
    components: {
      'exercise-image': ExerciseImage
    },
    created: function() {
      this.shared.title = "Übung beendet";
      let exercise = store.getters.exercise(this.$route.params.id);
      if (!exercise) {
        this.$router.push("/Home");
        return;
      }
      this.exercise = exercise;
    }
  }
</script>

<style scoped>
  .bewertung{
    border: none;
  }
</style>