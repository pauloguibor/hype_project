<template>
  <div class="admin-page">
    <PageTitle
      icon="fa fa-check-circle-o"
      main=" Lista de pedidos"
      sub="Compras"
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Seus Pedidos">
            <Pedidos />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import Pedidos from "./Pedidos.vue";

export default {
  name: "AdminPage",
  components: {
    PageTitle,
    Pedidos,
  },
};
</script>

<style>
</style>