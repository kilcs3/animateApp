<template>
    <v-img
        :src="getImgUrl(imgSource)"
        :aspect-ratio="aspectRatio"
        class="grey lighten-2"
    >
    </v-img>
</template>

<script>
export default {
  name: "ExerciseImage",
  props: ['imgSource', 'aspectRatio'],
  methods: {
    getImgUrl: function (pic) {
      return require('@/assets/images/' + pic);
    }
  }
}
</script>

<style scoped>

</style>