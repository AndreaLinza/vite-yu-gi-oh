<script>
    export default{

    }
</script>

<template>

    <div class="container card-content">
        <div class="banner-top">
            <span>Found 50 card</span>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card-content{
    background-color: white;
    padding: 2rem;
    .banner-top{
        height: 40px;
        background-color: $color-secondary;

        span{
            color: white;
            line-height: 40px;
            padding: 1rem;
        }
    }
}


</style>