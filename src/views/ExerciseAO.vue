<template>
  <div>
    <p>Action observation: <router-link :to="'/exerciseMI/'+exercise.id">{{exercise.title}}</router-link></p>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseAO",
    computed: {
      exercise: function() {
        let exercise = store.getters.exercise(this.$route.params.id);
        if (!exercise) {
          exercise = {};
          //this.$router.push('/');
        }
        return exercise;
      }
    }
  }
</script>

<style scoped>

</style>