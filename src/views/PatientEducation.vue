<template>
  <div class="margin">
    <p class="description">Hier ist die Patientenedukation.</p>
    <nav-buttons
        :backText="'Zurück zum Beobachten'"
        :nextText="'Übung beenden'"
        class="margin"
    ></nav-buttons>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: "PatientEducation",
  data: function(){
    return {
      shared: store.state
    }
  },
  created: function () {
    this.shared.title = "Wissen";
  }
}
</script>

<style scoped>

</style>