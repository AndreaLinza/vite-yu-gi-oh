<script>

export default {

};
</script>

<template>
    <header>
        <div class="container d-flex align-items-center">
            <img src="yu-gi-oh-logo.png" alt="yu-logo">
            <h1 class="px-2">Yu-Gi-Oh Api</h1>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
    background-color: aliceblue;
    
    img {
        width: 10%;
    }

    h1 {
        font-family: $primary-font;
    }
}
</style>