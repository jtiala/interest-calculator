<script setup lang="ts">
const props = defineProps<{
  legend: string;
}>();
</script>

<template>
  <fieldset>
    <legend>{{ props.legend }}</legend>
    <slot></slot>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
legend {
  align-self: flex-start;
}
</style>
