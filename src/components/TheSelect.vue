<script>
import { store } from '../store';

export default {

    data() {
        return{
            store
        }
    },


    methods:{
        OnClick(){

            this.$emit("archetype", store.archetype)
        }
    }
}

</script>


<template>
    <select class="form-select" 
    v-model="store.archetype">
        <option selected 
        @click="OnClick" value="">Select archetype</option>
        <option @click="OnClick" 
        :value="archetype.archetype_name" 
        v-for="archetype in store.archetypes"> {{
            archetype.archetype_name }}</option>

    </select>
</template>

<style lang="scss" scoped></style>