<template>
    <div class="margin container">
        <v-row align="center">
            <v-col>
                <p class="description"><b>Bitte wählen Sie Ihre dominante Seite</b></p>
                <v-btn id="buttonBack" class="back" v-on:click="goBack()">Zurück</v-btn>
                <v-btn id="buttonLeft" value="left" large v-on:click="goLeft()">Links</v-btn>
                <v-btn id="buttonRight" value="right" large v-on:click="goRight()">Rechts</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "questionnaireKVIQ3",
        data: function(){
            return {
            shared: store.state,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"}, //sets title to "KVIQ Fragebogen"

        methods:{
            goBack: function (){
                this.$router.push("/questionnaireKVIQ2")
            },
            goRight: function (){
                this.$router.push("/questionnaireKVIQ4")
                //not implemented yet: save button value to localStorage
            },
            goLeft: function (){
                this.$router.push("/questionnaireKVIQ4")
                //not implemented yet: save button value to localStorage
            },
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
