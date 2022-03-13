export default {
    namespaced: true,
    state: {
        favoritos: [],
    },
    mutations: {
        adicionarFavorito(state, payload) {
            var exists = false
            state.favoritos.forEach(p => {
                if (p.id == payload.id) {
                    exists = true
                }
            })
            if (!exists) {
                state.favoritos.push(payload)
            }
        },
        removerFavorito(state, payload) {
            state.favoritos.forEach((p, idx) => {
                if (p.id == payload.id) {
                    state.favoritos.splice(idx, 1)
                }
            });
        }
    },
    actions: {
        adicionarFavorito({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarFavorito', payload)
            }, 100)
        },
        removerFavorito({ commit }, payload) {
            setTimeout(() => {  
                commit('removerFavorito', payload)
            }, 100)
        }
    }
}