<template>
  <div class="admin-page">
    <PageTitle
      icon="fa fa-check-circle-o"
      main="Nossos Produtos"
      sub="Compras"
    />

    <div style="display: flex; flex-wrap: wrap">
      <div v-for="name in names">
        <b-card
          :title="name.nome"
          :img-src="name.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 p-3 ml-1"
        >
          <p>
            {{ name.descricao }}
          </p>
          <h4>R$ {{ name.preco }}</h4>

          <div style="display flex">
            <b-button variant="success"
              ><i
                class="fa fa-plus"
              
                @click="adicionar(name)"
              ></i
            ></b-button>
            <b-button
              :variant="checkFav(name.id) ? 'warning' : ''"
              @click="changeFav(name)"
            >
              <i class="fa fa-star"></i>
            </b-button>

            <span> </span>
          </div>
        </b-card>
      </div>
    </div>
    <router-link to="/cart/itens" style="text-decoration: none; color: inherit">
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PageTitle from "../template/PageTitle.vue";
import { http } from "@/global";

export default {
  name: "Produtos",
  components: {
    PageTitle,
  },
  data() {
    return {
      verbos: [],
      adjetivos: [],
      names: [],
      descricao:[`Fácil, montagem e desmontagem.
      Churrasqueira e grelha em alumínio fundido.`,
      `Com uma altera ideal para se fazer um bom churrasco.`,
      `Não aceito trocas. Apenas entrega em mãos em Indaiatuba/Campinas.`,
      `Melhore o fluxo de fumaça da sua churrasqueira com a instalação de motor para exaustão.`,
      `Item multifuncional e muito utilizado em escritorios`,
      `Objeto de grande valor financeiro e sentimental`,
       "Alta durabilidade e nunca vai enferrujar.",
       "Leve e portátil feita pra qualquer lugar"]
    };
  },
  methods: {
    ...mapActions("carrinho", ["adicionarProduto"]),
    ...mapActions("favoritos", ["adicionarFavorito", "removerFavorito"]),
    adicionar(item) {
      this.adicionarProduto(item);
    },
    adicionarFav(item) {
      this.adicionarFavorito(item);
    },
    changeFav(name) {
      name.fav = !name.fav;
      if (name.fav) {
        this.adicionarFavorito(name);
      }
      if (!name.fav) {
        this.removerFavorito(name);
      }
      this.checkFav(name.id)
      return name.fav;
    },
    makeRequest() {
      http.get("/nomes/list").then((res) => {
        this.verbos = res.data.nomes.verbos;
        this.adjetivos = res.data.nomes.adjetivos;

        let size = this.verbos.length;
        for (let i = 0; i < size; i++) {
          let name = {};
          name["nome"] = this.verbos
            .pop([Math.floor(Math.random() * this.verbos.length)])
            .concat(
              " ",
              this.adjetivos.pop([
                Math.floor(Math.random() * this.adjetivos.length),
              ])
            );
          name["descricao"] = this.descricao[Math.floor(Math.random() * this.descricao.length)];
          name["img"] = "https://picsum.photos/600/400";
          name["preco"] = Math.abs(
            10 +
              name["nome"].length *
                ((500 - name["descricao"].length) / (3 - name["nome"].length))
          ).toFixed(2);
          name["id"] = i;
          name["quantidade"] = 1;
          name["fav"] = false;

          this.names.push(name);
        }
      });
    },
    checkFav(id) {
      var arr = this.$store.state.favoritos.favoritos;
      var _return = false;
      if (arr.length > 0) {
        arr.forEach((p) => {
          if (p.id == id) {
            _return = true;
          }
        });
      }
      return _return;
    },
  },
  created() {
    this.makeRequest();
  },
};
</script>

<style>
</style>