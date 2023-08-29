<!-- <script>
import { store } from '../store';

export default {

    data() {
        return{
            store
        }
    },


    mounted(){
        this.$emit(archetype)
    }
}

</script>


<template>
    <select class="form-select" v-model="store.archetype">
        <option selected @click="fetchCards" value="">Select archetype</option>
        <option @click="fetchCards" :value="archetype.archetype_name" v-for="archetype in store.archetypes"> {{
            archetype.archetype_name }}</option>

    </select>
</template>

<style lang="scss" scoped></style> -->