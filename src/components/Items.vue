<script>
import { mapActions } from 'vuex'
export default {
    props : ["details"],
    methods : {
        ...mapActions(["addingFavouritesAction"])
    }
}
</script>

<template>
<div>
    <h1>{{details.title}}</h1>
    <button @click="addingFavouritesAction(details.id)">click</button>
</div>
    
</template>