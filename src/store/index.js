
import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
  state () {
    return {
        allMovies : [],
    }
  },
  mutations: {
    fetchingMutations : (state,data) => state.allMovies = data ,
    addingtoFavMutations(state,data) {
        console.log("state", state.allMovies)
        const mapping2 = state.allMovies.map(each => {
            if(each.id==data){
                return {...each, marked : true}
            } else {
                return each
            }
        })
        const rawObjectOrArray=  JSON.parse(JSON.stringify(mapping2))
       
        state.allMovies = rawObjectOrArray
        console.log("final", state.allMovies)
    }   
        
  },
  actions : {
    async fetchingUpi() {
        const apiUrl =
        "https://api.themoviedb.org/3/movie/popular?api_key=919d1c9f740208335620061fe5b28c0f&language=en-US&page=1";
      const res = await fetch(apiUrl);
      const data = await res.json();
      const mapping = data.results.map((each) => ({ ...each, marked: false }));
      this.commit("fetchingMutations", mapping);
      console.log("created", mapping);
    },
    addingFavouritesAction(id) {
        console.log("idof", id)
       this.commit("addingtoFavMutations", id)
    }
  },
  getters: {
    allMoviesGetter: (state) => state.allMovies,
  },
})

export default store
