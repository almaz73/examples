import {defineStore} from "pinia";
import axios from "axios";

const site: string = 'https://jsonplaceholder.typicode.com/'
export const useComboStore = defineStore("comboStore", {
    state: () => {
        return {
            list: []
        }
    },
    actions: {
        async getContacts(type) {
            const res = await getContacts(type)
            if (res.data) this.list = res.data.content
            return res.data
        },
    },
    getters: {
        getList: (state) => state.list,
    },
})

function getContacts(type) {
    let url = site + type;
    return axios.get(url)
        .then(res => res)
}