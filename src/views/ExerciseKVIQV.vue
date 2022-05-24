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
      <exercise-image :imgSource="vExercise.image" :aspectRatio="1.23"></exercise-image>
      <p class="description"><b>Bitte führen Sie Punkt 1 bis 4 aus:</b></p>
      <p class="description" align="left" style="white-space: pre-line;">{{vExercise.description}}</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    
    <div class="clearer"></div>
    <nav-buttons
        :backLink="'/visualKVIQ/'"
        :backText="'Zurück zur Auswahl'"
        :nextLink="'/evalKVIQV/' + vExercise.id"
        :nextText="'Zur Bewertung'"
        class="margin"
    ></nav-buttons>
  </div>
</template>

<script>
  import store from '@/store';
  import NavigationButtons from "@/components/NavigationButtons";
  import ExerciseImage from "@/components/ExerciseImage";
  export default {
    name: "exerciseKVIQV",
    data: function(){
      return {
        shared: store.state2,
      }
    },
    components: {
      'nav-buttons': NavigationButtons,
      'exercise-image': ExerciseImage,
    },
    created: function() {
        this.shared.title = "Vorstellen";
    
        let vExercise = store.getters.vExercise(this.$route.params.id);
        if (!vExercise) {
            this.$router.push("/questionnaireKVIQ4");
            return;
        }
    this.vExercise = vExercise;
    }
  }
</script>

<style scoped>
.text{
  margin-top: 20px;
  margin-bottom: 50px;
  align-content: center;
}
</style>