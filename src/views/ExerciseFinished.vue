<template>
  <div>
    <p>Finished: <router-link :to="'/'">Home</router-link></p>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseFinished",
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