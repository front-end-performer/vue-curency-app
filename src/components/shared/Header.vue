<template>
  <v-app-bar app color="transparent" absolute dense flat style="border: 1px solid red!important">
    <div class="d-flex align-center">
      <router-link to="/" class="logo">CURRENCY CONV.</router-link>
    </div>
  </v-app-bar>
</template>

<style scoped>
.logo {
  font-weight: bolder;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  padding-left: 16px;
}

@media (max-width: 345px) {
  .align-center {
    margin: 0 auto;
  }
  .logo {
    text-align: center !important;
    padding: 0;
  }
}
</style>