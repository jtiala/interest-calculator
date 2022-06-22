<script setup lang="ts">
import InterestCalculator from "./components/InterestCalculator.vue";
</script>

<template>
  <header>
    <h1>Interest Calculator</h1>
  </header>

  <main>
    <InterestCalculator />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 2rem;
  font-weight: normal;
}
</style>
