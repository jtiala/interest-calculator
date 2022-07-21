<script setup lang="ts">
import { ref } from "vue";
import InputGroup from "./components/InputGroup.vue";
import CalculationsTable from "./components/CalculationsTable.vue";
import NumberInput from "./components/NumberInput.vue";

const loanAmount = ref(500000);
const interestMargin = ref(0.5);
</script>

<template>
  <header>
    <h1>Interest Calculator</h1>
  </header>

  <main>
    <InputGroup legend="Loan details">
      <NumberInput label="Loan amount (€)" v-model="loanAmount" />
      <NumberInput label="Interest margin (%)" v-model="interestMargin" />
    </InputGroup>
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
