<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input type="text" :value="modelValue" @input="updateValue" />
  </label>
</template>

<style scoped>
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}
input {
  padding: 1em;
  border: 1px solid black;
  border-radius: 0.4em;
  background-color: seashell;
  font-size: 1.1em;
  font-weight: 600;
}
</style>
