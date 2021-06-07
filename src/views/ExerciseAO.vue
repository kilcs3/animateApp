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
    <v-row>
      <v-col
          :cols="10"
          :sm="8"
          :md="6"
          :lg="4"
      >
        <v-btn
            x-large
            width="90mm"
            @click="back"
        >
          <v-icon left>mdi-arrow-left-bold</v-icon>
          <div class="margin">Zurück zur Übersicht</div>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
    <v-col
          :cols="10"
          :sm="8"
          :md="6"
          :lg="4"
    >
      <v-btn
          x-large
          width="90mm"
          @click="next(exercise)"
      >
          <div class="margin">Weiter zu Motor Imagery</div>
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import store from '@/store';
import ExerciseVideo from '@/components/ExerciseVideo';

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
    },
    back: function(){
      this.$router.push("/");
    },
    next: function(exercise){
      this.$router.push('/exerciseMI/' + exercise.id);
    }
  },
  components: {
    'exercise-video': ExerciseVideo
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