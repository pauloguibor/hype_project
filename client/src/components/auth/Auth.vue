<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/acme_logo.png" width="200" alt="logo" />
      <hr />
      <div class="auth-title">
        <b>{{ showSignup ? "Cadastro" : "Login" }}</b>
      </div>
      <input
        type="text"
        v-if="showSignup"
        v-model="user.username"
        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        v-model="user.email"
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        v-model="user.password"
        placeholder="Senha"
      />

      <button v-if="showSignup" @click="register">Registrar</button>
      <button v-else @click="login">Entrar</button>

      <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span v-else>Não tem cadastro? Registre-se aqui!</span>
      </a>
    </div>
  </div>
</template>

<script>
import { http, userKey, showError } from "@/global";

export default {
  components: {  },
  name: "Auth",
  data() {
    return {
      openPopup: false,
      showSignup: false,
      user: {},
      links: {
        url: "",
        new_url: "",
      },
    };
  },
  methods: {
    login() {
      http
        .post("/auth/signin", {
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          this.$store.commit("setUser", response.data);
          if (response.data.accessToken) {
            localStorage.setItem(userKey, JSON.stringify(response.data));
            this.$router.push({ path: "/" });
          }
          return response.data;
        })

    },
    register() {
      http
        .post("/auth/signup", {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        })
        .then((res) => {
          if (res == "Usuário registrado") {
            return true;
          }
        })
        .catch(showError);
      this.user = {};
      this.showSignup;
    },
    logout() {
      localStorage.removeItem(userKey);
    },
    editUrl() {
      this.openPopup = true;
    },
    reset() {
      this.links = {
        url: "",
        new_url: "",
      };
    },
    createurl(){
      http
        .post("/urlramdom/create", {
          url: this.links.url,
        })
        .then((res) => {
         this.links.new_url = res.data.new_url
        })
    }
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center

}
.auth-modal {
  background-color: #fff;
  width: 30%;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #2460ae;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
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

.buttom-ramdom {
  position: fixed;
  left: 20px;
  bottom: 40px;
  z-index: 10;
}
</style>