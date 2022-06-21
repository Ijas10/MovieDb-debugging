
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
    addingtoFavMutations : (state,data)  => {
        console.log("state", state.allMovies)
        state.allMovies = state.allMovies.map(each => {
            if(each.id==data){
                return {...each, marked : true}
            } else {
                return each
            }
        })
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
    addingFavouritesAction(context,data) {
        console.log("idof", data.id)
       context.commit("addingtoFavMutations", data.id)
    }
  },
  getters: {
    allMoviesGetter: (state) => state.allMovies,
    favoriteMovies : (state) => state.allMovies.filter(each => each.marked == "true")
  },
})

export default store
