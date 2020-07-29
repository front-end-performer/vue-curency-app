<template>
  <v-container fluid class="padding_0">
    <v-row class="hero">
      <v-col class="converter-col">
        <p class="font-weight-bold text-size text-color-white">Convert currencies in real-time.</p>
        <app-converter></app-converter>
        <v-btn raised color="#2f82d6" to="/api/recent" class="btn">
          <span class="link">View conversion history ></span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="result">
      <v-col class="result-col">
        <app-spinner v-if="isLoading"></app-spinner>
        <div v-else class="underline">
          <transition name="fade">
            <p class="result-text font-weight-bold">{{ result }}</p>
          </transition>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Converter from "./Converter.vue";
import Spinner from "./shared/ui/Spinner.vue";
export default {
  name: "Home",
  components: {
    appConverter: Converter,
    appSpinner: Spinner
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    result() {
      return this.$store.getters.result;
    }
  }
};
</script>

<style lang="scss">
.padding_0 {
  padding: 0 !important;

  .hero {
    background-color: #363a3e;
    height: 50vh;
    position: relative;

    .converter-col {
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .text-size {
        font-size: 2rem;

        @media (max-width: 345px) {
          font-size: 1.5rem;
          text-align: center !important;
        }
      }

      .text-color-white {
        color: white;
      }
      .btn {
        position: absolute;
        bottom: 1rem;
        .link {
          color: white;
        }
      }
    }
  }

  .result {
    height: 50vh;
    background-color: #fffeb9b6;
    .result-col {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .underline {
        min-width: 1%;
        height: auto;
        border-bottom: 6px dotted #2f82d6;

        @media (max-width: 400px) {
          min-width: 12%;
        }
      }
    }

    @media (max-width: 896px) {
      height: 50vh;
    }

    .amount-text {
      font-size: 1.2rem;
    }

    .result-text {
      font-size: 1.5rem;

      @media (max-width: 600px) {
        padding-top: 65%;
      }

      .font-size-lg {
        font-size: 40px;

        @media (max-width: 345px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
