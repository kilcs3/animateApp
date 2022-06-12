<template>
    <div class="margin container">
        <v-row align="center">
            <v-col
                :cols="10"
                :sm="6"
                :md="4"
                :lg="3"
            >
                <v-btn id="buttonProceed" class="proceed" v-on:click="navigate()">Weiter</v-btn>
                <v-btn id="buttonBack" class="back" v-on:click="goToHome()">Zurück</v-btn>
            </v-col>
        </v-row>
        <p class="text">
           <b align="left">Ziel dieses Fragebogens:</b><br>
            Ausmass der Fähigkeit bestimmen<br>
            Wie gut können Sie sich etwas vorstellen?<br>
            Wie gut können Sie etwas spüren?

        </p>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "questionnaireKVIQ",
        data: function(){
            return {
            shared: store.state,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"}, //sets title to "KVIQ Fragebogen"

        methods:{
            navigate:function (){
                this.$router.push("/questionnaireKVIQ2")
            },
            goToHome:function (){
                this.$router.push("/Home")
            },
        }
    }
</script>

<style scoped>
.text{
  margin-top: 20px;
  margin-bottom: 50px;
}
.container{
  height: 87vh;
  position: relative;
}
.proceed{
  position: absolute;
  right: 30px;
  bottom: 0;
}
.back{
  position: absolute;
  left: 30px;
  bottom: 0;
}
</style>
