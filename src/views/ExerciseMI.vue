<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :lg="8"
          @click="onClicked(exercise)"
      >
        <exercise-image :imgSource="exercise.imageMI"></exercise-image>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseImage from "@/components/ExerciseImage";

  export default {
    name: "ExerciseMI",
    components: {
      'exercise-image': ExerciseImage
    },
    methods: {
      onClicked: function(exercise){
        this.$router.push('/exerciseFinished/'+exercise.id);
      }
    },
    computed: {
      exercise: function() {
        let exercise = store.getters.exercise(this.$route.params.id);
        if (!exercise) {
          exercise = {};
        }
        return exercise;
      }
    }
  }
</script>

<style scoped>

</style>