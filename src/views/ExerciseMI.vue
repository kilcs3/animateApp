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
        <exercise-image :imgSource="exercise.imageMI" :aspectRatio="1.23"></exercise-image>
        <p class="description">Stellen Sie sich die soeben gesehene &Uuml;bung vor.</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <base-timer
        class="float-right mb-5 mr-0 mr-sm-1 mr-md-5 mr-lg-8"
        :timeLimit="timeLimit"
    ></base-timer>
    <div class="clearer"></div>
    <nav-buttons
        :backLink="'/exerciseAO/' + exercise.id"
        :backText="'Zurück zum Beobachten'"
        :nextLink="'/exerciseFinished/'+exercise.id"
        :nextText="'Übung beenden'"
        class="margin"
    ></nav-buttons>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseImage from "@/components/ExerciseImage";
  import NavigationButtons from "@/components/NavigationButtons";
  import Timer from "@/components/Timer";
  export default {
    name: "ExerciseMI",
    data: function(){
      return {
        shared: store.state,
        timeLimit: 30,
        interval: ""
      }
    },
    components: {
      'exercise-image': ExerciseImage,
      'nav-buttons': NavigationButtons,
      'base-timer': Timer
    },
    created: function() {
      this.shared.title = "Übung sich vorstellen";
      let exercise = store.getters.exercise(this.$route.params.id);
      if (!exercise) {
        this.$router.push("/");
        return;
      }
      this.exercise = exercise;
      this.timeLimit = Math.round(this.exercise.duration*1.2);
      this.interval = setTimeout(
          function () {
            new Audio(require('@/assets/sounds/MI-finished.mp3')).play();
            this.$router.push({path: '/exerciseFinished/' + this.exercise.id});
          }.bind(this),
          this.timeLimit * 1000
      );
    },
    beforeDestroy() {
      clearTimeout(this.interval);
    }
  }
</script>

<style scoped>

</style>