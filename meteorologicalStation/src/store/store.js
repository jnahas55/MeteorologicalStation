import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment';
import Chart from 'chart.js';


Vue.use(Vuex); // tell Vue you want to use Vuex plugin

export const store = new Vuex.Store({
  strict: false, 

  state:{

//##########################################################################################
// Backend details
//##########################################################################################

    backendEndPoint: "http://localhost:8090",
    dataStreamsResponseFromBackend: {},
    dataStreams:[],

    humidity: undefined,
    rain: undefined,
    temperature: undefined,
    wind: undefined,
    pressure: undefined,
    uvintensity: undefined,
  },

  getters:{

  },

  mutations: {

    processDataStreamsConfigured: (state, response) => {
      state.dataStreamsResponseFromBackend = response.data;
      state.dataStreamsConfigured = [];

      console.log("Amount of Streams in Response: " + state.dataStreamsResponseFromBackend.length);

      for(let i=0; i<state.dataStreamsResponseFromBackend.length; i++){
        state.dataStreams.push(state.dataStreamsResponseFromBackend[i]);


	switch (state.dataStreamsResponseFromBackend[i].name) {
	  case 'HumiditySensor':
	    state.humidity=state.dataStreamsResponseFromBackend[i].current_value;
	    break;
	  case 'RainSensor':
	    state.rain=state.dataStreamsResponseFromBackend[i].current_value;
	    break;
	  case 'TemperatureSensor':
	    state.temperature=state.dataStreamsResponseFromBackend[i].current_value;
	    break;
	  case 'WindSpeedSensor':
	    state.wind=state.dataStreamsResponseFromBackend[i].current_value;
	    break;
	  case 'PressureSensor':
	    state.pressure=state.dataStreamsResponseFromBackend[i].current_value;
	    break;
	  default: //UV intensity sensor
	    state.uvintensity=state.dataStreamsResponseFromBackend[i].current_value;	   
	}

        console.log("DataStreams =>" + state.dataStreams);
      }
      console.log(" Finishing getDataStreamsConfigured ######");
    },



  },

  //#####################################################################
  // ACTIONS
  //#####################################################################

  actions:{ 

    showDataStreamView: (context) => {

      axios.get(store.state.backendEndPoint + '/data-streams',{ headers: { "Accept": "application/json" } }).then(response => {

        context.commit('processDataStreamsConfigured', response);

      }, (err) => {
        console.log("[ERROR] => " + err);

      })
    },

    lalala: (context) => {
	window.setInterval(function(){
	    context.dispatch('showDataStreamView');
	}, 5000);

    }
  }
})
