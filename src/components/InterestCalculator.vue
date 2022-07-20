<script setup lang="ts">
import { ref, computed } from "vue";

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
      <label>
        <span>Loan amount (€)</span>
        <input type="number" v-model.number="loanAmount" />
      </label>
      <label>
        <span>Interest reference rate (%)</span>
        <input type="number" v-model.number="interestReferenceRate" />
      </label>
      <label>
        <span>Interest margin (%)</span>
        <input type="number" v-model.number="interestMargin" />
      </label>
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
label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
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
}
</style>
