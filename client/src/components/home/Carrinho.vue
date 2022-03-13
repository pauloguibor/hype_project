<template>
  <div class="home">
    <PageTitle icon="fa fa-shopping-bag" main=" Suas compras" sub="Carrinho" />
    <router-link to="/cartItens" style="text-decoration: none; color: inherit">
      <div class="stats">
        <Stat
          title="Carrinho de compras"
          :value="size"
          icon="fa fa-shopping-cart"
          color="green"
        />
      </div>
    </router-link>
    <hr>
    <router-link to="/favoriteItens" style="text-decoration: none; color: inherit">
      <div class="stats">
        <Stat
          title="Favoritados"
          :value="favs"
          icon="fa fa-star"
          color="rgb(173, 157, 9)"
        />
      </div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import Stat from "./Stat";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data() {
    return {
      stat: {},
    };
  },
  computed:{
    size(){
      return this.$store.state.carrinho.produtos.length
    },
    favs(){
      return this.$store.state.favoritos.favoritos.length
      
    }
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>