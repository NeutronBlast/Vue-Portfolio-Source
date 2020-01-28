import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:{
      slide_one:'slide-1.jpg',
      slide_two:'slide-2.jpg',
    }
  },
  mutations: {
    modify(state,locale){
      if (locale=='es'){
        state.slides.slide_one='slide-1ES.jpg';
        state.slides.slide_two='slide-2ES.jpg';
      }
      else if (locale=='en'){
        state.slides.slide_one='slide-1.jpg';
        state.slides.slide_two='slide-2.jpg';
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
