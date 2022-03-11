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
          <b-card-text>
           {{name.descricao}}
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
          <h4>R$ {{name.preco}}</h4>
        </b-card>
      </div>
    </div>
    <router-link to="/cart/itens" style="text-decoration: none; color: inherit">
    </router-link>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";

export default {
  name: "Produtos",
  components: {
    PageTitle,
  },
  data() {
    return {
      verbos: [
        "Armário",
        "Navio",
        "Mala",
        "Base",
        "Hidroavião",
        "Revista",
        "Carretel",
        "Minissaia",
        "Tamborim",
        "Andador",
        "Geladeira",
        "Estátua",
        "Rolo",
        "Crachá",
        "Peneira",
        "Bafômetro",
        "Desentupidor",
        "Guarda-chuva",
        "Espanador",
        "Escudo",
        "Raquete",
        "Vaso sanitário",
        "Lancheira",
        "Cofre",
        "Helióstato",
        "Medalha",
        "Foguete",
        "Lata",
        "Sintetizador",
        "Grampo",
        "Bucha",
        "Catraca",
        "Alfinete",
        "Caneca",
        "Fita",
        "Moeda",
        "Gel",
        "Maquete",
        "Interfone",
        "Gaveta",
        "Helicóptero",
        "Vela de cera",
        "Quimono",
        "Necessaire",
        "Machado",
        "Tecido",
        "Vareta de freio",
        "Obra de arte",
        "Canga",
      ],
      adjetivos: [
        "prepotente",
        "valioso",
        "legítimo",
        "desleixado",
        "Natural",
        "inteligente",
        "disciplinado",
        "louvável",
        "amargurado",
        "honesto",
        "odioso",
        "vergonhoso",
        "horroroso",
        "magnífico",
        "gordo",
        "romântico",
        "sublime",
        "mesquinho",
        "injusto",
        "medroso",
        "otário",
        "quente",
        "intenso",
        "Sábio",
        "zeloso",
        "desapegado",
        "faceiro",
        "companheiro",
        "empenhado",
        "espantoso",
        "traidor",
        "perfeccionista",
        "Qualificado",
        "feio",
        "tolerante",
        "orgulhoso",
        "ignorante",
        "lutador",
        "desejado",
        "exigente",
        "nostálgico",
        "próspero",
        "compreensivo",
        "excelente",
        "estourado",
        "malvado",
        "windsurfista",
        "falso",
        "melhor",
        "terno",
      ],
      imagens:[
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200',
        'https://picsum.photos/600/200'
      ],
      names: [],
    };
  },
  methods: {
    makeRamdomName() {
      let size = this.verbos.length;
      for (let i = 0; i < size; i++) {
        let name = {  };
        name["nome"] = this.verbos[i].concat(" ", this.adjetivos.reverse()[i]);
        name["descricao"] = `${name.nome} em bom estado`;
        name["img"] = this.imagens[i]
        name["preco"] =
          Math.abs(10 +
          name["nome"].length *
            ((500 - name["descricao"].length) / (3 - name["nome"].length))).toFixed(2);
        this.names.push(name);
      }
    },
  },
  created() {
    this.makeRamdomName();
  },
};
</script>

<style>
</style>