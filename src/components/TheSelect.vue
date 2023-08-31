<script>
import { store, fetchArchetypes, fetchCards } from '../store';

export default {

    data() {
        return{
            store
        }
    },


    methods:{
        fetchCards,
        fetchArchetypes
        
    },

    mounted(){
        fetchCards()
        fetchArchetypes()
    }
}

</script>


<template>
    <select class="form-select" 
    v-model="store.archetype" @click="fetchCards">
        <option selected 
        value="">Select archetype</option>
        <option @click="fetchCards" 
        :value="archetype.archetype_name" 
        v-for="archetype in store.archetypes"> 
        {{ archetype.archetype_name }}</option>

    </select>
</template>

<style lang="scss" scoped></style>