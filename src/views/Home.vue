<template>
  <div class="home-wrapper">
    <v-container fluid class="home-padding-top home-bg" style="border: 1px solid yellow;">
      <v-row class="text-center hero">
        <v-col cols="12" class="home-col">
          <p
            class="text-left font-weight-bold text-size title-padding-top text-color-white"
          >Convert currencies in real-time.</p>
        </v-col>
        <v-col class="converter-col">
          <app-converter></app-converter>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="border: 1px solid darkred;">
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
.home-wrapper {
  .home-padding-top {
    padding-top: 3rem !important;
  }
  .home-bg {
    background-color: #363a3e;

    .hero {
      height: 30vh;
      position: relative;
      border: 1px solid green;

      @media (max-width: 896px) {
        height: 50vh;
      }

      .home-col {
        padding: 0 2rem;
        @media (max-width: 345px) {
          padding: 0 1rem;
        }

        .text-size {
          font-size: 2rem;

          @media (max-width: 345px) {
            font-size: 1.2rem;
            text-align: center !important;
          }
        }

        .title-padding-top {
          padding-top: 5rem;
        }

        .text-color-white {
          color: white;
        }
      }
      .converter-col {
        position: relative;
        // margin-top: 5rem;
        padding-left: 2rem;
      }
    }
  }

  .result {
    height: calc(50vh + 6vh);
    align-items: center;
    justify-content: flex-start;

    .mb-4 {
      height: 100%;
    }

    @media (max-width: 896px) {
      height: 100%;
    }
  }

  .result-text {
    padding-top: 10%;
    padding-left: 6rem;

    @media (max-width: 345px) {
      padding-left: 0rem;
      text-align: center;
    }

    .font-size-lg {
      font-size: 40px;

      @media (max-width: 345px) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
