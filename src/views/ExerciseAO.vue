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
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseVideo from '@/components/ExerciseVideo';
  export default {
    name: "ExerciseAO",
    components: {
      'exercise-video': ExerciseVideo
    },
    data: function() {
       return {
         exercise: {}
       }
    },
    methods: {
      onVideoEnded: function(exercise){
        this.$router.push('/exerciseMI/'+exercise.id)
      }
    },
    created: function() {
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