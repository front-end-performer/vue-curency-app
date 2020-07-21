<template>
  <v-app>
    <v-app-bar app color="transparent" absolute dense flat>
      <div class="d-flex align-center">
        <router-link to="/" class="logo">CURRENCY CONV.</router-link>
      </div>
    </v-app-bar>
    <v-main style="padding: 0">
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.logo {
  font-weight: bolder;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}
</style>
