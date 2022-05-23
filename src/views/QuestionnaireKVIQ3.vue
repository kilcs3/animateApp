<template>
    <div class="margin container">
        <v-row align="center">
            <v-col>
                <v-btn id="buttonBack" class="buttonBack" v-on:click="goBack()">Zurück</v-btn>
                <v-btn large v-on:click="goVisual()">Visuell</v-btn>
                <v-btn large v-on:click="goKinesthetic()">Kinästhetisch</v-btn>
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
            goKinesthetic: function (){
                this.$router.push("/kinestheticKVIQ")
            },
            goVisual: function (){
                this.$router.push("/visualKVIQ")
            },
        }
    }
</script>

<style scoped>
.container{
  height: 87vh;
  position: relative;
}
.buttonBack{
  position: absolute;
  left: 30px;
  bottom: 0;
}
</style>
