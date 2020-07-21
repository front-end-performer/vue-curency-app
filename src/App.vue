<template>
  <v-app>
    <app-header></app-header>
    <v-main style="padding: 0">
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/shared/Header";
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    appHeader: Header,
    Home
  }
};
</script>


