<template>
  <div class="home">
    <PageTitle icon="fa fa-shopping-bag" main=" Suas compras" sub="Carrinho" />
    <router-link to="/cart/itens" style="text-decoration: none; color: inherit">
      <div class="stats">
        <Stat
          title="Carrinho de compras"
          :value="size"
          icon="fa fa-shopping-cart"
          color="#d54d50"
        />
      </div>
    </router-link>
    <hr>
    <router-link to="/cart/itens" style="text-decoration: none; color: inherit">
      <div class="stats">
        <Stat
          title="Favoritados"
          :value="favs"
          icon="fa fa-star"
          color="#d54d50"
        />
      </div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import Stat from "./Stat";
import { http } from "@/global";
import authHeader from "@/AuthHeader";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data() {
    return {
      stat: {},
      size: 0,
      favs:2
    };
  },
  methods: {
    getUrl() {
      let id = JSON.parse(localStorage._knowledge_user).user.id;
      http.get("/urls/list/" + id, { headers: authHeader() }).then((res) => {
        this.size = res.data.length;
      });
    },
  },
  mounted() {
    this.getUrl();
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