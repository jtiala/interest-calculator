<script setup lang="ts">
import { ref } from "vue";

const loanAmount = ref(0);
const interestReferenceRate = ref(0);
const interestMargin = ref(0);
const interestRate = ref(0);
const yearlyInterest = ref(0);
const monthlyInterest = ref(0);

const setLoanAmount = (e: Event) => {
  loanAmount.value = parseFloat((e.target as HTMLInputElement).value);
  calculateInterestRate();
  calculateYearlyInterest();
  calculateMonthlyInterest();
};

const setInterestReferenceRate = (e: Event) => {
  interestReferenceRate.value = parseFloat(
    (e.target as HTMLInputElement).value
  );
  calculateInterestRate();
  calculateYearlyInterest();
  calculateMonthlyInterest();
};

const setInterestMargin = (e: Event) => {
  interestMargin.value = parseFloat((e.target as HTMLInputElement).value);
  calculateInterestRate();
  calculateYearlyInterest();
  calculateMonthlyInterest();
};

const calculateInterestRate = () => {
  interestRate.value =
    Math.round((interestReferenceRate.value + interestMargin.value) * 1000) /
    1000;
};

const calculateYearlyInterest = () => {
  yearlyInterest.value =
    Math.round((loanAmount.value + interestRate.value) * 100) / 100;
};

const calculateMonthlyInterest = () => {
  monthlyInterest.value =
    Math.round(((loanAmount.value + interestRate.value) / 12) * 100) / 100;
};
</script>

<template>
  <fieldset>
    <legend>Loan details</legend>
    <label>
      <span>Loan amount</span>
      <input type="number" :value="loanAmount" @change="setLoanAmount" />
    </label>
    <label>
      <span>Interest reference rate</span>
      <input
        type="number"
        :value="interestReferenceRate"
        @change="setInterestReferenceRate"
      />
    </label>
    <label>
      <span>Interest margin</span>
      <input
        type="number"
        :value="interestMargin"
        @change="setInterestMargin"
      />
    </label>
    <label>
      <span>Interest rate</span>
      <input type="text" :value="interestRate" readonly />
    </label>
    <label>
      <span>Yearly interest</span>
      <input type="text" :value="yearlyInterest" readonly />
    </label>
    <label>
      <span>Monthly interest</span>
      <input type="text" :value="monthlyInterest" readonly />
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
