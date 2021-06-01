<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :lg="8"
      >
        <exercise-image :imgSource="exercise.imageMI"></exercise-image>
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
  import ExerciseImage from "@/components/ExerciseImage";

  export default {
    name: "ExerciseFinished",
    methods: {
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
    },
    components: {
      'exercise-image': ExerciseImage
    }
  }
</script>

<style scoped>

</style>