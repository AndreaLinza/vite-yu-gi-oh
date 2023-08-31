<script>

import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheCardContent from './components/TheCardContent.vue';

export default {
    components:{
        TheHeader,
        TheMain,
        TheCardContent,
    },
}

</script>

<template>
    <body>
        <TheHeader></TheHeader>
        
        <TheMain></TheMain>
        
    </body>
</template>

<style lang="scss">
@use "../src/styles/partials/variables" as *;

body{
    background-color: $color-primary;
}

</style>
