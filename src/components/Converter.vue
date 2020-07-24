<template>
  <v-card>
    <v-card-text>
      <v-container fluid grid-list-xl fill-height>
        <v-layout wrap align-center>
          <v-flex xs12 sm3 d-flex>
            <v-text-field
              class="border_0"
              v-model="amount"
              :typedAmount="typedAmount"
              :rules="amountRules"
              label="Amount"
              required
              filled
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3 d-flex>
            <v-select
              class="border_0"
              v-model="from"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              menu-props="auto"
              label="From"
              required
              filled
            ></v-select>
          </v-flex>
          <v-flex xs12 sm3 d-flex>
            <v-select
              class="border_0"
              v-model="to"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              menu-props="auto"
              label="To"
              required
              filled
            ></v-select>
          </v-flex>
          <v-col cols="12" sm="3" class="text-align">
            <v-btn class="primary" @click="convert">Convert</v-btn>
          </v-col>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
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
  computed: {
    typedAmount() {
      const form = {
        amount: this.amount,
        from: this.from,
        to: this.to
      };
      return this.$store.dispatch("input", form);
    }
  },
  methods: {
    convert() {
      this.loading = true;
      const form = {
        amount: this.amount,
        from: this.from,
        to: this.to
      };
      this.$store.dispatch("convert", form);

      setTimeout(() => (this.loading = false), 1000);
    }
  }
};
</script>

<style lang="scss">
.border_0.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
  border-radius: 5px;
}
.border_0.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  position: absolute;
  top: 100%;
  width: 100%;
}

.v-card {
  max-width: 80% !important;

  @media (max-width: 900px) {
    max-width: 100% !important;
  }

  .container.grid-list-xl .layout .flex {
    width: 200px;
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
.text-align {
  text-align: center;
}
</style>
