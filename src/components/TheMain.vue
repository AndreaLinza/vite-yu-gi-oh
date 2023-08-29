<script>
import { fetchArchetypes, fetchCards, store } from '../store';
import TheCardContent from './TheCardContent.vue';
// import TheSelect from './TheSelect.vue';

export default {
    components: {
        TheCardContent,
        // TheSelect
    },

    data() {
        return {
            store,
            
        }
    },
    
    mounted() {
        fetchCards()
        fetchArchetypes()
        
    }

}
</script>

<template>
    <main class="container">
        <div class="container py-3">

            <!-- <TheSelect @archetype="fetchArchetypes()"></TheSelect> -->

            <select class="form-select" v-model="store.archetype">
                <option selected @click="fetchCards" value="">Select archetype</option>
                <option @click="fetchCards" :value="archetype.archetype_name" v-for="archetype in store.archetypes"> {{
                    archetype.archetype_name }}</option>

            </select>

        </div>
        <TheCardContent></TheCardContent>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;



select {
    width: 20%;
}
</style>