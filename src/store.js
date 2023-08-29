import axios from "axios";
import { reactive } from "vue";


export const store = reactive({

    cards: [],
    totCards: [],
    archetype: "",
    archetypes: [],
    paginationInfo: {}
});

export function fetchCards() {

    let url = "";
    if (store.archetype === "") {
        url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
    }
    else {
        url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.archetype}&num=20&offset=0"
    }

    axios.get(url).then((response) => {


        store.cards = response.data.data;
        store.paginationInfo = response.data.meta
        store.totCards = response.data.meta.current_rows
    })
};

export function fetchArchetypes() {

    const url = "https://db.ygoprodeck.com/api/v7/archetypes.php"

    axios.get(url).then((response) => {

        store.archetypes = response.data

    })

}

