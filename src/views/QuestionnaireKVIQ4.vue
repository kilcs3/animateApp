<template>
    <div class="margin container">
        <v-row align="center">
            <v-col>
                <p class="description"><b>Bitte wählen Sie eine Kategorie</b></p>
                <v-btn id="buttonBack" class="back" v-on:click="goBack()">Zurück</v-btn>
                <v-btn large v-on:click="goVisual()">Visuell</v-btn>
                <v-btn large v-on:click="goKinesthetic()">Kinästhetisch</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "questionnaireKVIQ4",
        data: function(){
            return {
            shared: store.state,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"}, //sets title to "KVIQ Fragebogen"

        methods:{
            goBack: function (){
                this.$router.push("/questionnaireKVIQ3")
            },
            goKinesthetic: function (){
                this.$router.push("/kinestheticKVIQ")
                
            },
            goVisual: function (){
                this.$router.push("/visualKVIQ")
                
            },
        }
    }
    //initializes default data
    for (let i = 1; i < 18; i++){
        let defaultData = {
        id: "K" + i,
        value: 0
        }
        localStorage.setItem("evalDataK" + i , JSON.stringify(defaultData));
    }
    for (let i = 1; i < 18; i++){
        let defaultData = {
        id: "V" + i,
        value: 0
        }
        localStorage.setItem("evalDataV" + i , JSON.stringify(defaultData));
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
