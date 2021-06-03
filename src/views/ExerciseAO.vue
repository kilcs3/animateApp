<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        :cols="10"
        :lg="8"
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
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="8"
          :md="6"
          :lg="4"
      >
        <v-btn
            width="40%"
            x-large

        >
          <v-icon>mdi-arrow-left-bold</v-icon>
          <div class="margin">Zurück</div>
        </v-btn>
      </v-col>
        <v-col
            :cols="10"
            :sm="8"
            :md="6"
            :lg="4"
        >
        <v-btn
            width="40%"
            x-large

        >
          <div class="margin">Vorwärts</div>
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseVideo from '@/components/ExerciseVideo';
  export default {
    name: "ExerciseAO",
    data: function() {
       return {
         shared: store.state,
         exercise: {}
       }
    },
    methods: {
      onVideoEnded: function(exercise){
        this.$router.push('/exerciseMI/'+exercise.id)
      }
    },
    components: {
      'exercise-video': ExerciseVideo
    },
    created: function() {
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