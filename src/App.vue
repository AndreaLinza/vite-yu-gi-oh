<script>

import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default{
    components:{
        TheHeader,
        TheMain,
    },
}

</script>

<template>
    <TheHeader></TheHeader>
    <body>
        
        <TheMain></TheMain>
        
    </body>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;

body{
    background-color: $color-primary;
}

</style>
