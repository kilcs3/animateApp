<template>
  <div>
    <p>Motor imagery: <router-link :to="'/exerciseFinished/'+exercise.id">{{exercise.title}}</router-link></p>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseMI",
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