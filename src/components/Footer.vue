<template>
  <footer class="buttons-wrapper">
    <button
      class="back-button"
      :disabled="stepIndex === 0"
      @click="$emit('backClick')"
    >Back</button>

    <button
      :disabled="isLastStep"
      @click="$emit('nextClick')"
    >Next</button>

    <!-- show only when all questions are answered -->
    <button
      v-show="isLastStep"
    >
      Submit
    </button>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    stepIndex: {
      type: Number,
      required: true
    },
    isLastStep: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  min-width: 48px;
  height: 36px;
  border-radius: 4px;
  font-size: 12px;
  color: #2c3e50;
  background: #95a5a6;
  transition: all 0.2s ease-out;
  cursor: pointer;
  margin-right: 4px;
}

button:last-child {
  margin-right: 0;
}

button:hover {
  color: #fff;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

button:disabled:hover {
  color: #2c3e50;
}
</style>
