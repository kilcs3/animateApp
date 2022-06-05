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
      <exercise-image :imgSource="kExercise.image" :aspectRatio="1.23"></exercise-image>
      <p class="description"><b>Bitte führen Sie Punkt 1 bis 4 aus:</b></p>
      <v-btn><v-icon>mdi-volume-high</v-icon></v-btn>
      <p class="description" align="left" style="white-space: pre-line;">{{kExercise.description}}</p>
      
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    
    <div class="clearer"></div>
    <nav-buttons
        :backLink="'/kinestheticKVIQ/'"
        :backText="'Zurück zur Auswahl'"
        :nextLink="'/evalKVIQK/' + kExercise.id"
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
    name: "exerciseKVIQK",
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
    
        let kExercise = store.getters.kExercise(this.$route.params.id);
        if (!kExercise) {
            this.$router.push("/questionnaireKVIQ4");
            return;
        }
    this.kExercise = kExercise;
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