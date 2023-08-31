<script>

import {store, fetchCards, fetchArchetypes} from "../store";
import TheCard from "./TheCard.vue";


export default {

    components:{
        TheCard
    },

    data() {
        return {
            store

        }
    },

    methods: {
        
    },

    mounted() {

    }

}
</script>

<template>
    <div class="container card-content">
        <div class="banner-top">
            <span>Found {{ store.totCards }} card</span>
        </div>

        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 g-4">
            <div class="col py-4" 
            v-for="singleCard in store.cards" :key="singleCard.id">
                <TheCard :card="singleCard"></TheCard>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card-content {
    background-color: white;
    padding: 2rem;

    .banner-top {
        height: 40px;
        background-color: $color-secondary;

        span {
            color: white;
            line-height: 40px;
            padding: 1rem;
        }
    }

}
</style>