import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationData: JSON.parse(localStorage.getItem('locationData')) || []
  },
  mutations: {
    SET_LOCATION(state, data){
      state.locationData = data
      window.localStorage.setItem('locationData' ,JSON.stringify(state.locationData));
    },
    REMOVE_LOCATION(state, id){
      state.locationData.splice(id, 1)
      window.localStorage.setItem('locationData' ,JSON.stringify(state.locationData));
    },
    REMOVE_MULTIPLE_LOCATION(state, id){
      let fatherIndex = id[0]
      let childIndex = id[1]
      let string = 'state.locationData'+fatherIndex+'.elements'+'.splice('+childIndex+', 1)'
      eval(string)
      window.localStorage.setItem('locationData' ,JSON.stringify(state.locationData));

    }
  },
  actions: {
    updateLocation: ({ commit }, payload) => {
      commit("SET_LOCATION", payload)
    },
    removeLocation: ({ commit }, payload) => {
      if(typeof payload == 'number'){
        commit("REMOVE_LOCATION", payload)
      }
      else if(typeof payload == 'object'){
        commit("REMOVE_MULTIPLE_LOCATION", payload)
      }
    },
  },
  modules: {
  }
})
