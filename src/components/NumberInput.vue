<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

function updateValue(event: Event) {
  emit("update:modelValue", Number((event.target as HTMLInputElement).value));
}
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input type="number" :value="modelValue" @input="updateValue" />
  </label>
</template>

<style scoped>
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  width: 8em;
  padding: 1em;
  border: 1px solid black;
  border-radius: 0.4em;
  background-color: seashell;
  font-size: 1.1em;
  font-weight: 600;
  text-align: right;
}
</style>
