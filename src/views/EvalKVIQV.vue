<template>
  <div class="margin">
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
        <p class="description">Sie haben die &Uuml;bung erfolgreich beendet!</p>
        <fieldset class="bewertung">
          <legend><b>Bewerten Sie Ihr visuelles Vorstellungsvermögen</b></legend>

          <div align="left" style="margin-top:15px">
            <input type="radio" id="option1" name="Vorstellungsvermögen" value="1" @change="onChange($event)">
            <label for="option1" style="margin-left: 10px">kein Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option2" name="Vorstellungsvermögen" value="2" @change="onChange($event)">
            <label for="option2" style="margin-left: 10px">verschwommenes Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option3" name="Vorstellungsvermögen" value="3" @change="onChange($event)">
            <label for="option3" style="margin-left: 10px">einigermassen klares Bild</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option4" name="Vorstellungsvermögen" value="4" @change="onChange($event)">
            <label for="option4" style="margin-left: 10px">Bild fast so klar wie beim Sehen</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option5" name="Vorstellungsvermögen" value="5" @change="onChange($event)">
            <label for="option5" style="margin-left: 10px">Bild so klar wie beim Sehen</label>
          </div>
        </fieldset>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
          :cols="10"
          :sm="6"
          :md="4"
          :lg="3"
      >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <nav-buttons
      :backLink="'/exerciseKVIQV/' + vExercise.id"
      :backText="'Zurück zur Übung'"
      :nextLink="'/evalOverview/'"
      :nextText="'Bestätigen'"
      class="margin"
    ></nav-buttons>
  </div>
</template>

<script>
  import store from '@/store';
  import NavigationButtons from "@/components/NavigationButtons";
  export default {
    name: "evalKVIQV",
    data: function(){
      return {
        shared: store.state2
      }
    },
    components: {
      'nav-buttons': NavigationButtons,
    },
    methods: {
      onChange(event) {             //saves data to localstorage
        var optionText = "N/A";
        if (event.target.value!=null){
          optionText = event.target.value;
        }
        let data = {
            id: this.vExercise.id,
            value: optionText
        };
        let dataSerialized = JSON.stringify(data);
        
        localStorage.setItem("evalData" + this.vExercise.id, dataSerialized);
        
        let dataDeserialized = JSON.parse(localStorage.getItem("evalData" + this.vExercise.id));

        console.log(dataDeserialized); 
      }
    },
    created: function() {
      this.shared.title = "Übung beendet";
      let vExercise = store.getters.vExercise(this.$route.params.id);
      if (!vExercise) {
        this.$router.push("/questionnaireKVIQ4");
        return;
      }
      this.vExercise = vExercise;
    }
  }
</script>

<style scoped>
  .bewertung {
    border: none;
  }
</style>