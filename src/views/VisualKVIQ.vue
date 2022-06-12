<template>
    <div class="margin container">
        <v-row>
            <v-col
                v-for="vExercise in shared.vExercises"
                :key="vExercise.id"
                class="d-flex child-flex"
                :cols="6"
                :lg="6"
            >  
                <router-link :to="'/exerciseKVIQV/'+ vExercise.id">
                    <p class="description" align="left">{{vExercise.title}}</p>
                </router-link>
                <v-btn id="buttonBack" class="back" v-on:click="goBack()">Zurück</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "visualKVIQ",
        data: function(){
            return {
            shared: store.state3,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"}, //sets title to "KVIQ Fragebogen"

        methods:{
            goBack: function (){
                this.$router.push("/questionnaireKVIQ4")
            }
        }
    }
</script>
<style scoped>
.container{
  height: 87vh;
  position: relative;
}
.back{
  position: absolute;
  left: 30px;
  bottom: 0;
}
</style>