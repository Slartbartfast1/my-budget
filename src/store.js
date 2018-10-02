import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [{category: '数码产品', payout: 20.00, desc: 'sadas', date: '2017-12-12 12:12:12'}, {
            category: '教育',
            payout: 20.00,
            desc: 'sadas',
            date: '2017-12-12 12:12:12'
        },],
    },
    getters:{

    },
    mutations: {
        add(state, newPayout) {
            state.list.push(newPayout)
        },
        remove(state, obj) {
            var target=state.list.filter(function(el){
                if(el.id===obj){
                    return true
                }
            });
            var i=state.list.indexOf(target[0]);
            state.list.splice(i, 1)
        }
    },
    actions: {},
    plugins: [createPersistedState()],
})
