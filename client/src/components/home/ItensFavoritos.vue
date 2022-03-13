<template>
  <div class="admin-page">
    <PageTitle icon="fa fa-check-circle-o" main="Seus favoritos" sub="Itens" />

    <div style="display: flex; flex-wrap: wrap" v-if="favoritos.length > 0">
      <div v-for="fav in favoritos">
        <b-card
          :title="fav.nome"
          :img-src="fav.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 p-3 ml-1"
        >
          <p>
            {{ fav.descricao }}
          </p>
          <h4>R$ {{ fav.preco }}</h4>

          <div style="display flex">
            <b-button variant="success" @click="adicionar(fav)">
              <i class="fa fa-plus"></i
            ></b-button>
            <b-button variant="danger" @click="remove(fav)">
              <i class="fa fa-times"></i
            ></b-button>
          </div>
        </b-card>
      </div>
    </div>
    <div style="display: flex; justify-content: center" v-else>
      <h4>Não existem itens favoritos no momento</h4>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import { mapActions } from "vuex";

export default {
  name: "Favoritos",
  components: {
    PageTitle,
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Código do Pedido", sortable: true },
        { key: "nome", label: "Nome do pedido", sortable: true },
        { key: "preco", label: "Preço", sortable: true },
        { key: "actions", label: "Ações", sortable: true },
      ],
      produto: {},
      mode: "",
    };
  },
  computed: {
    favoritos() {
      return this.$store.state.favoritos.favoritos;
    },
  },
  methods: {
    ...mapActions("carrinho", ["adicionarProduto"]),
    ...mapActions("favoritos", ["removerFavorito"]),
    adicionar(item) {
      this.adicionarProduto(item);
      this.removerFavorito(item);
    },
    reset() {
      this.produto = {};
      this.mode = "";
    },
    remove(item) {
      this.removerFavorito(item);
    },
    loadUrl(item) {
      this.produto = item;
      this.mode = "remove";
    },
  },
};
</script>

<style>
</style>