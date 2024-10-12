import { defineStore } from "pinia";
import { ref, toRaw } from "vue";

/**
 * @method useTabsStore
 * @description tabs store
 * 
*/

function initTsbs() {
    return {
        isCollapse: false,
        tab: [
            {
                path: "/home",
                name: "home",
                label: "首页",
                icon: "home"
            }
        ],
        currentMenu: null
    }
}

export const useTabsStore = defineStore("tabs", () => {
    const state = ref(initTsbs())

    const selectMenu = (val: any) => {
        if (val.name === "home") {
            state.value.currentMenu = null
        } else {
            let index = state.value.tab.findIndex((item) => item.name === val.name)
            index === -1 ? state.value.tab.push(val) : ""
        }
    }
    const removeTab = (val: any) => {
        let index = state.value.tab.findIndex((item) => item.path === val)
        state.value.tab.splice(index, 1)
    }
    return {
        state,
        selectMenu,
        removeTab
    }
})