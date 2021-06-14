<template>
  <div class="margin">
    <v-row>
      <v-col
          v-for="exercise in shared.exercises"
          :key="exercise.id"
          class="d-flex child-flex"
          :cols="6"
          :lg="4"
      >
        <router-link :to="'/exerciseAO/'+exercise.id">
          <exercise-image :imgSource="exercise.image" :aspectRatio="1.5"></exercise-image>
          <p class="description">{{exercise.title}}</p>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';
  import ExerciseImage from '@/components/ExerciseImage';

  export default {
    name: "Home",
    data: function(){
      return {
        shared: store.state
      }
    },
    components : {
      'exercise-image': ExerciseImage
    },
    created: function() {
      this.shared.title = "Übung auswählen";
    }
  }
</script>

<style scoped>

</style>