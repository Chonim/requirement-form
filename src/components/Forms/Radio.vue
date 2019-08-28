<template>
  <div class="radio-wrapper">
    <div
      v-for="option in inputOptions"
      :key="`radio${option.id}`"
    >
      <input
        type="radio"
        :name="`radio${option.id}`"
        :id="`radio${option.id}`"
      >
      <label :for="`radio${option.id}`">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioInput',
  props: {
    inputOptions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
