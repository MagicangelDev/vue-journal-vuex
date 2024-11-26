import { createStore } from "vuex";

import journal from '../modules/daybook/store/journal/'

const strore = createStore ({
    modules: {
        journal
    }

})


export default strore