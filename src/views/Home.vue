<template>
  <v-container fluid class="padding_0">
    <v-row class="hero">
      <v-col class="converter-col">
        <p class="font-weight-bold text-size text-color-white">Convert currencies in real-time.</p>
        <app-converter></app-converter>
      </v-col>
    </v-row>

    <v-row class="result">
      <v-col class="result-col">
        <div class="underline">
          <transition name="fade">
            <p v-if="amount" class="amount-text font-weight-regular" align="left">
              {{amount}}
              <transition name="fade">
                <span v-if="from">{{ from + " = "}}</span>
              </transition>
            </p>
          </transition>
          <transition name="slide-fade">
            <p
              v-if="result"
              class="result-text font-weight-bold"
              align="left"
            >{{result}} {{result && to}}</p>
          </transition>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Converter from "../components/Converter.vue";
export default {
  name: "Home",
  components: {
    appConverter: Converter
  },
  computed: {
    ...mapGetters({
      result: "result",
      amount: "amount",
      from: "from",
      to: "to"
    })
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .text-size {
        font-size: 2rem;

        @media (max-width: 345px) {
          font-size: 1.2rem;
          text-align: center !important;
        }
      }

      .text-color-white {
        color: white;
      }
    }
  }

  .result {
    height: 50vh;
    .result-col {
      display: flex;
      justify-content: center;
      align-items: center;

      .underline {
        min-width: 1%;
        border-bottom: 6px dotted #2f82d6;
      }
    }

    @media (max-width: 896px) {
      height: 100%;
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
