import Vue from 'vue'
import VueRouter from 'vue-router'

import Carrinho from '@/components/home/Carrinho.vue'
import ItensCarrinho from '@/components/home/ItensCarrinho.vue'
import ItensFavoritos from '@/components/home/ItensFavoritos.vue'


import Produtos from '@/components/home/Produtos.vue'

import PedidosPage from '@/components/admin/PedidosPage.vue'
import Auth from '@/components/auth/Auth.vue'

Vue.use(VueRouter)

const routes =[{
    name: 'cart',
    path: '/cart',
    component: Carrinho,
},{
    name: 'pedidos',
    path: '/pedidos',
    component: PedidosPage
},{
    name: 'auth',
    path: '/auth',
    component: Auth
},
{
    name: 'produtos',
    path: '/',
    component: Produtos
},
{
    name: 'Itens',
    path: '/cartItens',
    component: ItensCarrinho
},
{
    name: 'favoritos',
    path: '/favoriteItens',
    component: ItensFavoritos
}]

export default new VueRouter({
    mode:'history',
    routes
})

 