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
    <base-timer
        class="float-right mb-5 mr-0 mr-sm-1 mr-md-5 mr-lg-8"
        :timeLimit="timeLimit"
    ></base-timer>
    <div class="clearer"></div>
    <nav-buttons
        :backLink="'/'"
        :backText="'Zurück zur Übersicht'"
        :nextLink="'/exerciseMI/' + exercise.id"
        :nextText="'Weiter zum Vorstellen'"
        class="margin"
    ></nav-buttons>
  </div>
</template>

<script>
import store from '@/store';
import ExerciseVideo from '@/components/ExerciseVideo';
import NavigationButtons from "@/components/NavigationButtons";
import Timer from "@/components/Timer";

export default {
  name: "ExerciseAO",
  data: function () {
    return {
      shared: store.state,
      timeLimit: 30,
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
    'nav-buttons': NavigationButtons,
    'base-timer': Timer
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