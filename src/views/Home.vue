<template>
  <div class="margin">
    <!--<ul>
      <li v-for="exercise in shared.exercises" :key="exercise.id"><router-link :to="'/exerciseAO/'+exercise.id">{{exercise.title}}</router-link></li>
    </ul>-->
    <v-row>
      <v-col
          v-for="exercise in shared.exercises"
          :key="exercise.id"
          class="d-flex child-flex"
          :cols="6"
          :md="4"
      >
        <router-link :to="'/exerciseAO/'+exercise.id">
          <v-img
              :src="exercise.image"
              aspect-ratio="1.5"
              class="grey lighten-2"
          >
          </v-img>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "Home",
    data: function(){
      return {
        shared: store.state
      }
    }
  }
</script>

<style scoped>

</style>