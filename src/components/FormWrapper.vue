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
    <!-- {{ selectedInputItem }} -->
    <component
      :is="componentToRender"
      :input-options="selectedInputItem.options"
      @change="handleChange()"
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
    }
  },
  components: {
    CheckBox: () => import('@/components/Forms/CheckBox'),
    RadioInput: () => import('@/components/Forms/Radio'),
    SelectBox: () => import('@/components/Forms/SelectBox'),
    TextInput: () => import('@/components/Forms/TextInput')
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
    handleChange () {
      // TODO: save key, value
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
