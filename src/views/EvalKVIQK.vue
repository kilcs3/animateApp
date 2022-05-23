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
          <legend><b>Bewerten Sie Ihr kinästhetisches Vorstellungsvermögen</b></legend>

          <div align="left" style="margin-top:15px">
            <input type="radio" id="option1" name="Vorstellungsvermögen" value="1" @change="onChange($event)">
            <label for="option1" style="margin-left: 10px">keine Empfindung</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option2" name="Vorstellungsvermögen" value="2" @change="onChange($event)">
            <label for="option2" style="margin-left: 10px">mässig intensiv</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option3" name="Vorstellungsvermögen" value="3" @change="onChange($event)">
            <label for="option3" style="margin-left: 10px">einigermassen intensiv</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option4" name="Vorstellungsvermögen" value="4" @change="onChange($event)">
            <label for="option4" style="margin-left: 10px">fast so intensiv wie beim Ausführen</label>
          </div>
          <div align="left" style="margin-top:10px">
            <input type="radio" id="option5" name="Vorstellungsvermögen" value="5" @change="onChange($event)">
            <label for="option5" style="margin-left: 10px">so intensiv wie beim Ausführen</label>
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
        <v-btn
            width="100%"
            x-large
            @click="back"
        >
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
          <div class="margin text-transform-none">Bestätigen</div>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: "evalKVIQK",
    data: function(){
      return {
        shared: store.state2
      }
    },
    methods: {
      back: function(){
        this.$router.push("/kinestheticKVIQ");
      },
      onChange(event) {
        var optionText = event.target.value;
        let data = [
          {
            id: this.kExercise.id,
            value: optionText
          }
        ]
        console.log(JSON.stringify(data)); //ID & value as JSON string
      },
      /*saveFile: function() {
        localStorage.setItem('storedData', JSON.stringify(this.data));
        
      }*/
    },
    
    created: function() {
      this.shared.title = "Übung beendet";
      let kExercise = store.getters.kExercise(this.$route.params.id);
      if (!kExercise) {
        this.$router.push("/questionnaireKVIQ3");
        return;
      }
      this.kExercise = kExercise;
    }
  }
</script>

<style scoped>
  .bewertung {
    border: none;
  }
</style>