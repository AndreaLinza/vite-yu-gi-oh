<script>
export default {
    props:{
        card:{
            type: Object,
            required:true
        },
    },

}
</script>

<template>
    <div class="card h-100">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text fw-bold text-center">{{ card.name }}</p>
            <p class="card-text text-center text-dark">{{ card.archetype }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card-body {
    padding: 1rem 0.5rem;
    background-color: $color-primary;
    color: white;
}
</style>