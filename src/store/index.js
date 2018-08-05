import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    beer_list:[],
    cart_list:[],
    search_list:[],
    is_search:false,
  },
  mutations: {
    setBeerList(state,payload){
      state.beer_list = payload;
      console.log('commit')
    },
    setCartList(state,payload){
      state.cart_list = payload;
    },
    setAscList(state){
      state.beer_list = state.beer_list.sort(function(a, b){return a.abv-b.abv})
    },
    setDesList(state){
      state.beer_list = state.beer_list.sort(function(a, b){return b.abv - a.abv})
    },
    setSearchResult(state,payload){
      state.search_list = state.beer_list.filter(data => {
        return data.name.toLowerCase().indexOf(payload.toLowerCase())>=0;
      })
    },
    setSearch(state,payload){
      if(payload > 0){
        state.is_search = true;
      }else{
        state.is_search = false;
      }
    }
  },
  actions: {
  }
})
