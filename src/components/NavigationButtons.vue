<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="12"
          :md="6"
      >
        <v-btn
            x-large
            width="90mm"
            @click="back"
        >
          <v-icon left>mdi-arrow-left-bold</v-icon>
          <div class="margin text-transform-none">{{backText}}</div>
        </v-btn>
      </v-col>
      <v-col
          :cols="12"
          :md="6"
      >
        <v-btn
            x-large
            width="90mm"
            @click="next"
        >
          <div class="margin text-transform-none">{{nextText}}</div>
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NavigationButtons",
  props: ["backLink", "backText", "nextLink", "nextText"],
  methods: {
    back: function(){
      this.$router.push(this.backLink);
    },
    next: function(){
      this.$router.push(this.nextLink);
    }
  }
}
</script>

<style scoped>

</style>