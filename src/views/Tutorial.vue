<template>
  <div class="margin">
    <p class="description">Hier ist das Tutorial.</p>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: "patientEducation",
  data: function(){
    return {
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "Handbuch";
  }
}
</script>

<style scoped>

</style>