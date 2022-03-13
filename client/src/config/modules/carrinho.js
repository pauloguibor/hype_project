export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            var exists = false
            state.produtos.forEach(p =>{
                if (p.id == payload.id){
                    exists = true
                }
            })
            if (!exists){
                state.produtos.push(payload)
            }
        },
        removerProduto(state, payload) {
            state.produtos.forEach((p, idx) => {
                if(p.id == payload){
                    state.produtos.splice(idx, 1)
                }
            });
        }
    },
    actions: {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        },
        removerProduto({ commit }, payload) {
            setTimeout(() => {
                commit('removerProduto', payload)
            }, 1000)
        }
    }
}