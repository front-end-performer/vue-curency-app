<template>
  <div>
    <v-container fluid class="home-padding-top home-bg" style="border: 1px solid brown;">
      <v-row class="text-center hero">
        <v-col cols="12" style="padding-left: 2rem">
          <p
            style="border: 1px solid green"
            class="text-left font-weight-bold text-size title-padding-top text-color-white"
          >Convert currencies in real-time.</p>
        </v-col>
        <v-col class="converter-col">
          <app-converter></app-converter>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="result">
        <v-col class="mb-4">
          <p class="result-text font-weight-regular" align="left">
            From 1 Euro =
            <br />
            <span class="font-weight-bold font-size-lg">1.2 USD</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Converter from "../components/Converter.vue";
export default {
  name: "Home",
  components: {
    appConverter: Converter
  }
};
</script>

<style lang="scss">
.home-padding-top {
  padding-top: 3rem !important;
}
.home-bg {
  background-color: #363a3e;

  .hero {
    height: 30vh;
    position: relative;
  }

  .text-size {
    font-size: 2rem;
  }

  .title-padding-top {
    padding-top: 5rem;
  }

  .text-color-white {
    color: white;
  }
}

.result {
  height: calc(50vh + 6vh);
  align-items: center;
  justify-content: flex-start;
}

.result-text {
  padding-top: 10%;
  padding-left: 6rem;

  .font-size-lg {
    font-size: 40px;
  }
}

.converter-col {
  position: absolute;
  margin-top: 7rem;
  padding-left: 2rem;
}
</style>
