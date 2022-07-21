<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  loanAmount: number;
  interestMargin: number;
}>();

function calculateInterestRate(
  interestReferenceRate: number,
  interestMargin: number
) {
  return Math.round((interestReferenceRate + interestMargin) * 1000) / 1000;
}

function calculateYearlyInterest(
  loanAmount: number,
  interestReferenceRate: number,
  interestMargin: number
) {
  return (
    Math.round(
      loanAmount *
        (calculateInterestRate(interestReferenceRate, interestMargin) / 100) *
        100
    ) / 100
  );
}

function calculateMonthlyInterest(
  loanAmount: number,
  interestReferenceRate: number,
  interestMargin: number
) {
  return (
    Math.round(
      (calculateYearlyInterest(
        loanAmount,
        interestReferenceRate,
        interestMargin
      ) /
        12) *
        100
    ) / 100
  );
}

const scenarios = computed(() =>
  [0, 0.5, 1, 1.5, 2, 3, 4, 5].map((interestReferenceRate) => ({
    ...props,
    interestReferenceRate,
    interestRate: calculateInterestRate(
      interestReferenceRate,
      props.interestMargin
    ),
    yearlyInterest: calculateYearlyInterest(
      props.loanAmount,
      interestReferenceRate,
      props.interestMargin
    ),
    monthlyInterest: calculateMonthlyInterest(
      props.loanAmount,
      interestReferenceRate,
      props.interestMargin
    ),
  }))
);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Interest reference rate</th>
        <th>Interest rate</th>
        <th>Yearly interest</th>
        <th>Monthly interest</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="scenario in scenarios" :key="scenario.interestReferenceRate">
        <th>{{ scenario.interestReferenceRate }}</th>
        <td>{{ scenario.interestRate }} %</td>
        <td>{{ scenario.yearlyInterest }} €</td>
        <td>{{ scenario.monthlyInterest }} €</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
tr:nth-child(even) {
  background-color: seashell;
}
thead tr {
  background-color: bisque;
}
th {
  padding: 0.5em;
  text-align: right;
  font-weight: 600;
}
td {
  padding: 0.5em;
  text-align: right;
  font-size: 1.1em;
}
</style>
