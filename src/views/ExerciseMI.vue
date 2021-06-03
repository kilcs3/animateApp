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
    data: function(){
      return {
        shared: store.state
      }
    },
    methods: {
      onClicked: function(exercise){
        this.$router.push('/exerciseFinished/'+exercise.id);
      }
    },
    components: {
      'exercise-image': ExerciseImage
    },
    created: function() {
      this.shared.title = "Übung vorstellen";
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