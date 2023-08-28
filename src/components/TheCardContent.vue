<script>
import axios from 'axios';
import TheCard from './TheCard.vue';

export default {

    components:{
        TheCard
    },

    data() {
        return {
            cards: [],
            paginationInfo:{}
        }
    },

    methods: {
        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

            axios.get(url).then((response) => {

                this.cards = response.data.data;
            })
        }
    },

    mounted() {
        this.fetchCards()
    }

}
</script>

<template>
    <div class="container card-content">
        <div class="banner-top">
            <span>Found {{}} card</span>
        </div>

        <div class="row row-cols-5 g-4">
            <div class="col py-4" v-for="singleCard in cards" :key="singleCard.id">
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