<template>
  <video
      :src="getVideoUrl(videoSource)"
      :poster="getImgUrl(imgSource)"
      @ended="onVideoEnded"
      class="grey lighten-2"
      width="100%"
      autoplay
      muted
  >
    Dieses Video kann in Ihrem Browser nicht wiedergegeben werden.<br>
  </video>
</template>

<script>
export default {
  name: "ExerciseVideo.vue",
  props: ['videoSource', 'imgSource'],
  methods: {
    getImgUrl(pic) {
      return require('@/assets/images/'+pic);
    },
    getVideoUrl(vid){
      return require('@/assets/videos/'+vid);
    },
    onVideoEnded(){
      this.$emit('videoEnded');
    }
  }
}
</script>

<style scoped>

</style>