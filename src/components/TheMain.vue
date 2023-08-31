<script>
import { fetchArchetypes, fetchCards, store } from '../store';
import TheCardContent from './TheCardContent.vue';
import TheSelect from './TheSelect.vue';

export default {
    components: {
        TheCardContent,
        TheSelect
    },

    data() {
        return {
            store,
            
        }
    },

    methods:{
        fetchArchetypes,
        fetchCards
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

            <TheSelect></TheSelect>

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