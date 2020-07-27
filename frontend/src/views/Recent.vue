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
          <h1 v-for="el in recents" :key="el.id" style="color: white">{{ el.amount }}</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "History",
  data() {
    return {
      recents: []
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:8081/api/recent")
        .then(item => {
          let data = item.data.conversions;
          data.map(el => {
            this.recents.push(el);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.fetchData();
  }
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
