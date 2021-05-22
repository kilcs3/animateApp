<template>
  <div>
    <p>Go to motor imagery: <router-link :to="'/exerciseMI/'+exercise.id">{{exercise.title}}</router-link></p>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        :cols="10"
        :lg="8"
      >
        <video
            :src="exercise.video"
            :poster="exercise.image"
            @ended="onEnd"
            class="grey lighten-2"
            width="100%"
            autoplay
        >
          Dieses Video kann in Ihrem Browser nicht wiedergegeben werden.<br>
        </video>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseAO",
    methods: {
      onEnd: function(){
        alert('video ended -> now go to motor imagery');
      }
    },
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