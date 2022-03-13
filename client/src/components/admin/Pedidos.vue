<template>
  <div class="user-admin">
    <b-card>
      <b-form>
        <b-row>
          <b-col md="6">
            <b-form-group label="Numero do pedido:" label-for="link-url">
              <b-form-input
                id="link-url"
                type="text"
                v-model="link.new_url"
                :readonly="mode === 'remove'"
                required
                placeholder="Informe o codigo do produto"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button variant="danger" @click="remove"> Cancelar Pedido </b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </b-form>
      <hr />
    </b-card>
    <b-table hover striped :items="pedidos" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="danger" @click="loadUrl(data.item)" class="mr-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { showError, http, userKey } from "@/global";
import authHeader from "@/AuthHeader";
export default {
  name: "UserAdmin",
  data() {
    return {
      mode: "save",
      link: {},
      links: [],
      fields: [
        { key: "id", label: "Código do Pedido", sortable: true },
        { key: "qtd", label: "Quantidade", sortable: true },
        { key: "valor", label: "Preço", sortable: true },
        { key: "actions", label: "Ações", sortable: true },
      ],
    };
  },
  computed:{
    pedidos(){
      return this.$store.state.pedidos.pedidos
    }
  },
  methods: {
    loadUrls() {
      let id = JSON.parse(localStorage._knowledge_user).user.id;
      // http.get("/urls/list/" + id, { headers: authHeader() }).then((res) => {
      //   this.links = res.data;
      // });
    },
    reset() {
      this.mode = "save";
      this.link = {};
      this.loadUrls();
    },
    save() {
      let user = JSON.parse(localStorage._knowledge_user).user.id;
      const method = this.link.id ? "put" : "post";
      const id = this.link.id ? `/${this.link.id}` : "";
      // http[method](
      //   `/urls/create${id}`,
      //   {
      //     url: this.link.url,
      //     new_url: this.link.new_url,
      //     user_id: user,
      //   },
      //   { headers: authHeader() }
      // )
      //   .then(() => {
      //     this.reset();
      //     this.loadUrls();
      //   })
      //   .catch(showError);
    },
    remove() {
      const id = this.link.id;
      http
        .delete("/urls/delete/" + id, { headers: authHeader() })
        .then(() => {
          this.reset();
          this.loadUrls();
        })
        .catch(showError);
    },
    loadUrl(url, mode = "save") {
      this.link = { ...url };
      this.mode = mode
    },
  },
  created() {
    this.loadUrls();
  },
};
</script>

<style>
</style>