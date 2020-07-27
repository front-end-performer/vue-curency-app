<template>
  <v-app>
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
  }
};
</script>
