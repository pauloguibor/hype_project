<template>
  <div class="admin-page">
    <PageTitle
      icon="fa fa-check-circle-o"
      main="Itens no carrinho"
      sub="Itens"
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Carrinho Itens">
            <b-card>
              <b-form>
                <b-row>
                  <b-col md="6">
                    <b-form-group
                      label="Codigo do item:"
                    >
                      <b-form-input
                        type="text"
                        v-model="produto.nome"
                        :readonly="mode === 'remove'"
                        required
                        placeholder="Informe o codigo do produto"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-button variant="danger" @click="remove">
                  Remover do carrinho
                </b-button>
                <b-button class="ml-2" @click="reset">Cancelar</b-button>
              </b-form>
              <hr />
            </b-card>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <b-table hover striped :items="carrinho" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="danger" @click="loadUrl(data.item)" class="mr-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <div class="execute-shop" v-if="carrinho.length > 0" @click="endShopping(carrinho)">
      <b-button variant="primary" class="mr-2">
         <h4><b>Finalizar compra</b></h4>
        </b-button>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import { mapActions } from "vuex";

export default {
  name: "AdminPage",
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
      produto: {
      },
      mode:''
    };
  },
  computed: {
    carrinho() {
      return this.$store.state.carrinho.produtos;
    },
  },
  methods: {
    ...mapActions("carrinho", ["removerProduto"]),
    ...mapActions("pedidos", ["adicionarPedido"]),
    reset() {
      this.produto = {};
      this.mode = ''
    },
    remove() {
      const id = this.produto.id;
      this.removerProduto(id)
      this.produto = {}
    },
    loadUrl(item){
      this.produto = item
      this.mode = 'remove'
    },
    endShopping(cart){
      this.adicionarPedido(cart)
    }
  },
};
</script>

<style>
.execute-shop {
  position: fixed;
  right: 20px;
  bottom: 30px;
  z-index: 10;
}
.execute-shop b{
  text-transform: uppercase;
}
 
</style>