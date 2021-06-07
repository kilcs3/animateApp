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
        <exercise-image :imgSource="exercise.imageMI"></exercise-image>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <nav-buttons
        :backLink="'/exerciseAO/' + exercise.id"
        :backText="'Zurück zum Beobachten'"
        :nextLink="'/exerciseFinished/'+exercise.id"
        :nextText="'Übung beenden'"
    ></nav-buttons>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseImage from "@/components/ExerciseImage";
  import NavigationButtons from "@/components/NavigationButtons";

  export default {
    name: "ExerciseMI",
    data: function(){
      return {
        shared: store.state
      }
    },
    components: {
      'exercise-image': ExerciseImage,
      'nav-buttons': NavigationButtons
    },
    created: function() {
      this.shared.title = "Übung sich vorstellen";
      let exercise = store.getters.exercise(this.$route.params.id);
      if (!exercise) {
        this.$router.push("/");
        return;
      }
      this.exercise = exercise;
    }
  }
</script>

<style scoped>

</style>