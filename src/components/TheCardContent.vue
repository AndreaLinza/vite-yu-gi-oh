<script>
import TheCard from './TheCard.vue';
import {store, fetchCards, fetchArchetypes} from "../store"

export default {

    components:{
        TheCard
    },

    data() {
        return {
            store
            // cards: [],
            // totCards:[],
            // paginationInfo:{}
        }
    },

    methods: {
        // fetchCards() {
        //     const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

        //     axios.get(url).then((response) => {

                
        //         this.cards = response.data.data;
        //         this.paginationInfo = response.data.meta
        //         this.totCards = response.data.meta.current_rows
        //     })
        // }
    },

    mounted() {
        fetchCards()
    }

}
</script>

<template>
    <div class="container card-content">
        <div class="banner-top">
            <span>Found {{ store.totCards }} card</span>
        </div>

        <div class="row row-cols-5 g-4">
            <div class="col py-4" 
            v-for="singleCard in store.cards" :key="singleCard.id">
                <TheCard 
                :card="singleCard"></TheCard>
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