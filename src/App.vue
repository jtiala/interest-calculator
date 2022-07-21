<script setup lang="ts">
import { ref, watch } from "vue";
import InputGroup from "./components/InputGroup.vue";
import CalculationsTable from "./components/CalculationsTable.vue";
import NumberInput from "./components/NumberInput.vue";
import { getNumberParam } from "./utils/searchParams";

const searchParams = ref(new URLSearchParams(window.location.search));
const loanAmount = ref(getNumberParam(searchParams.value, "amount") || 500000);
const interestMargin = ref(getNumberParam(searchParams.value, "margin") || 0.5);

watch([loanAmount, interestMargin], () => {
  const url = new URL(window.location.href);

  url.search = new URLSearchParams({
    amount: loanAmount.value.toString(),
    margin: interestMargin.value.toString(),
  }).toString();

  window.history.replaceState(undefined, "", url);
});
</script>

<template>
  <header>
    <h1>Interest Calculator</h1>
  </header>

  <main>
    <form method="GET" @submit.prevent>
      <InputGroup legend="Loan details">
        <NumberInput
          label="Loan amount (€)"
          name="amount"
          v-model="loanAmount"
        />
        <NumberInput
          label="Interest margin (%)"
          name="margin"
          v-model="interestMargin"
        />
      </InputGroup>
    </form>
    <CalculationsTable
      :loanAmount="loanAmount"
      :interestMargin="interestMargin"
    />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 2rem;
  font-weight: normal;
}
main {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
