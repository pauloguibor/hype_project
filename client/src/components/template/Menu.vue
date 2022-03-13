<template>
  <aside class="menu" v-show="isMenuVisible">
    <div>
      <h2>
        <b>Páginas</b>
      </h2>
    </div>
    <hr />
    <ul>
      <router-link to="/">
        <li>
          <h5><b>Produtos</b></h5>
        </li>
      </router-link>
      
      <router-link to="/pedidos">
        <li>
          <h5><b>Pedidos</b> </h5>
        </li>
      </router-link>
      <router-link to="/cart">
        <li>
          <h5><b>Carrinho</b> </h5>
        </li>
      </router-link>
    </ul>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";

export default {
  name: "Menu",
  components: { Tree },
  computed: mapState(["isMenuVisible"]),
  data() {
    return {
      treeData: [{ text: "Dashboard" }, { text: "Links" }],
      treeOptions: {
        propertyname: {
          text: "name",
        },
      },
    };
  },
  methods: {},
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #f7de00, #c2af01);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  left: 0px;
  top: 60px;
  z-index: 10;
  border-radius: 1em;
  width: 18em;
  min-height: 20em;
}
.menu a {
  font-size: 2rem;
}
.menu a,
.menu a:hover {
  color: #ffffff;
  text-decoration: none;
}
.menu ul li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.menu ul li {
  background-color: rgb(255, 255, 255);
  margin-top: 1rem;
  width: 80%;
  list-style-type: none;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  color: #020202;
}
.menu ul {
  margin-top: 0.5rem;
}
.menu hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
.menu div {
  display: flex;
  justify-content: center;
  color: #000;
  text-transform: uppercase;
  padding-top: 1em;
}
</style>