<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <exercise-image :imgSource="exercise.imageFinished" :aspectRatio="1.5"></exercise-image>
        <p class="description">Sie haben die &Uuml;bung erfolgreich beendet.</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
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
    data: function(){
      return {
        shared: store.state
      }
    },
    methods: {
      back: function(){
        this.$router.push("/");
      }
    },
    components: {
      'exercise-image': ExerciseImage
    },
    created: function() {
      this.shared.title = "Übung beendet";
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