<script>
import HeadTab from "../components/HeadTab.vue"

import Items from "../components/Items.vue"
import  {mapGetters,mapActions} from "vuex"
export default {
    components: {
        HeadTab,
        Items,
    },
    computed : {
      ...mapGetters(["allMoviesGetter"])
    },
    methods : {
      ...mapActions(["fetchingUpi"])
    },
    mounted() {
      this.fetchingUpi()
    }
}
</script>

<template>
<div>
  <HeadTab/>
  <ul>
    <Items v-for="item in allMoviesGetter" :details="item" :key="item.id"/>
  </ul>
  </div>
</template>