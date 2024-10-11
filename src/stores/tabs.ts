import { defineStore } from "pinia";
import { ref } from "vue";

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

    // function selectMenu(val) {
    //     if (val.name === "home") {
    //         state.value.currentMenu = null
    //     } else {
    //         const index = state.value.tab.findIndex((item) => item.name === val.name)
    //         index === -1 ? state.value.tab.push(val) : ""
    //     }
    // }
    return {
        state
        // selectMenu
    }
})