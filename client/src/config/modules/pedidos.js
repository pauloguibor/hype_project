export default {
    namespaced: true,
    state: {
        pedidos: []
    },
    // getters: {
    //     valorTotal(state) {
    //         return state.pedidos.map(p => 1 * p.preco)
    //             .reduce((total, atual) => total + atual, 0)
    //     }
    // },
    mutations: {
        adicionarPedido(state, payload) {

            let valor = payload.map(p => 1 * p.preco).reduce((total, atual) => total + atual, 0)
            let quantidade = payload.length
            let text = ''
            let num = ''
            let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let numbers = '0123456789'
            for (let i = 0; i < 5; i++) {
                text += letters.charAt(Math.floor(Math.random() * letters.length))
            }
            for (let i = 0; i < 3; i++) {
                num += numbers.charAt(Math.floor(Math.random() * numbers.length))
            }

                let pedido = {
                    id:`${num}-${text}`,
                    qtd:quantidade,
                    valor:`R$ ${valor.toFixed(2)}`,
                    itens:payload
                }
                state.pedidos.push(pedido)
        
        },
        removerPedido(state, payload) {
            state.pedidos.forEach((p, idx) => {
                if(p.id == payload){
                    state.pedidos.splice(idx, 1)
                }
            });
        }
    },
    actions: {
        adicionarPedido({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarPedido', payload)
            }, 1000)
        },
        removerPedido({ commit }, payload) {
            setTimeout(() => {
                commit('removerPedido', payload)
            }, 1000)
        }
    }
}