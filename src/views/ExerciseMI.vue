<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :lg="8"
      >
        <v-img
            :src="getImgUrl(exercise.imageMI)"
            @click="onClicked(exercise)"
            aspect-ratio="1.5"
            class="grey lighten-2"
        >
        </v-img>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseMI",
    methods: {
      getImgUrl(pic) {
        return require('@/assets/images/'+pic);
      },
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