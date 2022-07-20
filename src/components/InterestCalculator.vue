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
    <label>
      <span>Interest rate</span>
      <span>{{ interestRate }} %</span>
    </label>
    <label>
      <span>Yearly interest</span>
      <span>{{ yearlyInterest }} €</span>
    </label>
    <label>
      <span>Monthly interest</span>
      <span>{{ monthlyInterest }} €</span>
    </label>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
}
legend {
  align-self: flex-start;
}
label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}
</style>
