<script>
import HeadTab from "../components/HeadTab.vue"
import {  mapGetters } from "vuex"
export default {
  components  : {
    HeadTab
  },
  computed : {
    ...mapGetters(["allMoviesGetter", "favoriteMovies"]),
  },
}
</script>

<template>
  <div class="about">
    <HeadTab/>
    <h1>This is an Favourites page</h1>
    <!-- ISSUE!   when navigating to favorite page and then coming back to home page the added items is not getting reflected 
    And the favorite movie list is not getting displayed when filtering the allmovie array based on marked==="true" -->
    <ul>
      <li v-for="item in favoriteMovies" :key="item.id">
      <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>


