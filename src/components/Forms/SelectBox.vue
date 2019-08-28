<template>
  <select>
    <option disabled>
      답변을 선택해주세요
    </option>
    <option
      v-for="option in inputOptions"
      :key="`option${option.id}`"
      :value="option.id"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Selectbox',
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
