<template>
  <div class="margin">
    
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <p class="description">Hier sehen Sie Ihre Bewertungen.</p>
        <canvas id="evalChartV"></canvas>
        <canvas id="evalChartK"></canvas>
        <v-btn id="download" class="downloadBtn" @click="download()">
          <v-icon left>mdi-content-save</v-icon>
          Speichern
        </v-btn>
        <v-btn id="buttonProceed" class="buttonProceed" v-on:click="$router.go(-3)">Weiter</v-btn>
        <v-btn id="buttonBack" class="buttonBack" v-on:click="$router.go(-1)">Zurück</v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div class="clearer"></div>
    
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
  </div>
</template>

<script>
  import store from '@/store';
  import Chart from 'chart.js/auto'
  export default {
    name: "evalOverview",
    data: function(){
      return {
        shared: store.state
      }
    },
    components: {
      //'nav-buttons': NavigationButtons,
    },
    methods: {
      download(){
        const imageLinkV = document.createElement('a');
        const imageLinkK = document.createElement('a');
        const canvasV = document.getElementById('evalChartV');
        const canvasK = document.getElementById('evalChartK');
        imageLinkV.download = 'Visuell_KVIQ.png';
        imageLinkK.download = 'Kinästhetisch_KVIQ.png';
        imageLinkV.href = canvasV.toDataURL('image/png', 1);
        imageLinkK.href = canvasK.toDataURL('image/png', 1);
        imageLinkV.click();
        imageLinkK.click();
      }
    },
    
    mounted: function(){
      let myChartV = document.getElementById("evalChartV");
      let evalChartV = new Chart(myChartV, {
        type: "bar",
        data: {
          labels:["1V","2V","3Vnd","4Vd","5Vd","6V","7Vnd","8Vd","9Vnd","10Vd","11Vd","12Vnd","13Vnd","14Vd","15Vnd","16Vd","17Vnd"],
          datasets:[{
            label: "visuelle Bewertung",
            data:[
              JSON.parse(localStorage.getItem("evalDataV1")).value,
              JSON.parse(localStorage.getItem("evalDataV2")).value,
              JSON.parse(localStorage.getItem("evalDataV3")).value,
              JSON.parse(localStorage.getItem("evalDataV4")).value,
              JSON.parse(localStorage.getItem("evalDataV5")).value,
              JSON.parse(localStorage.getItem("evalDataV6")).value,
              JSON.parse(localStorage.getItem("evalDataV7")).value,
              JSON.parse(localStorage.getItem("evalDataV8")).value,
              JSON.parse(localStorage.getItem("evalDataV9")).value,
              JSON.parse(localStorage.getItem("evalDataV10")).value,
              JSON.parse(localStorage.getItem("evalDataV11")).value,
              JSON.parse(localStorage.getItem("evalDataV12")).value,
              JSON.parse(localStorage.getItem("evalDataV13")).value,
              JSON.parse(localStorage.getItem("evalDataV14")).value,
              JSON.parse(localStorage.getItem("evalDataV15")).value,
              JSON.parse(localStorage.getItem("evalDataV16")).value,
              JSON.parse(localStorage.getItem("evalDataV17")).value,
            ],
            backgroundColor: 'rgba(140, 170, 30, 0.7)',
          }],
        },
        options:{
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 5,
              ticks:{  
                stepSize: 1
              }
            }
          }
        }
      });
      let myChartK = document.getElementById("evalChartK");
      let evalChartK = new Chart(myChartK, {
        type: "bar",
        data: {
          labels:["1K","2K","3Knd","4Kd","5Kd","6K","7Knd","8Kd","9Knd","10Kd","11Kd","12Knd","13Knd","14Kd","15Knd","16Kd","17Knd"],
          datasets:[{
            label: "kinästhetische Bewertung",
            data:[
              JSON.parse(localStorage.getItem("evalDataK1")).value,
              JSON.parse(localStorage.getItem("evalDataK2")).value,
              JSON.parse(localStorage.getItem("evalDataK3")).value,
              JSON.parse(localStorage.getItem("evalDataK4")).value,
              JSON.parse(localStorage.getItem("evalDataK5")).value,
              JSON.parse(localStorage.getItem("evalDataK6")).value,
              JSON.parse(localStorage.getItem("evalDataK7")).value,
              JSON.parse(localStorage.getItem("evalDataK8")).value,
              JSON.parse(localStorage.getItem("evalDataK9")).value,
              JSON.parse(localStorage.getItem("evalDataK10")).value,
              JSON.parse(localStorage.getItem("evalDataK11")).value,
              JSON.parse(localStorage.getItem("evalDataK12")).value,
              JSON.parse(localStorage.getItem("evalDataK13")).value,
              JSON.parse(localStorage.getItem("evalDataK14")).value,
              JSON.parse(localStorage.getItem("evalDataK15")).value,
              JSON.parse(localStorage.getItem("evalDataK16")).value,
              JSON.parse(localStorage.getItem("evalDataK17")).value,
            ],
          backgroundColor: 'rgba(20, 130, 170, 0.7)',
        }]
      },
        options: {
          scales: {
            y: {
              beginAtZero: true,               
              min: 0,
              max: 5,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
      evalChartV;
      evalChartK;
    },

    created: function() {
      this.shared.title = "Statistik";
    }
  }
  
</script>

<style scoped>
.buttonProceed{
  position: absolute;
  right: 30px;
  bottom: 20px;
}
.buttonBack{
  position: absolute;
  left: 30px;
  bottom: 20px;
}
.downloadBtn{
  top: 20px;
}
</style>