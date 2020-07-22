<template>
  <v-card :loading="loading" class="my-12">
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-form ref="form" v-model="valid" lazy-validation class="form">
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="amount"
              :rules="amountRules"
              label="Amount"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              v-model="from"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              menu-props="auto"
              label="From"
              required
            ></v-select>
          </v-col>
          <v-img
            width="20"
            height="20"
            class="img"
            src="../assets/switcher.png"
          ></v-img>
          <v-col cols="12" sm="3">
            <v-select
              v-model="to"
              :items="items"
              menu-props="auto"
              label="To"
              :rules="[v => !!v || 'Item is required']"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn class="primary" @click="convert">Convert</v-btn>
          </v-col>
        </v-form>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from "axios";

export default {
  name: "Converter",
  data: () => ({
    loading: false,
    selection: 1,
    valid: true,
    amount: "",
    amountRules: [
      v => !!v || "Amount is required",
      v => (v && v.length >= 1) || "Amount must be valid"
    ],
    from: null,
    to: null,
    items: ["USD", "EUR", "GBP", "JPY"]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    convert() {
      this.loading = true;
      const form = {
        amount: this.amount,
        items1: this.from,
        items2: this.to
      };
      this.$store.dispatch("convert", form);

      setTimeout(() => (this.loading = false), 1000);
    }
  }
};
</script>

<style lang="scss">
.v-card {
  max-width: 80% !important;

  @media (max-width: 900px) {
    max-width: 100% !important;
  }
}
.form {
  width: 100%;
  display: flex;
  align-items: center;

  .v-image__image--cover {
    background-size: inherit !important;
  }

  .img {
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    display: initial;

    .v-image__image--cover {
      text-align: center;
    }
  }
}
</style>
