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
        <p class="description">Beobachten Sie die gezeigte Übung.</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <base-timer
        class="float-right mb-5 mr-0 mr-sm-1 mr-md-5 mr-lg-8"
        :timeLimit="timeLimit"
    ></base-timer>
    <div class="clearer"></div>
    <nav-buttons
        :backLink="'/home'"
        :backText="'Zurück zur Übersicht'"
        :nextLink="'/exerciseMI/' + exercise.id"
        :nextText="'Weiter zum Vorstellen'"
        class="margin"
    ><!-- mögliches Icon für MI:
            mdi-thought-bubble-outline
          für AO:
            mdi-filmstrip
            mdi-play-box-outline
          mögliche Icons für next/back:
            mdi-menu-right
            mdi-menu-left
          /--></nav-buttons>
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
    this.shared.title = "Beobachten";
    let exercise = store.getters.exercise(this.$route.params.id);
    if (!exercise) {
      this.$router.push("/Home");
      return;
    }
    this.exercise = exercise
    this.timeLimit = this.exercise.duration;
  }
}
</script>

<style scoped>

</style>