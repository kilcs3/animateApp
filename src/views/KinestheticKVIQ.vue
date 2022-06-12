<template>
    <div class="margin container">
        <v-row>
            <v-col
                v-for="kExercise in shared.kExercises"
                :key="kExercise.id"
                class="d-flex child-flex"
                :cols="6"
                :lg="6"
            >
                <router-link :to="'/exerciseKVIQK/'+ kExercise.id">
                    <p class="description" align="left">{{kExercise.title}}</p>
                </router-link>
            </v-col>
        </v-row>
        <v-btn id="buttonBack" class="back" v-on:click="goBack()">Zurück</v-btn>
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: "kinestheticKVIQ",
        data: function(){
            return {
            shared: store.state2,
            }
        },
        created: function () {
        this.shared.title = "KVIQ Fragebogen"   //sets title to "KVIQ Fragebogen"

        },

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
  bottom: 0px;
}
</style>