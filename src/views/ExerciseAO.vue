<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        :cols="10"
        :lg="8"
      >
        <video
            :src="getVideoUrl(exercise.video)"
            :poster="getImgUrl(exercise.image)"
            @ended="onEnd(exercise)"
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
      onEnd: function(exercise){
        this.$router.push('/exerciseMI/'+exercise.id)
      },
      getImgUrl(pic) {
        return require('@/assets/images/'+pic);
      },
      getVideoUrl(vid){
        return require('@/assets/videos/'+vid);
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