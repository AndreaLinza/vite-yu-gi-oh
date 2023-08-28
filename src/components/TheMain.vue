<script>
import TheCardContent from './TheCardContent.vue';

export default {
    components:{
        TheCardContent
    }

}
</script>

<template>
    <main class="container">
        <div class="container py-3">

            <select class="form-select">
                <option selected>Alien</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            
        </div>
        <TheCardContent></TheCardContent>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;



    select{
        width: 15%;
    }

</style>