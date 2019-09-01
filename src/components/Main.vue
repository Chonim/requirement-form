<template>
  <section>
    <form-wrapper
      :form-id="input.formId"
      :selected-input-item="selectedInputItem"
      @outputChange="output = $event"
    />
    <main-footer
      :step-index="stepIndex"
      :is-last-step="stepIndex === input.items.length - 1"
      @backClick="onStepChange(-1)"
      @nextClick="onStepChange(1)"
      @submitClick="onSubmitClick()"
    />
  </section>
</template>

<script>
import { invalidAlert } from '@/utils/alert'
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
      output: null,
      stepIndex: 0
    }
  },
  computed: {
    selectedInputItem () {
      return this.input.items[this.stepIndex]
    }
  },
  methods: {
    validate () {
      const isOutputCreated = this.output !== null
      if (!isOutputCreated) {
        invalidAlert()
        return
      }
      const foundItem = this.output.items.find(item => item.id === this.selectedInputItem.itemId)
      if (!(foundItem && (Array.isArray(foundItem.answer) ? foundItem.answer.length : foundItem.answer))) {
        invalidAlert()
        return
      }
      return true
    },
    onStepChange (step) {
      if (step === 1 && !this.validate()) {
        return
      }
      this.stepIndex = this.stepIndex + step
      return true
    },
    onSubmitClick () {
      if (!this.validate()) {
        return
      }
      const items = this.output.items.map(item => {
        const answer = Array.isArray(item.answer) ? item.answer.join() : item.answer
        return {
          ...item,
          answer
        }
      })
      const finalOutput = {
        ...this.output,
        items
      }
      console.log(finalOutput)
      return finalOutput
    }
  }
}
</script>
