<template>
  <v-card :loading="loading" class="my-12" max-width="80%">
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          style="width: 100%; border: 1px solid red; display: flex; align-items: center;"
        >
          <v-col cols="3">
            <v-text-field v-model="amount" :rules="amountRules" label="Amount" required></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>
          </v-col>
          <v-img width="auto" height="auto" src="../assets/switcher.png"></v-img>
          <v-col cols="3">
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>
          </v-col>
          <v-col cols="3">
            <v-btn class="primary" @click="reserve">Convert</v-btn>
          </v-col>
        </v-form>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    loading: false,
    selection: 1,
    valid: true,
    amount: "",
    amountRules: [
      v => !!v || "Amount is required",
      v => (v && v.length >= 1) || "Amount must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
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
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>


