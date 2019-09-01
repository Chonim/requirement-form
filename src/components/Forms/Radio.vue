<template>
  <div class="radio-wrapper">
    <div
      v-for="option in inputOptions"
      :key="`radio${option.id}`"
    >
      <input
        type="radio"
        :value="option.text"
        :checked="option.text === savedOutput"
        :name="`radio${option.id}`"
        :id="`radio${option.id}`"
        @click="handleClick(option.text)"
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
    },
    savedOutput: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick (text) {
      this.$emit('change', text)
    }
  }
}
</script>

<style scoped>

</style>
