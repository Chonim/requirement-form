<template>
  <select
    @change="handleSelect($event.target.value)"
  >
    <option
      disabled
      :selected="!savedOutput"
    >
      답변을 선택해주세요
    </option>
    <option
      v-for="option in inputOptions"
      :key="`option${option.id}`"
      :value="option.text"
      :selected="option.text === savedOutput"
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
    },
    savedOutput: {
      type: String,
      required: false
    }
  },
  methods: {
    handleSelect (text) {
      this.$emit('change', text)
    }
  }
}
</script>

<style scoped>

</style>
