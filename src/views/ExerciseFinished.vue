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
            aspect-ratio="1.5"
            class="grey lighten-2"
        >
        </v-img>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="8"
          :md="6"
          :lg="4"
      >
        <v-btn
            width="100%"
            x-large
            @click="back"
        >
          <v-icon>mdi-arrow-left-bold</v-icon>
          <div class="margin">Übungsauswahl</div>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "ExerciseFinished",
    methods: {
      getImgUrl(pic) {
        return require('@/assets/images/' + pic);
      },
      back: function(){
        this.$router.push("/");
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