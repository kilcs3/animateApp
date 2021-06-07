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
        <exercise-video
            :videoSource="exercise.video"
            :imgSource="exercise.image"
            @videoEnded="onVideoEnded(exercise)">
        </exercise-video>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <nav-buttons
        :backLink="'/'"
        :backText="'Zurück zur Übersicht'"
        :nextLink="'/exerciseMI/' + exercise.id"
        :nextText="'Weiter zum Vorstellen'"
    ></nav-buttons>
  </div>
</template>

<script>
import store from '@/store';
import ExerciseVideo from '@/components/ExerciseVideo';
import NavigationButtons from "@/components/NavigationButtons";

export default {
  name: "ExerciseAO",
  data: function () {
    return {
      shared: store.state,
      exercise: {}
    }
  },
  methods: {
    onVideoEnded: function (exercise) {
      this.$router.push('/exerciseMI/' + exercise.id)
    }
  },
  components: {
    'exercise-video': ExerciseVideo,
    'nav-buttons': NavigationButtons
  },
  created: function () {
    this.shared.title = "Übung beobachten";
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