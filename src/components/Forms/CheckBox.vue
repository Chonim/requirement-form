<template>
  <div class="check-box-wrapper">
    <div
      v-for="option in inputOptions"
      :key="`checkbox${option.id}`"
    >
      <input
        type="checkbox"
        :value="option.text"
        :checked="savedOutput.includes(option.text)"
        :name="`checkbox${option.id}`"
        :id="`checkbox${option.id}`"
        @click="handleClick(option.text)"
      >
      <label :for="`checkbox${option.id}`">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    inputOptions: {
      type: Array,
      required: true
    },
    savedOutput: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      checkedOptions: []
    }
  },
  watch: {
    savedOutput: {
      immediate: true,
      handler () {
        this.checkedOptions = this.savedOutput
      }
    }
  },
  methods: {
    handleClick (text) {
      const index = this.checkedOptions.findIndex(option => option === text)
      if (index > -1) {
        this.checkedOptions.splice(index, 1)
      } else {
        this.checkedOptions.push(text)
      }
      this.$emit('change', this.checkedOptions)
    }
  }
}
</script>
