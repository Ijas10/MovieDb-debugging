<script>
import { mapActions } from 'vuex'
export default {
    props : ["details"],
    methods : {
        ...mapActions(["addingFavouritesAction"]),
    }
}
</script>

<template>
<div>
    <h1>{{details.title}}</h1>

    <button @click="addingFavouritesAction({id :details.id})">{{details.marked ?" Added" :" Add"}}</button>
    
</div>
    
</template>