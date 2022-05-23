<template>
    <div class="margin container">
        <v-row align="center">
            <v-col
                :cols="10"
                :sm="6"
                :md="4"
                :lg="3"
            >
                <v-btn id="buttonProceed" class="buttonProceed" color="green" v-on:click="navigate()">Weiter</v-btn>
                <v-btn id="buttonBack" class="buttonBack" v-on:click="goBack()">Zurück</v-btn>
            </v-col>
        </v-row>
        <p class="text">
            <b>Gehen Sie wie folgt vor:</b><br>
            1. Nehmen Sie für jede Aufgabe die Startposition ein.<br>
            2. Schauen Sie sich die gezeigte Übung an.<br>
            3. Führen Sie diese Übung <u>einmalig</u> aus.<br>
            4. Nehmen Sie wieder die Startposition ein.<br>
            5. Stellen Sie sich nun vor, die Übung zu machen.<br>
        </p>
        <p class="text">
            <b>Wichtig:</b><br>
            Führen Sie die Bewegung nicht wirklich aus.<br>
            Stellen Sie es sich nur einmal vor.
        </p>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "questionnaireKVIQ2",
        data: function(){
            return {
            shared: store.state,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"}, //sets title to "KVIQ Fragebogen"

        methods:{
            navigate: function (){
                this.$router.push("/questionnaireKVIQ3")
            },
            goBack: function (){
                this.$router.push("/questionnaireKVIQ")
            },
        }
    }
</script>

<style scoped>
.text{
  margin-top: 20px;
  margin-bottom: 5px;
  align-content: center;
}

.container{
  height: 87vh;
  position: relative;
}
.buttonProceed{
  position: absolute;
  right: 30px;
  bottom: 0;
}
.buttonBack{
  position: absolute;
  left: 30px;
  bottom: 0;
}
</style>
