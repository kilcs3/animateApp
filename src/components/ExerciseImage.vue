<template>
  <v-img
      :src="getImgUrl(exercise.image)"
      aspect-ratio="1.5"
      class="grey lighten-2"
  >
  </v-img>
</template>

<script>
export default {
  name: "exerciseImage",
  props: ['exercise'],
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic);
    }
  }
}
</script>

<style scoped>

</style>