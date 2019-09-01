<template>
  <section class="form-wrapper">
    <header>
      <h1>
        Step {{ selectedInputItem.itemId }}
      </h1>
    </header>
    <section>
      <p>
        {{ selectedInputItem.title }}
      </p>
    </section>
    <component
      :is="componentToRender"
      :input-options="selectedInputItem.options"
      :saved-output="savedOutput(selectedInputItem.itemId)"
      @change="handleChange($event)"
    />
  </section>
</template>

<script>
import { FORM_TYPES } from '@/config/constants'

export default {
  name: 'FormWrapper',
  props: {
    selectedInputItem: {
      type: Object,
      required: true
    },
    formId: {
      type: Number,
      required: true
    }
  },
  components: {
    CheckBox: () => import('@/components/Forms/CheckBox'),
    RadioInput: () => import('@/components/Forms/Radio'),
    SelectBox: () => import('@/components/Forms/SelectBox'),
    TextInput: () => import('@/components/Forms/TextInput')
  },
  data () {
    return {
      output: null
    }
  },
  computed: {
    componentToRender () {
      switch (this.selectedInputItem.formType) {
        case FORM_TYPES.CHECKBOX: return 'CheckBox'
        case FORM_TYPES.RADIO: return 'RadioInput'
        case FORM_TYPES.TEXT_INPUT: return 'TextInput'
        case FORM_TYPES.SELECT_BOX: return 'SelectBox'
        default: return ''
      }
    }
  },
  methods: {
    savedOutput (id) {
      if (!this.output) {
        return
      }
      const foundItem = this.output.items.find(item => item.id === id)
      return foundItem ? foundItem.answer : undefined
    },
    handleChange (answer) {
      if (!this.output) {
        this.output = {
          id: this.formId,
          items: []
        }
      }
      const id = this.selectedInputItem.itemId
      const foundItem = this.output.items.find(item => item.id === id)
      if (foundItem) {
        foundItem.answer = answer
      } else {
        this.output.items.push({
          id,
          answer
        })
      }
      console.log(this.output)
      this.$emit('outputChange', this.output)
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 560px;
  height: 200px;
  border: 1px solid #eee;
  padding: 16px;
  margin-bottom: 32px;
}

.form-wrapper header > h1 {
  color: #1dccaa;
  font-weight: bold;
  font-size: 32px;
  margin-top: 0px;
}
</style>
