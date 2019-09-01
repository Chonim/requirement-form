<template>
  <input
    type="text"
    :value="savedOutput"
    @change="handleInput($event.target.value)"
  >
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    savedOutput: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  watch: {
    savedOutput: {
      immediate: true,
      handler (savedOutput) {
        this.inputValue = savedOutput
      }
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>

</style>
