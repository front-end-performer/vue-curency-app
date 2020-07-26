<template>
  <div class="recent">
    <v-container fluid class="padding_0">
      <v-row>
        <v-col>
          <router-link color="#2f82d6" to="/" class="btn">
            <span class="link">Back</span>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1>This is an recent page</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "History"
};
</script>

<style scoped>
.recent {
  background-color: #363a3e;
  height: 100vh;
}

.btn {
  color: white;
  text-decoration: none;
}
</style>
