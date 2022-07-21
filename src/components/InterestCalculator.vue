<script setup lang="ts">
import { ref, computed } from "vue";
import NumberInput from "./NumberInput.vue";

const loanAmount = ref(500000);
const interestReferenceRate = ref(0);
const interestMargin = ref(0.5);

const interestRate = computed(
  () =>
    Math.round((interestReferenceRate.value + interestMargin.value) * 1000) /
    1000
);
const yearlyInterest = computed(
  () => Math.round(loanAmount.value * (interestRate.value / 100) * 100) / 100
);
const monthlyInterest = computed(
  () => Math.round((yearlyInterest.value / 12) * 100) / 100
);
</script>

<template>
  <div class="root">
    <fieldset>
      <legend>Loan details</legend>
      <NumberInput label="Loan amount (€)" v-model="loanAmount" />
      <NumberInput
        label="Interest reference rate (%)"
        v-model="interestReferenceRate"
      />
      <NumberInput label="Interest margin (%)" v-model="interestMargin" />
    </fieldset>
    <table>
      <tbody>
        <tr>
          <th>Interest rate</th>
          <td>{{ interestRate }} %</td>
        </tr>
        <tr>
          <th>Yearly interest</th>
          <td>{{ yearlyInterest }} €</td>
        </tr>
        <tr>
          <th>Monthly interest</th>
          <td>{{ monthlyInterest }} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
tr:nth-child(odd) {
  background-color: seashell;
}
th {
  padding: 0.5em;
  text-align: left;
}
td {
  padding: 0.5em;
  font-size: 1.1em;
  font-weight: 600;
  text-align: right;
}
</style>
