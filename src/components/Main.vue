<template>
  <section>
    <form-wrapper
      :selected-input-item="selectedInputItem"
    />
    <main-footer
      :step-index="stepIndex"
      :is-last-step="stepIndex === input.items.length - 1"
      @backClick="onStepChange(-1)"
      @nextClick="onStepChange(1)"
    />
  </section>
</template>

<script>
import input from '@/assets/input.json'

export default {
  name: 'MainPage',
  components: {
    FormWrapper: () => import('@/components/FormWrapper'),
    MainFooter: () => import('@/components/Footer')
  },
  data () {
    return {
      input,
      stepIndex: 0
    }
  },
  computed: {
    selectedInputItem () {
      return this.input.items[this.stepIndex]
    }
  },
  methods: {
    onStepChange (step) {
      this.stepIndex = this.stepIndex + step
    }
  }
}
</script>
