<template>
  <div>
    <ul>
      <li v-for="exercise in shared.exercises" :key="exercise.id"><router-link :to="'/exerciseAO/'+exercise.id">{{exercise.title}}</router-link></li>
    </ul>
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