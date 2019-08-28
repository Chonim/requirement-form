<template>
  <div class="check-box-wrapper">
    <div
      v-for="option in inputOptions"
      :key="`checkbox${option.id}`"
    >
      <input
        type="checkbox"
        :name="`checkbox${option.id}`"
        :id="`checkbox${option.id}`"
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
    }
  }
}
</script>

<style scoped>

</style>
